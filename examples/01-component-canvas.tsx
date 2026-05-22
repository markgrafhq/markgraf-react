// Simplest usage: the component, defaulting to canvas.
import { MarkgrafPlayer } from "@markgrafhq/markgraf-react";

const src = `seed 1
frame v1 {
  +node client "Client"
  +node api "API"
  +edge client api
  client -> api "GET /user/42"
}`;

export function App() {
  return <MarkgrafPlayer src={src} />;
}
