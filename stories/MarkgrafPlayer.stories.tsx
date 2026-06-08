import type { Meta, StoryObj } from "@storybook/react";
import { MarkgrafPlayer } from "@markgrafhq/markgraf-react";

const requestResponse = `seed 1
keyframe v1 {
  +node client "Client"
  +node api "API"
  +edge client api
  client -> api "GET /user/42"
}`;

const cacheFlow = `seed 1
keyframe v1 {
  +node app "App"
  +node cache "Cache"
  +node db "Database"
  +edge app cache
  +edge cache db
  app -> cache "read"
  cache -> db "miss"
  db -> cache "row"
  cache -> app "value"
}`;

const meta: Meta<typeof MarkgrafPlayer> = {
  title: "Player/MarkgrafPlayer",
  component: MarkgrafPlayer,
  argTypes: {
    renderer: { control: "inline-radio", options: ["canvas", "svg"] },
    theme: { control: "inline-radio", options: ["light", "dark", "blueprint"] },
    transparent: { control: "boolean" },
    width: { control: { type: "number" } },
    height: { control: { type: "number" } },
    src: { control: "text" },
  },
  args: {
    src: requestResponse,
    renderer: "canvas",
    theme: "light",
    width: 640,
    height: 400,
  },
};

export default meta;
type Story = StoryObj<typeof MarkgrafPlayer>;

export const Canvas: Story = {};

export const Svg: Story = {
  args: {
    renderer: "svg",
  },
};

export const DarkTheme: Story = {
  args: {
    src: cacheFlow,
    theme: "dark",
  },
};

export const Blueprint: Story = {
  args: {
    src: cacheFlow,
    theme: "blueprint",
  },
};
