// PROTOTYPE — compare chapter-triggered playback with continuous scroll scrubbing.
import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { useMarkgraf } from "@markgrafhq/markgraf-react";
import "@markgrafhq/markgraf-react/css";

const source = `seed 17
scene opening {
  + browser: Browser
}
step foundation

scene arrivalRoute {
  + edge: Edge gateway
  + browser -> edge
}
scene arrival {
  browser ~> edge: GET /profile
}
step arrival

scene identityRoute {
  + auth: Identity
  + edge -> auth
}
scene identity {
  edge ~> auth: verify session
  edge <~ auth: claims
}
step identity

scene cacheRoute {
  + cache: Cache
  + edge -> cache
}
scene cache {
  edge ~> cache: profile:42
  edge <~ cache: MISS
}
step cache

scene originRoutes {
  + service: Profile service
  + db: Primary database
  + edge -> service
  + service -> db
}
scene origin {
  edge ~> service: fetch profile
  service ~> db: SELECT user
  service <~ db: row
}
step origin

scene response {
  edge <~ service: 200 profile
  browser <~ edge: JSON
}
step response`;

type PlaybackStatus =
  | "paused"
  | "playing"
  | "fast-forwarding"
  | "rewinding"
  | "stopped";
type TapeIconName =
  | "pause"
  | "play"
  | "fast-forward"
  | "rewind"
  | "stop"
  | "previous"
  | "next"
  | "replay";

const playbackIndicators: Record<PlaybackStatus, { icon: TapeIconName; label: string }> = {
  paused: { icon: "pause", label: "PAUSE" },
  playing: { icon: "play", label: "PLAY" },
  "fast-forwarding": { icon: "fast-forward", label: "FF" },
  rewinding: { icon: "rewind", label: "REW" },
  stopped: { icon: "stop", label: "STOP" },
};

function TapeIcon({ name }: { name: TapeIconName }) {
  let glyph: React.ReactNode;
  switch (name) {
    case "pause":
      glyph = <>
        <rect x="7" y="2" width="3" height="12" />
        <rect x="14" y="2" width="3" height="12" />
      </>;
      break;
    case "play":
      glyph = <polygon points="8,2 17,8 8,14" />;
      break;
    case "fast-forward":
      glyph = <>
        <polygon points="3,2 11,8 3,14" />
        <polygon points="10,2 18,8 10,14" />
      </>;
      break;
    case "rewind":
      glyph = <>
        <polygon points="20,2 14,8 20,14" />
        <polygon points="14,2 8,8 14,14" />
      </>;
      break;
    case "stop":
      glyph = <rect x="7" y="3" width="10" height="10" />;
      break;
    case "previous":
      glyph = <>
        <rect x="6" y="2" width="2.5" height="12" />
        <polygon points="18,2 10,8 18,14" />
      </>;
      break;
    case "next":
      glyph = <>
        <polygon points="6,2 14,8 6,14" />
        <rect x="16" y="2" width="2.5" height="12" />
      </>;
      break;
    case "replay":
      glyph = <>
        <path d="M17 4H11c-3.5 0-6 2.5-6 5.5s2.5 4.5 6 4.5h5" fill="none" stroke="currentColor" strokeWidth="3" />
        <polygon points="14,1 20,4 14,7" />
      </>;
      break;
  }
  return (
    <svg className="tape-icon" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
      <g className="tape-icon__back">{glyph}</g>
      <g className="tape-icon__face">{glyph}</g>
    </svg>
  );
}

// A step cue is the first frame after the outgoing token and label are consumed.
// The following route starts there at zero progress, so exact-cue sampling keeps
// it visually hidden without cutting the outgoing label short.
const REST_FRAME_LEAD_SECONDS = 0;
// Keep authored token velocities intact; only the constant host playback rate
// changes. Seeking between chapters stays linear and quick.
const FORWARD_TIMELINE_RATE = 1.25;
const REWIND_TIMELINE_RATE = 8;
const SEEK_TIMELINE_RATE = 5;
const clampProgress = (progress: number) => Math.max(0, Math.min(1, progress));

type Chapter = {
  step: string;
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  detail: string;
};

