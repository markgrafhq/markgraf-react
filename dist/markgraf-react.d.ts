// Type definitions for @markgrafhq/markgraf-react
// Hand-written — the underlying implementation is compiled from PureScript.

import type { FC, MutableRefObject, ReactNode } from "react";

export type MarkgrafCueKind = "step" | "tokenLine";
export type MarkgrafPlaybackDirection = "auto" | "forward" | "backward";

/** Finite, monotonic spring-shaped playhead easing; it never overshoots. */
export interface MarkgrafPlaybackEasing {
  bounce?: 0;
}

/** Optional visual pulse on exactly one node, independent of the playhead. */
export interface MarkgrafArrival {
  node: string;
  /** Ancestor node IDs, outermost first. Omit for a root-level node. */
  path?: string[];
  /** Defaults to 0.25; finite values are clamped to [0, 1]. */
  bounce?: number;
}

export interface MarkgrafPlaybackOptions {
  direction?: MarkgrafPlaybackDirection;
  speed?: number;
  /** Seconds for a bounded move; with easing/arrival, takes precedence over speed. */
  duration?: number;
  loop?: boolean;
  stopAt?: MarkgrafCueKind[];
  easing?: MarkgrafPlaybackEasing;
  arrival?: MarkgrafArrival;
}

export interface MarkgrafCueBase {
  readonly id: string;
  readonly index: number;
  readonly kind: MarkgrafCueKind;
  readonly time: number;
  readonly endTime: number;
  readonly path: readonly string[];
}

export interface MarkgrafStepCue extends MarkgrafCueBase {
  readonly kind: "step";
  readonly name: string;
}

export interface MarkgrafTokenLineCue extends MarkgrafCueBase {
  readonly kind: "tokenLine";
  readonly tokenIndex: number;
  readonly lineIndex: number;
  readonly text: string;
  readonly from: string;
  readonly to: string;
}

export type MarkgrafCue = MarkgrafStepCue | MarkgrafTokenLineCue;

export interface MarkgrafCompleteEvent {
  readonly reason: "target" | "boundary" | string;
  readonly direction: "forward" | "backward";
  readonly targetId: string;
  readonly targetStep: string;
  readonly reached: boolean;
  readonly time: number;
}

/**
 * Reactive view of a mounted markgraf player.  `time`, `keyframe`, and
 * `playing` update on every animation frame. Imperative methods address the
 * currently mounted player, including when retained across renders.
 *
 * `elementRef` is typed by the renderer you chose:
 * - default / `"canvas"` → `Ref<HTMLCanvasElement | null>`
 * - `"svg"` → `Ref<SVGSVGElement | null>`
 */
export interface MarkgrafApi<E extends Element = HTMLCanvasElement> {
  /**
   * Attach to a `<canvas>` (default) or `<svg>` element. The player draws
   * directly into the element.
   */
  readonly elementRef: MutableRefObject<E | null>;
  /**
   * Render adjacent to `elementRef` inside a stable `position: relative`
   * wrapper. It owns the portal targets for registered node views.
   */
  readonly viewLayer: ReactNode;
  /** Seconds since the start of the animation. */
  readonly time: number;
  /** Name of the scene span currently being rendered. Empty before `ready`. */
  readonly keyframe: string;
  readonly playing: boolean;
  /** Total seconds.  `0` until `ready` is `true`. */
  readonly duration: number;
  /** `true` once parse + layout + first render have completed. */
  readonly ready: boolean;
  readonly cues: readonly MarkgrafCue[];
  readonly steps: readonly MarkgrafStepCue[];
  play(options?: MarkgrafPlaybackOptions): void;
  playWith(options?: MarkgrafPlaybackOptions): void;
  pause(): void;
  toggle(): void;
  /** Clamped to `[0, duration]`. Cancels a bounded move but preserves playing/paused state. */
  seek(seconds: number): void;
  seekCue(cueId: string): void;
  seekStep(stepName: string): void;
  playToCue(cueId: string, options?: MarkgrafPlaybackOptions): void;
  playToStep(stepName: string, options?: MarkgrafPlaybackOptions): void;
  playNext(options?: MarkgrafPlaybackOptions): void;
  playPrevious(options?: MarkgrafPlaybackOptions): void;
  /** `1.0` is normal. Does not change an opted-in move's captured deadline. */
  setSpeed(speed: number): void;
  onCueEnter(callback: (cue: MarkgrafCue) => void): () => void;
  onStepEnter(stepName: string, callback: (cue: MarkgrafStepCue) => void): () => void;
  onComplete(callback: (event: MarkgrafCompleteEvent) => void): () => void;
}

/**
 * Live React content registered to one logical diagram node. `path` is the
 * ancestor-node address, outermost first; omit it for a root-level node.
 */
export interface MarkgrafNodeView {
  node: string;
  path?: string[];
  content: ReactNode;
}

export interface UseMarkgrafOptions<R extends "canvas" | "svg" = "canvas"> {
  /** `"canvas"` (default) or `"svg"`. Determines the type of `elementRef`. */
  renderer?: R;
  /** Visual theme. `"light"` (default), `"dark"`, or `"blueprint"`. */
  theme?: "light" | "dark" | "blueprint";
  /** When `true`, skip the background fill so the page bg shows through. */
  transparent?: boolean;
  /** When `true`, the player holds on its current frame; `false` resumes. */
  paused?: boolean;
  /** Live React content for selected Canvas/SVG node front faces. */
  nodeViews?: readonly MarkgrafNodeView[];
}

/**
 * Mount a markgraf player and drive it imperatively. To use `nodeViews`, keep
 * the canvas/SVG and returned `viewLayer` as siblings in one stable relative
 * wrapper:
 *
 * ```tsx
 * const api = useMarkgraf(src, {
 *   nodeViews: [{ node: "api", path: ["system"], content: <Status /> }],
 * });
 * return <div style={{ position: "relative" }}>
 *   <canvas ref={api.elementRef} />
 *   {api.viewLayer}
 * </div>;
 * ```
 *
 * The host box fills the node's declared logical width and height. Registered
 * faces retain their native outline while unregistered faces retain their
 * ordinary label fallback. Host content remains live rather than frozen and is
 * inert while travelling or backgrounded. The native reverse-facing back is
 * opaque and blank.
 *
 * When `src` or `renderer` changes the player is torn down and re-mounted.
 */
export function useMarkgraf(src: string): MarkgrafApi<HTMLCanvasElement>;
export function useMarkgraf(
  src: string,
  opts: UseMarkgrafOptions<"canvas">,
): MarkgrafApi<HTMLCanvasElement>;
export function useMarkgraf(
  src: string,
  opts: UseMarkgrafOptions<"svg">,
): MarkgrafApi<SVGSVGElement>;

export type MarkgrafPlayerProps =
  | {
      src: string;
      renderer?: "canvas" | "svg";
      theme?: "light" | "dark" | "blueprint";
      transparent?: boolean;
      width?: number;
      height?: number;
      paused?: boolean;
      nodeViews?: readonly MarkgrafNodeView[];
    }
  | {
      src: string;
      renderer: "sdf" | "webgl";
      theme?: "light" | "dark" | "blueprint";
      transparent?: boolean;
      width?: number;
      height?: number;
      paused?: boolean;
      nodeViews?: never;
    };

/**
 * Minimal Canvas/SVG player. When `nodeViews` are supplied it owns the stable
 * relative wrapper and overlay layer automatically. SDF/WebGL intentionally
 * reject host views.
 */
export const MarkgrafPlayer: FC<MarkgrafPlayerProps>;
