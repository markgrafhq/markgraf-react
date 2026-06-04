import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.base = process.env.STORYBOOK_BASE_PATH || "/";
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@markgrafhq/markgraf-react/css": fileURLToPath(
        new URL("../dist/markgraf-react.css", import.meta.url),
      ),
      "@markgrafhq/markgraf-react": fileURLToPath(
        new URL("../dist/markgraf-react.js", import.meta.url),
      ),
    };
    return config;
  },
};

export default config;
