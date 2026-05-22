// Hook with canvas (default).  Verifies that elementRef is typed as
// MutableRefObject<HTMLCanvasElement | null> and accepted by <canvas ref={...}>.
import { useMarkgraf } from "@markgrafhq/markgraf-react";

export function Player({ src }: { src: string }) {
  const api = useMarkgraf(src);
  return (
    <div>
      <canvas ref={api.elementRef} style={{ width: 600 }} />
      <button onClick={api.toggle}>{api.playing ? "Pause" : "Play"}</button>
      <input
        type="range"
        min={0}
        max={api.duration}
        step={0.01}
        value={api.time}
        onChange={(e) => api.seek(parseFloat(e.target.value))}
      />
      <span>
        {api.time.toFixed(2)} / {api.duration.toFixed(2)} — {api.keyframe || "—"}
      </span>
      <button onClick={() => api.setSpeed(2)}>2×</button>
    </div>
  );
}

// Smoke-test the api fields the compiler should see:
export function checkApiShape({ src }: { src: string }) {
  const api = useMarkgraf(src);
  const _time: number = api.time;
  const _keyframe: string = api.keyframe;
  const _playing: boolean = api.playing;
  const _duration: number = api.duration;
  const _ready: boolean = api.ready;
  const _play: () => void = api.play;
  const _pause: () => void = api.pause;
  const _toggle: () => void = api.toggle;
  const _seek: (t: number) => void = api.seek;
  const _setSpeed: (s: number) => void = api.setSpeed;
  const _ref: HTMLCanvasElement | null = api.elementRef.current;
  void [_time, _keyframe, _playing, _duration, _ready, _play, _pause, _toggle, _seek, _setSpeed, _ref];
}
