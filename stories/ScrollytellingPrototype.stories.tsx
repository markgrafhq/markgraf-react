// PROTOTYPE — compare chapter-triggered playback with continuous scroll scrubbing.
import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { useMarkgraf } from "@markgrafhq/markgraf-react";
import "@markgrafhq/markgraf-react/css";

const source = `seed 17
scene foundation {
  + browser: Browser
  + edge: Edge gateway
  + auth: Identity
  + cache: Cache
  + service: Profile service
  + db: Primary database
  + browser -> edge
  + edge -> auth
  + edge -> cache
  + edge -> service
  + service -> db
}
step foundation

scene arrival {
  browser ~> edge: GET /profile
}
step arrival

scene identity {
  edge ~> auth: verify session
  edge <~ auth: claims
}
step identity

scene cache {
  edge ~> cache: profile:42
  edge <~ cache: MISS
}
step cache

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

type Mode = "chapters" | "scrub";

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

function modeFromUrl(): Mode {
  if (typeof window === "undefined") return "chapters";
  return new URLSearchParams(window.location.search).get("scrolly") === "scrub"
    ? "scrub"
    : "chapters";
}

function ScrollytellingPrototype() {
  const api = useMarkgraf(source, { paused: true, theme: "light" });
  const apiRef = useRef(api);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const frameRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<Mode>(modeFromUrl);

  apiRef.current = api;

  useEffect(() => {
    if (!api.ready || mode !== "chapters") return;
    apiRef.current.pause();
    apiRef.current.seekStep(chapters[active].step);
  }, [active, api.ready, mode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("scrolly", mode);
    window.history.replaceState({}, "", url);
  }, [mode]);

  useEffect(() => {
    if (mode !== "chapters") return;

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
  }, [mode]);

  useEffect(() => {
    if (mode !== "scrub") return;

    const sync = () => {
      frameRef.current = null;
      const marker = window.innerHeight * 0.56;
      const sections = sectionsRef.current.filter(
        (section): section is HTMLElement => section !== null,
      );
      if (!sections.length) return;

      let index = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      if (index < 0) index = sections[0].getBoundingClientRect().top > marker ? 0 : sections.length - 1;

      const section = sections[index];
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (marker - rect.top) / Math.max(1, rect.height)));
      const from = apiRef.current.steps.find((step) => step.name === chapters[index].step)?.time;
      const next = apiRef.current.steps.find((step) => step.name === chapters[index + 1]?.step)?.time;
      const end = next ?? apiRef.current.duration;

      setActive((current) => (current === index ? current : index));
      if (from !== undefined && end > from) apiRef.current.seek(from + (end - from) * progress);
    };

    const schedule = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [mode, api.ready]);

  const chooseMode = (next: Mode) => {
    setMode(next);
    apiRef.current.pause();
    apiRef.current.seekStep(chapters[active].step);
  };

  return (
    <main className="scrolly">
      <style>{styles}</style>
      <header className="scrolly__masthead">
        <div className="scrolly__wordmark">MARKGRAF / FIELD NOTE 07</div>
        <div className="scrolly__dek">
          <span>SCROLL-DRIVEN SYSTEM EXPLANATION</span>
          <span>{mode === "chapters" ? "DIRECTED CHAPTERS" : "CONTINUOUS SCRUB"}</span>
        </div>
        <h1>A request,<br />opened up.</h1>
        <p>
          The prose advances the system. The system gives the prose a place to stand.
          Keep scrolling; the diagram remains pinned.
        </p>
      </header>

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
            data-step-count={api.steps.length}
            data-step-names={api.steps.map((step) => step.name).join(",")}
          >
            <div className="stage__topline">
              <span>LIVE SYSTEM MAP</span>
              <span className="stage__status">
                <i /> {api.ready ? "SYNCHRONIZED" : "LAYING OUT"}
              </span>
            </div>
            <canvas ref={api.elementRef} className="stage__canvas" />
            <div className="stage__readout">
              <span>{chapters[active].number} / {chapters[active].eyebrow}</span>
              <span>{api.time.toFixed(2)}s</span>
            </div>
          </div>
        </aside>
      </div>

      <nav className="mode-switcher" aria-label="Prototype interaction mode">
        <span>PROTOTYPE</span>
        <button
          type="button"
          aria-pressed={mode === "chapters"}
          onClick={() => chooseMode("chapters")}
        >
          Chapter cuts
        </button>
        <button
          type="button"
          aria-pressed={mode === "scrub"}
          onClick={() => chooseMode("scrub")}
        >
          Direct scrub
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
  body { margin: 0; background: var(--paper); }

  .scrolly {
    min-height: 100vh;
    color: var(--ink);
    background:
      linear-gradient(90deg, transparent calc(50% - 1px), rgba(25,33,42,.055) 50%, transparent calc(50% + 1px)),
      radial-gradient(circle at 8% 4%, rgba(240,90,63,.08), transparent 28rem),
      var(--paper);
    font-family: Georgia, "Times New Roman", serif;
  }

  .scrolly__masthead {
    min-height: 86vh;
    padding: 32px clamp(24px, 6vw, 96px) 72px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    border-bottom: 1px solid var(--ink);
  }

  .scrolly__wordmark,
  .scrolly__dek,
  .chapter__eyebrow,
  .stage__topline,
  .stage__readout,
  .mode-switcher,
  .chapter code {
    font-family: "CommitMono", ui-monospace, monospace;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .scrolly__wordmark { font-size: 11px; font-weight: 700; }
  .scrolly__dek { justify-self: end; display: grid; gap: 4px; text-align: right; font-size: 10px; }
  .scrolly__masthead h1 {
    grid-column: 1 / -1;
    align-self: center;
    margin: 40px 0;
    font-size: clamp(72px, 13vw, 196px);
    font-weight: 400;
    line-height: .73;
    letter-spacing: -.075em;
  }
  .scrolly__masthead p {
    grid-column: 2;
    max-width: 36rem;
    margin: 0;
    font-size: clamp(19px, 2.1vw, 29px);
    line-height: 1.25;
  }

  .scrolly__layout {
    display: grid;
    grid-template-columns: minmax(24rem, .9fr) minmax(32rem, 1.1fr);
    align-items: start;
  }

  .scrolly__chapters { padding-left: clamp(24px, 5vw, 72px); }
  .chapter {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr);
    align-items: center;
    padding: 12vh clamp(28px, 4vw, 72px) 12vh 0;
    opacity: .34;
    transition: opacity 320ms ease;
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
    box-shadow: 0 0 0 5px var(--paper);
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
    border-left: 1px solid var(--ink);
    display: grid;
    place-items: center;
  }
  .stage__frame {
    width: 100%;
    min-height: min(76vh, 780px);
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: #f9f6ee;
    border: 1px solid var(--ink);
    box-shadow: 16px 16px 0 var(--blue);
  }
  .stage__topline,
  .stage__readout { display: flex; justify-content: space-between; gap: 16px; padding: 14px 16px; font-size: 10px; }
  .stage__topline { border-bottom: 1px solid var(--ink); }
  .stage__readout { border-top: 1px solid var(--ink); }
  .stage__status { color: var(--blue); }
  .stage__status i { display: inline-block; width: 7px; height: 7px; margin-right: 5px; border-radius: 50%; background: #2aa36b; }
  .stage__canvas { width: 100%; height: 100%; min-height: 420px; display: block; }

  .mode-switcher {
    position: fixed;
    z-index: 20;
    right: 22px;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    color: #f8f3e8;
    background: var(--ink);
    box-shadow: 7px 7px 0 rgba(240,90,63,.9);
    font-size: 9px;
  }
  .mode-switcher > span { padding: 0 8px; color: #b9c0c3; }
  .mode-switcher button {
    border: 0;
    padding: 9px 12px;
    color: #f8f3e8;
    background: transparent;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    cursor: pointer;
  }
  .mode-switcher button[aria-pressed="true"] { color: var(--ink); background: var(--paper); }

  @media (max-width: 860px) {
    .scrolly__masthead { min-height: 72vh; grid-template-columns: 1fr; }
    .scrolly__dek { display: none; }
    .scrolly__masthead p { grid-column: 1; }
    .scrolly__layout { display: flex; flex-direction: column-reverse; }
    .scrolly__stage { z-index: 4; width: 100%; height: 48vh; padding: 10px; border: 0; border-bottom: 1px solid var(--ink); background: var(--paper); }
    .stage__frame { min-height: 0; height: 100%; box-shadow: 7px 7px 0 var(--blue); }
    .stage__canvas { min-height: 0; }
    .scrolly__chapters { padding-left: 18px; }
    .chapter { min-height: 86vh; padding-right: 24px; }
    .mode-switcher { right: 12px; bottom: 12px; }
    .mode-switcher > span { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .chapter { transition: none; }
  }
`;
