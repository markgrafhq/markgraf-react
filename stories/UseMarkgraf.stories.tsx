import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useMarkgraf } from "@markgrafhq/markgraf-react";

const src = `seed 1
scene v1 {
  + client: Client
  + api: API
  + client -> api
  client ~> api: GET /user/42
}`;

function CustomControls() {
  const api = useMarkgraf(src);
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 640 }}>
      <canvas
        ref={api.elementRef}
        style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8 }}
      />
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={api.toggle}>{api.playing ? "Pause" : "Play"}</button>
        <input
          type="range"
          min={0}
          max={api.duration || 1}
          step={0.01}
          value={api.time}
          onChange={(e) => api.seek(parseFloat(e.target.value))}
          style={{ flex: 1 }}
        />
        <button onClick={() => api.setSpeed(2)}>2×</button>
        <code>
          {api.time.toFixed(2)} / {api.duration.toFixed(2)} —{" "}
          {api.keyframe || "—"}
        </code>
      </div>
    </div>
  );
}

const meta: Meta<typeof CustomControls> = {
  title: "Player/useMarkgraf",
  component: CustomControls,
};

export default meta;
type Story = StoryObj<typeof CustomControls>;

export const WithCustomControls: Story = {};