const chapters: Chapter[] = [
  {
    step: "foundation",
    number: "00",
    eyebrow: "The cast",
    title: "One request crosses six boundaries.",
    body: "The diagram begins as topology, not motion. Every later chapter keeps this shared mental map in place while changing only the active transaction.",
    detail: "Stable geography makes change legible.",
  },
  {
    step: "arrival",
    number: "01",
    eyebrow: "At the edge",
    title: "The browser knows only one address.",
    body: "A profile request enters through the edge gateway. Routing, identity, cache policy, and origin selection remain hidden behind that single public endpoint.",
    detail: "GET /profile · public boundary",
  },
  {
    step: "identity",
    number: "02",
    eyebrow: "Trust first",
    title: "Identity is resolved before data moves.",
    body: "The gateway verifies the session and receives a compact set of claims. Downstream services can authorize the request without handling browser credentials directly.",
    detail: "session → claims · private boundary",
  },
  {
    step: "cache",
    number: "03",
    eyebrow: "Fast path",
    title: "The cheapest answer is attempted first.",
    body: "The gateway asks for profile:42. A miss is still useful information: it selects the origin path while preserving one place for read-through policy.",
    detail: "profile:42 · MISS",
  },
  {
    step: "origin",
    number: "04",
    eyebrow: "Source of truth",
    title: "Only the profile service reaches storage.",
    body: "The service translates an application request into a database query. The returned row stays behind the service contract rather than leaking into the gateway.",
    detail: "SELECT user · row",
  },
  {
    step: "response",
    number: "05",
    eyebrow: "Return path",
    title: "The internal journey collapses into one response.",
    body: "The browser receives JSON without learning which policies or storage systems produced it. Scroll back upward and the same diagram rewinds through those decisions.",
    detail: "200 profile · JSON",
  },
];

