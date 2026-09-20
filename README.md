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

## Browser requirements

The default Canvas renderer compiles and renders in an inline Web Worker. It
requires Workers, transferable OffscreenCanvas, FinalizationRegistry, and
worker-side CSS Font Loading; Content Security Policies must permit
`worker-src blob:`. Fonts load before `ready` becomes true.

There is no automatic renderer fallback. Select `renderer="svg"` explicitly
when a main-thread SVG player is required.

## `<MarkgrafPlayer src=... />`

Headless component that draws the scene directly into the selected Canvas2D or SVG surface. Bring your own controls.

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
}
```

## `useMarkgraf(src, opts?)` — custom UI

Markgraf does not draw scene names into the diagram. Render `api.keyframe` in
your own player shell when the current scene name should be visible.

```jsx
import { useMarkgraf } from "@markgrafhq/markgraf-react";

export function Player({ src }) {
  const api = useMarkgraf(src);          // canvas
  // const api = useMarkgraf(src, { renderer: "svg" });
  return (
    <div>
      <canvas ref={api.elementRef} style={{ width: 600 }} />
      <button onClick={api.toggle}>{api.playing ? "Pause" : "Play"}</button>
      <button
        disabled={!api.ready}
        onClick={() => api.playPrevious({ duration: 0.8, easing: { bounce: 0 } })}
      >
        Rewind one cue
      </button>
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
| `play(options?)` | `(options?: MarkgrafPlaybackOptions) => void` | ordinary playback, optionally directional/looped |
| `pause()`      | `() => void`                          |                                                    |
| `toggle()`     | `() => void`                          |                                                    |
| `seek(t)`      | `(seconds: number) => void`           | clamped to `[0, duration]`; retains playing/paused state |
| `setSpeed(x)`  | `(speed: number) => void`             | `1.0` is normal                                    |
| `cues`, `steps` | readonly cue arrays | stable IDs, scheduler indices, timestamps, and graph paths |
| `seekCue(id)`, `seekStep(name)` | `(string) => void` | seek to an explicit cue or named step |
| `playToCue(id, options?)`, `playToStep(name, options?)` | bounded playback | stop exactly at the selected target |
| `playNext(options?)`, `playPrevious(options?)` | bounded playback | next/previous matching cue, or end/start boundary |
| `onCueEnter(fn)`, `onStepEnter(name, fn)` | return an unsubscribe function | cue events in traversal order |
| `onComplete(fn)` | returns an unsubscribe function | target/boundary completion, not cancellation |

### Finite spring-shaped bounded playback

All four bounded methods accept the same options:

```js
const options = { duration: 0.8, easing: { bounce: 0 } };
api.playToCue(cueId, options);
api.playToStep("received", options);
api.playNext(options);
api.playPrevious(options);
```

`easing: {}` or `easing: { bounce: 0 }` opts into finite, monotonic
spring-shaped motion. The playhead never overshoots the target, lands exactly
at its timestamp, and has zero endpoint velocity. This is built into Markgraf:
no Motion installation, React animation loop, or timers are needed.

The clock starts when the shared engine accepts the command (in the worker for
Canvas). Dropped frames do not extend the move: the first frame at or after its
deadline renders the exact target and emits completion.

- With `easing` or `arrival`, a positive finite `duration` (seconds) wins over
  `speed`. Otherwise the duration is derived once from the distance and the
  normalized supplied speed, or current speed when omitted.
- These options are local to that move. Calling `setSpeed` during it changes
  subsequent runs, not the current move's captured deadline.
- Without either new field, bounded playback remains constant-speed with
  legacy **speed-first** precedence over duration.
- Invalid/nonpositive durations are ignored. Zero-distance moves complete
  immediately without an arrival pulse.
- `stopAt: ["step"]` or `["tokenLine"]` filters next/previous selection; when
  no matching cue remains, those methods move to the end/start boundary.

### Optional arrival emphasis

Playhead bounce must be `0`; other values throw. For a visual bounce, explicitly
select the arriving node instead. For example, if `"received"` is a step and
`"api"` is a node inside `"cluster"`:

```js
api.playToStep("received", {
  duration: 0.8,
  arrival: { node: "api", path: ["cluster"], bounce: 0.25 },
});
```

`arrival` alone also opts into timed spring-shaped playback. It does not infer
a node from the cue, token, or camera. `node` is the exact node ID; `path` is the
ancestor-node path, outermost first, and defaults to `[]` for a root-level node.
Only that node is emphasized. Its scale pulse occupies the last 45% of the
move, grows to `1.08`, then springs back to normal by the deadline. Arrival
`bounce` defaults to `0.25`; finite values are clamped to `[0, 1]`.

### Events and cancellation

Subscribe after `api.ready`; subscriptions made before a player exists are
no-ops. Retain and call each returned unsubscribe function (for example in a
React effect cleanup); register anew after a source/renderer remount.

```js
const unsubscribe = api.onComplete(event => {
  console.log(event.reason, event.time); // "target" or "boundary", exact time
});
// Later: unsubscribe();
```

Cue events follow scheduler-index order in the direction of travel, including
coincident cues up to the chosen target, not beyond it. Completion is emitted
exactly once, after cue events and the paused state update. React state becomes
visible on its next render; `event.time` is the authoritative completion time.
Pausing, seeking, starting a replacement move, or unmounting cancels the
current bounded move and clears arrival emphasis without emitting completion.
All seek methods retain the existing playing/paused state; a seek is not a pause.

### Renderer choice

- **`canvas`** (default) — Canvas2D with DPR-aware scaling and label springs.
- **`svg`** — Inline SVG. Easier to inspect/style, scales crisply at any zoom, no DPR concerns. No spring labels.

For readable diagrams, follow the [graph authoring guidance](https://github.com/i-am-the-slime/markgraf#writing-graphs-people-can-follow).

## License

MIT
