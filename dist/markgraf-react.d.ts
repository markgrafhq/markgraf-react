// Type definitions for @markgrafhq/markgraf-react
// Hand-written — the underlying implementation is compiled from PureScript.

import type { FC, MutableRefObject } from "react";

/**
 * Reactive view of a mounted markgraf player.  `time`, `keyframe`, and
 * `playing` update on every animation frame; the imperative methods are
 * stable across renders.
 *
 * `elementRef` is typed by the renderer you chose:
 * - default / `"canvas"` → `Ref<HTMLCanvasElement | null>`
 * - `"svg"` → `Ref<SVGSVGElement | null>`
 */
export interface MarkgrafApi<E extends Element = HTMLCanvasElement> {
  /**
   * Attach to a `<canvas>` (default) or `<svg>` element.  The player
   * draws directly into the element — no wrapper div.
   */
  readonly elementRef: MutableRefObject<E | null>;
  /** Seconds since the start of the animation. */
  readonly time: number;
  /** Name of the scene span currently being rendered. Empty before `ready`. */
  readonly keyframe: string;
  readonly playing: boolean;
  /** Total seconds.  `0` until `ready` is `true`. */
  readonly duration: number;
  /** `true` once parse + layout + first render have completed. */
  readonly ready: boolean;
  play(): void;
  pause(): void;
  toggle(): void;
  /** Clamped to `[0, duration]`.  Pauses the player. */
  seek(seconds: number): void;
  /** `1.0` is normal playback speed. */
  setSpeed(speed: number): void;
  /**
   * Register a callback that fires every time the player enters the named
   * keyframe.  Fires immediately if already in that frame.  Returns an
   * unsubscribe function.
   */
  onFrameEnter(frameName: string, callback: () => void): () => void;
  /** Seek to the start of the named keyframe.  No-op if the frame doesn't exist. */
  seekFrame(frameName: string): void;
}

export interface UseMarkgrafOptions<R extends "canvas" | "svg" = "canvas"> {
  /** `"canvas"` (default) or `"svg"`.  Determines the type of `elementRef`. */
  renderer?: R;
  /** Visual theme. `"light"` (default), `"dark"`, or `"blueprint"`. */
  theme?: "light" | "dark" | "blueprint";
  /** When `true`, skip the background fill so the page bg shows through. */
  transparent?: boolean;
}

/**
 * Mount a markgraf player and drive it imperatively.
 *
 * ```tsx
 * // Canvas (default)
 * const api = useMarkgraf(src);
 * return <canvas ref={api.elementRef} />;
 *
 * // SVG
 * const api = useMarkgraf(src, { renderer: "svg" });
 * return <svg ref={api.elementRef} />;
 * ```
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

export interface MarkgrafPlayerProps {
  src: string;
  /** `"canvas"` (default) or `"svg"`. */
  renderer?: "canvas" | "svg";
  /** Visual theme. `"light"` (default), `"dark"`, or `"blueprint"`. */
  theme?: "light" | "dark" | "blueprint";
  /** When `true`, skip the background fill so the page bg shows through. */
  transparent?: boolean;
  width?: number;
  height?: number;
  /**
   * Map of keyframe names to callbacks.  Each callback fires once when the
   * player enters that keyframe (not on every animation frame).  Callbacks
   * registered when the player is already in the matching frame fire
   * immediately.  Use `useMarkgraf` if you need more control (e.g. pausing
   * from the callback).
   */
  onFrameEnter?: Record<string, () => void>;
}

/**
 * Minimal player component — renders the canvas or svg element directly with
 * the markgraf scene drawn into it.  Bring your own controls via
 * `useMarkgraf` for anything richer.
 */
export const MarkgrafPlayer: FC<MarkgrafPlayerProps>;