function ScrollytellingPrototype() {
  const api = useMarkgraf(source, {
    paused: true,
    showTitle: false,
    theme: "light",
    transparent: true,
  });
  const apiRef = useRef(api);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const timelineTimeRef = useRef(api.time);
  const lastScrollAtRef = useRef(0);
  const lastActiveRef = useRef(0);
  const completedChapterRef = useRef(-1);
  const chaptersInitializedRef = useRef(false);
  const replayNowRef = useRef(false);
  const playbackStatusRef = useRef<PlaybackStatus>("paused");
  const [active, setActive] = useState(0);
  const [replayNonce, setReplayNonce] = useState(0);
  const [rewinding, setRewinding] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState<PlaybackStatus>("paused");
  const setTransportStatus = (next: PlaybackStatus) => {
    if (playbackStatusRef.current === next) return;
    playbackStatusRef.current = next;
    setPlaybackStatus(next);
  };

  apiRef.current = api;
  const seekTimeline = (time: number) => {
    timelineTimeRef.current = time;
    apiRef.current.seek(time);
  };

  useEffect(() => {
    if (!api.ready) return;
    const current = apiRef.current.steps.find((step) => step.name === chapters[active].step);
    const priorActive = lastActiveRef.current;
    const movingBackward = active < priorActive;
    const previousChapter = chapters[active - 1];
    const previous = apiRef.current.steps.find((step) => step.name === previousChapter?.step);
    const continuesFromCompleted =
      Math.abs(active - priorActive) === 1 && completedChapterRef.current === priorActive;
    lastActiveRef.current = active;
    if (!current) return;
    const targetTime = Math.max(0, current.time - REST_FRAME_LEAD_SECONDS);
    const initializing = !chaptersInitializedRef.current;
    chaptersInitializedRef.current = true;
    const immediate = replayNowRef.current || initializing;
    replayNowRef.current = false;
    if (!immediate && active === priorActive && completedChapterRef.current === active) return;

    const from =
      previous === undefined
        ? 0
        : Math.max(0, previous.time - REST_FRAME_LEAD_SECONDS);
    let segmentFrom = from;
    let frame = 0;
    let timer = 0;
    let transportDone = false;
    let settled = immediate || continuesFromCompleted;
    let playing = false;
    let rewindVisual = false;
    const showRewind = (next: boolean) => {
      if (next === rewindVisual) return;
      rewindVisual = next;
      setRewinding(next);
      if (next) setTransportStatus("rewinding");
    };

    const playSegment = () => {
      playing = true;
      const stepDelta = targetTime - from;
      const timelineRate = stepDelta < 0 ? REWIND_TIMELINE_RATE : FORWARD_TIMELINE_RATE;
      const durationMs = Math.max(1, Math.abs(stepDelta) / timelineRate * 1000);
      const progressStart =
        Math.abs(stepDelta) < 0.001
          ? 1
          : clampProgress((segmentFrom - from) / stepDelta);
      const startedAt = window.performance.now();
      const scrolling = (now: number) =>
        lastScrollAtRef.current > 0 && now - lastScrollAtRef.current < 500;
      const animate = (now: number) => {
        if (scrolling(now)) {
          showRewind(false);
          setTransportStatus("paused");
          segmentFrom = timelineTimeRef.current;
          playing = false;
          scheduleAfterSettle();
          return;
        }
        setTransportStatus(
          movingBackward && targetTime < segmentFrom - 0.001 ? "rewinding" : "playing",
        );
        showRewind(movingBackward && targetTime < segmentFrom - 0.001);
        const progress = Math.min(
          1,
          progressStart + (now - startedAt) / durationMs,
        );
        seekTimeline(from + stepDelta * progress);
        if (progress < 1) {
          frame = window.requestAnimationFrame(animate);
        } else {
          seekTimeline(targetTime);
          completedChapterRef.current = active;
          showRewind(false);
          setTransportStatus(active === chapters.length - 1 ? "stopped" : "paused");
        }
      };
      frame = window.requestAnimationFrame(animate);
    };

    const playWhenReady = () => {
      if (transportDone && settled && !playing) playSegment();
    };

    const finishTransport = (nextFrom: number) => {
      showRewind(false);
      segmentFrom = nextFrom;
      seekTimeline(segmentFrom);
      transportDone = true;
      playWhenReady();
    };

    const startTransport = () => {
      apiRef.current.pause();
      completedChapterRef.current = -1;
      const transportFrom = timelineTimeRef.current;
      const transportRewinds =
        movingBackward && from < transportFrom - 0.001;
      const transportFastForwards =
        !transportRewinds && from > transportFrom + 0.001;
      const segmentLo = Math.min(from, targetTime);
      const segmentHi = Math.max(from, targetTime);
      const canResumeVisibleSegment =
        !movingBackward &&
        !immediate &&
        transportFrom >= segmentLo - 0.001 &&
        transportFrom <= segmentHi + 0.001;
      const distance = Math.abs(from - transportFrom);
      if (distance < 0.001) {
        finishTransport(from);
        return;
      }
      if (canResumeVisibleSegment) {
        finishTransport(transportFrom);
        return;
      }

      const transportRate =
        from < transportFrom ? REWIND_TIMELINE_RATE : SEEK_TIMELINE_RATE;
      const transportDurationMs = distance / transportRate * 1000;
      if (transportFastForwards) setTransportStatus("fast-forwarding");
      const startedAt = window.performance.now();
      const transport = (now: number) => {
        const scrolling =
          lastScrollAtRef.current > 0 &&
          now - lastScrollAtRef.current < 500;
        if (scrolling) {
          showRewind(false);
          setTransportStatus("paused");
          scheduleAfterSettle();
          return;
        }
        setTransportStatus(
          transportRewinds
            ? "rewinding"
            : transportFastForwards
              ? "fast-forwarding"
              : "playing",
        );
        showRewind(transportRewinds);
        const progress = Math.min(1, (now - startedAt) / transportDurationMs);
        seekTimeline(transportFrom + (from - transportFrom) * progress);
        if (progress < 1) {
          frame = window.requestAnimationFrame(transport);
        } else {
          finishTransport(from);
        }
      };
      frame = window.requestAnimationFrame(transport);
    };

    const scheduleAfterSettle = () => {
      if (playing) return;
      setTransportStatus("paused");
      settled = false;
      window.clearTimeout(timer);
      const idleFor = window.performance.now() - lastScrollAtRef.current;
      timer = window.setTimeout(() => {
        const remaining = 500 - (window.performance.now() - lastScrollAtRef.current);
        if (remaining > 1) {
          scheduleAfterSettle();
          return;
        }
        settled = true;
        if (transportDone) playWhenReady();
        else startTransport();
      }, Math.max(0, 500 - idleFor));
    };

    const scrolling =
      lastScrollAtRef.current > 0 &&
      window.performance.now() - lastScrollAtRef.current < 500;
    if (!scrolling && (immediate || continuesFromCompleted)) {
      startTransport();
    } else {
      if (lastScrollAtRef.current === 0) lastScrollAtRef.current = window.performance.now();
      scheduleAfterSettle();
    }

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
      showRewind(false);
    };
  }, [active, api.ready, replayNonce]);

  useEffect(() => {
    document.documentElement.classList.add("markgraf-chapter-snap");
    return () => document.documentElement.classList.remove("markgraf-chapter-snap");
  }, []);

  useEffect(() => {
    const noteScroll = () => {
      lastScrollAtRef.current = window.performance.now();
    };
    window.addEventListener("scroll", noteScroll, { passive: true });
    return () => window.removeEventListener("scroll", noteScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.chapter);
        if (!Number.isFinite(index)) return;
        setActive(index);
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    sectionsRef.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const pauseTransport = () => {
    apiRef.current.pause();
    setTransportStatus("paused");
  };

  const goToChapter = (index: number) => {
    const next = Math.max(0, Math.min(chapters.length - 1, index));
    lastScrollAtRef.current = window.performance.now();
    pauseTransport();
    setActive(next);
    sectionsRef.current[next]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const replay = () => {
    pauseTransport();
    replayNowRef.current = true;
    setReplayNonce((nonce) => nonce + 1);
  };

  return (
    <main className="scrolly">
      <style>{styles}</style>

      <div className="scrolly__layout">
        <article className="scrolly__chapters" aria-label="Request journey">
          {chapters.map((chapter, index) => (
            <section
              className="chapter"
              data-active={active === index ? "true" : "false"}
              data-chapter={index}
              key={chapter.step}
              ref={(node) => { sectionsRef.current[index] = node; }}
            >
              <div className="chapter__rail" aria-hidden="true">
                <span>{chapter.number}</span>
                <i />
              </div>
              <div className="chapter__copy">
                <div className="chapter__eyebrow">{chapter.eyebrow}</div>
                <h2>{chapter.title}</h2>
                <p>{chapter.body}</p>
                <code>{chapter.detail}</code>
              </div>
            </section>
          ))}
        </article>

        <aside className="scrolly__stage" aria-label="Synchronized Markgraf animation">
          <div
            className="stage__frame"
            data-time={api.time}
            data-cue-time={api.steps.find((step) => step.name === chapters[active].step)?.time}
            data-step-count={api.steps.length}
            data-step-names={api.steps.map((step) => step.name).join(",")}
            data-rewinding={rewinding ? "true" : "false"}
          >
            <div className="stage__picture">
              <svg className="rewind__shader" aria-hidden="true">
                <defs>
                  <filter
                    id="vhs-rewind-distortion"
                    x="-12%"
                    y="-8%"
                    width="124%"
                    height="116%"
                    colorInterpolationFilters="sRGB"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.006 0.16"
                      numOctaves="2"
                      seed="17"
                      result="noise"
                    >
                      <animate
                        attributeName="baseFrequency"
                        values="0.004 0.12;0.011 0.21;0.003 0.15;0.008 0.26;0.004 0.12"
                        dur="180ms"
                        repeatCount="indefinite"
                      />
                    </feTurbulence>
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="18"
                      xChannelSelector="R"
                      yChannelSelector="B"
                      result="distorted"
                    >
                      <animate
                        attributeName="scale"
                        values="8;24;13;31;8"
                        dur="240ms"
                        repeatCount="indefinite"
                      />
                    </feDisplacementMap>
                    <feOffset in="distorted" dx="-3" dy="0" result="red-offset" />
                    <feFlood floodColor="#f05a3f" floodOpacity=".52" result="red" />
                    <feComposite in="red" in2="red-offset" operator="in" result="red-ghost" />
                    <feOffset in="distorted" dx="3" dy="0" result="cyan-offset" />
                    <feFlood floodColor="#38a9c7" floodOpacity=".48" result="cyan" />
                    <feComposite in="cyan" in2="cyan-offset" operator="in" result="cyan-ghost" />
                    <feMerge>
                      <feMergeNode in="red-ghost" />
                      <feMergeNode in="cyan-ghost" />
                      <feMergeNode in="distorted" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
              <canvas ref={api.elementRef} className="stage__canvas" />
              <div className="rewind__tracking" aria-hidden="true" />
              <div
                className="transport__osd"
                data-state={playbackStatus}
                role="status"
                aria-live="polite"
              >
                <span className="transport__glyph" aria-hidden="true">
                  <TapeIcon name={playbackIndicators[playbackStatus].icon} />
                </span>
                <span className="transport__sr-only">{playbackIndicators[playbackStatus].label}</span>
              </div>
            </div>
            <div className="stage__readout">
              <span>{chapters[active].number} / {chapters[active].eyebrow}</span>
              <span>{api.time.toFixed(2)}s</span>
            </div>
          </div>
        </aside>
      </div>

      <nav className="chapter-controls" aria-label="Chapter controls">
        <button
          type="button"
          aria-label="Previous chapter"
          disabled={active === 0}
          onClick={() => goToChapter(active - 1)}
        >
          <TapeIcon name="previous" />
        </button>
        <button type="button" aria-label="Replay chapter" onClick={replay}>
          <TapeIcon name="replay" />
        </button>
        <button
          type="button"
          aria-label="Next chapter"
          disabled={active === chapters.length - 1}
          onClick={() => goToChapter(active + 1)}
        >
          <TapeIcon name="next" />
        </button>
      </nav>
    </main>
  );
}

const meta: Meta<typeof ScrollytellingPrototype> = {
  title: "Prototypes/Scrollytelling",
  component: ScrollytellingPrototype,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollytellingPrototype>;
export const StickyNarrative: Story = {};

const styles = `

  :root {
    --paper: #eee9dd;
    --ink: #19212a;
    --muted: #646963;
    --signal: #f05a3f;
    --blue: #284d73;
    --rule: rgba(25, 33, 42, 0.2);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  html.markgraf-chapter-snap { scroll-snap-type: y mandatory; }
  body { margin: 0; background: #f7f7f5; }

  .scrolly {
    min-height: 100vh;
    color: var(--ink);
    background: transparent;
    font-family: Georgia, "Times New Roman", serif;
  }

  .chapter__eyebrow,
  .stage__readout,
  .chapter-controls,
  .chapter code {
    font-family: "CommitMono", ui-monospace, monospace;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .scrolly__layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    align-items: start;
  }
  .scrolly__chapters,
  .scrolly__stage { min-width: 0; }

  .scrolly__chapters { padding-left: clamp(24px, 5vw, 72px); }
  .chapter {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr);
    align-items: center;
    padding: 12vh clamp(28px, 4vw, 72px) 12vh 0;
    opacity: .34;
    transition: opacity 320ms ease;
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
  .chapter[data-active="true"] { opacity: 1; }
  .chapter__rail { align-self: stretch; display: flex; flex-direction: column; align-items: center; gap: 14px; padding-top: 8px; }
  .chapter__rail span { font: 11px "CommitMono", monospace; }
  .chapter__rail i { width: 1px; flex: 1; background: var(--rule); position: relative; }
  .chapter[data-active="true"] .chapter__rail i::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--signal);
    position: absolute;
    left: -4px;
    top: 0;
    box-shadow: 0 0 0 5px #f7f7f5;
  }
  .chapter__copy { border-top: 1px solid var(--ink); padding-top: 16px; }
  .chapter__eyebrow { color: var(--signal); font-size: 11px; }
  .chapter h2 { margin: 40px 0 20px; font-size: clamp(38px, 4vw, 67px); line-height: .98; font-weight: 400; letter-spacing: -.045em; }
  .chapter p { max-width: 35rem; color: #303a40; font-size: clamp(18px, 1.55vw, 23px); line-height: 1.48; }
  .chapter code { display: block; margin-top: 34px; color: var(--blue); font-size: 10px; }

  .scrolly__stage {
    position: sticky;
    top: 0;
    height: 100vh;
    padding: clamp(18px, 3vw, 46px);
    display: grid;
    place-items: center;
  }
  .stage__frame {
    width: min(100%, calc(100vh - 120px));
    min-height: 0;
    display: grid;
    grid-template-rows: auto auto;
    background: transparent;
  }
  .stage__picture {
    position: relative;
    height: auto;
    min-height: 0;
    aspect-ratio: 4 / 3;
    border: 2px solid var(--ink);
    background: var(--ink);
    overflow: hidden;
    isolation: isolate;
  }
  .rewind__shader {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
  }
  .rewind__tracking {
    position: absolute;
    z-index: 3;
    inset: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(
        0deg,
        rgba(25, 33, 42, .11) 0,
        rgba(25, 33, 42, .11) 1px,
        transparent 1px,
        transparent 4px
      ),
      linear-gradient(
        90deg,
        rgba(240, 90, 63, .15),
        transparent 16%,
        transparent 82%,
        rgba(56, 169, 199, .16)
      );
    mix-blend-mode: multiply;
    transition: opacity 80ms linear;
  }
  .rewind__tracking::before {
    content: "";
    position: absolute;
    left: -4%;
    top: -24%;
    width: 108%;
    height: 18%;
    background:
      linear-gradient(
        to bottom,
        transparent,
        rgba(247, 247, 245, .78) 28%,
        rgba(25, 33, 42, .2) 33%,
        rgba(247, 247, 245, .94) 39%,
        transparent 72%
      );
    box-shadow:
      0 7px 0 rgba(240, 90, 63, .14),
      0 -4px 0 rgba(56, 169, 199, .13);
    animation: rewind-tracking-band 520ms steps(8, end) infinite;
  }
  .tape-icon {
    display: block;
    width: 22px;
    height: 16px;
    overflow: visible;
    shape-rendering: geometricPrecision;
  }
  .tape-icon__back {
    color: #000;
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 3px;
    stroke-linejoin: round;
    transform: translate(.5px, .5px);
  }
  .tape-icon__back path { stroke-width: 6px; }
  .tape-icon__face {
    color: #fff;
    fill: currentColor;
  }
  .transport__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .transport__osd {
    position: absolute;
    z-index: 4;
    top: 18px;
    right: 20px;
    width: 28px;
    height: 22px;
    color: #fff;
    pointer-events: none;
  }
  .transport__glyph {
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
  }
  .transport__glyph .tape-icon {
    width: 23px;
    height: 16px;
  }
  .stage__frame[data-rewinding="true"] .rewind__tracking { opacity: .9; }
  .stage__frame[data-rewinding="true"] .stage__canvas {
    filter: url("#vhs-rewind-distortion") contrast(1.18) saturate(.82);
    animation: rewind-frame-jitter 110ms steps(3, end) infinite;
    will-change: transform, filter;
  }
  .stage__frame[data-rewinding="true"] .stage__readout {
    color: var(--signal);
    border-top-color: rgba(240, 90, 63, .72);
  }
  @keyframes rewind-frame-jitter {
    0%, 100% { transform: translate3d(0, 0, 0) skewX(0); }
    18% { transform: translate3d(-2px, 1px, 0) skewX(-.18deg); }
    42% { transform: translate3d(3px, -1px, 0) skewX(.25deg); }
    68% { transform: translate3d(-1px, 0, 0) skewX(-.1deg); }
    82% { transform: translate3d(4px, 1px, 0) skewX(.15deg); }
  }
  @keyframes rewind-tracking-band {
    0% { top: -24%; transform: scaleY(.55); }
    32% { top: 18%; transform: scaleY(1.15); }
    67% { top: 61%; transform: scaleY(.72); }
    100% { top: 112%; transform: scaleY(1.35); }
  }
  @keyframes rewind-osd-blink {
    0%, 64% { opacity: 1; }
    65%, 100% { opacity: .42; }
  }
  .stage__readout {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 16px;
    border-top: 1px solid var(--rule);
    font-size: 10px;
  }
  .stage__canvas { width: 100%; height: 100%; display: block; background: #f7f7f5; }

  .chapter-controls {
    position: fixed;
    z-index: 20;
    right: 22px;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .chapter-controls button {
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 0;
    padding: 0;
    color: #fff;
    background: transparent;
    cursor: pointer;
    transition: transform 70ms linear;
  }
  .chapter-controls button .tape-icon {
    width: 25px;
    height: 18px;
    transition: transform 70ms linear;
  }
  .chapter-controls button:hover:not(:disabled) .tape-icon {
    transform: translateY(-1px);
  }
  .chapter-controls button:active:not(:disabled) .tape-icon {
    transform: translate(1px, 1px);
  }
  .chapter-controls button:focus-visible {
    outline: 2px solid #000;
    outline-offset: 3px;
  }
  .chapter-controls button:disabled {
    opacity: .2;
    cursor: default;
  }

  @media (max-width: 420px) {
    .scrolly__layout { display: flex; flex-direction: column-reverse; }
    .scrolly__stage { z-index: 4; width: 100%; height: 48vh; padding: 10px; border-bottom: 1px solid var(--rule); background: rgba(247,247,245,.96); }
    .stage__frame { min-height: 0; height: 100%; }
    .stage__picture { min-height: 0; }
    .scrolly__chapters { padding-left: 18px; }
    .chapter { min-height: 86vh; padding-right: 24px; }
    .chapter-controls { right: 12px; bottom: 12px; }
    .chapter-controls > span { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .chapter { transition: none; }
    .stage__frame[data-rewinding="true"] .stage__canvas {
      filter: grayscale(1) contrast(1.08);
      animation: none;
    }
    .stage__frame[data-rewinding="true"] .rewind__tracking {
      opacity: .2;
      animation: none;
    }
    .rewind__tracking::before,
    .transport__osd { animation: none; }
    .chapter-controls button { transition: none; }
  }
`;
