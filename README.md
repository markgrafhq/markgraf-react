# @markgrafhq/markgraf-react

React hook + component for embedding [markgraf](https://github.com/i-am-the-slime/markgraf) animations. Drives play/pause/seek imperatively and exposes `time`, `keyframe`, and `playing` as reactive state.

## Install

```bash
bun add @markgrafhq/markgraf-react
# or: npm install @markgrafhq/markgraf-react
```

Import the package CSS for player styling:

```js
import "@markgrafhq/markgraf-react/css";
```

## `<MarkgrafPlayer src=... />`

Headless component that draws the scene directly into the selected Canvas2D, SVG, or WebGL surface. Bring your own controls.

```jsx
import { MarkgrafPlayer } from "@markgrafhq/markgraf-react";

const src = `seed 1
scene v1 {
  + client: Client
  + api: API
  + client -> api
  client ~> api: GET
}`;

export default function App() {
  return <MarkgrafPlayer src={src} />;
  // Or: <MarkgrafPlayer src={src} renderer="svg" />
  // Or: <MarkgrafPlayer src={src} renderer="sdf" />
}
```

## `useMarkgraf(src, opts?)` — custom UI

```jsx
import { useMarkgraf } from "@markgrafhq/markgraf-react";

export function Player({ src }) {
  const api = useMarkgraf(src);          // canvas
  // const api = useMarkgraf(src, { renderer: "svg" });
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
    </div>
  );
}
```

### Returned API

| Field          | Type                                  | Notes                                              |
| -------------- | ------------------------------------- | -------------------------------------------------- |
| `elementRef`   | `Ref<HTMLCanvasElement \| SVGSVGElement>` | attach to a `<canvas>` (default) or `<svg>`     |
| `time`         | `number`                              | seconds, updates each animation frame              |
| `keyframe`     | `string`                              | name of the current scene span                     |
| `playing`      | `boolean`                             |                                                    |
| `duration`     | `number`                              | total seconds; 0 until `ready`                     |
| `ready`        | `boolean`                             | true after parse + layout + first render           |
| `play()`       | `() => void`                          |                                                    |
| `pause()`      | `() => void`                          |                                                    |
| `toggle()`     | `() => void`                          |                                                    |
| `seek(t)`      | `(seconds: number) => void`           | clamped to `[0, duration]`, pauses playback        |
| `setSpeed(x)`  | `(speed: number) => void`             | `1.0` is normal                                    |

### Renderer choice

- **`canvas`** (default) — Canvas2D with DPR-aware scaling and label springs. Fastest, best for many tokens.
- **`svg`** — Inline SVG. Easier to inspect/style, scales crisply at any zoom, no DPR concerns. No spring labels.
- **`sdf`** (alias **`webgl`**) — WebGL raymarched 3D rendering; available through `MarkgrafPlayer` only.

## License

MIT
