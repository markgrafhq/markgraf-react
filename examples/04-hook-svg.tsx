// Hook with renderer="svg".  elementRef must narrow to SVGSVGElement.
import { useMarkgraf } from "@markgrafhq/markgraf-react";

export function SvgPlayer({ src }: { src: string }) {
  const api = useMarkgraf(src, { renderer: "svg" });
  return (
    <div>
      <svg ref={api.elementRef} style={{ width: 600, height: 360 }} />
      <button onClick={api.toggle}>{api.playing ? "Pause" : "Play"}</button>
    </div>
  );
}

// The narrowed ref:
export function checkSvgRef({ src }: { src: string }) {
  const api = useMarkgraf(src, { renderer: "svg" });
  const _ref: SVGSVGElement | null = api.elementRef.current;
  void _ref;
}

// Explicit canvas opts (should still narrow to canvas):
export function checkCanvasExplicit({ src }: { src: string }) {
  const api = useMarkgraf(src, { renderer: "canvas" });
  const _ref: HTMLCanvasElement | null = api.elementRef.current;
  void _ref;
}
