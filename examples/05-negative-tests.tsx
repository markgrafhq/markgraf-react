// These cases SHOULD fail to typecheck.  Each is annotated with @ts-expect-error;
// if the error doesn't fire, tsc will flag the unused suppression and the build
// will fail — so this file doubles as a regression test for the type narrowing.
import type { MutableRefObject } from "react";
import { useMarkgraf, MarkgrafPlayer } from "@markgrafhq/markgraf-react";

declare const src: string;

// 1. SVG ref assigned to HTMLCanvasElement holder — wrong element type.
export function wrongRefForSvg() {
  const api = useMarkgraf(src, { renderer: "svg" });
  // @ts-expect-error elementRef is SVGSVGElement, not HTMLCanvasElement
  const _bad: MutableRefObject<HTMLCanvasElement | null> = api.elementRef;
  void _bad;
}

// 2. Unknown renderer string.
export function unknownRenderer() {
  // @ts-expect-error "webgl" isn't a valid renderer
  useMarkgraf(src, { renderer: "webgl" });
}

// 3. Missing src on the component.
export function missingSrc() {
  // @ts-expect-error src is required
  return <MarkgrafPlayer />;
}

// 4. Wrong renderer literal on the component.
export function wrongRendererProp() {
  // @ts-expect-error "ascii" isn't a supported renderer
  return <MarkgrafPlayer src={src} renderer="ascii" />;
}

// 5. seek expects a number.
export function seekWithString() {
  const api = useMarkgraf(src);
  // @ts-expect-error seek takes a number
  api.seek("10");
}
