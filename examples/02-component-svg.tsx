// Component with renderer="svg".
import { MarkgrafPlayer } from "@markgrafhq/markgraf-react";

const src = `seed 1
frame v1 {
  +node a "A"
  +node b "B"
  +edge a b
}`;

export function App() {
  return <MarkgrafPlayer src={src} renderer="svg" />;
}
