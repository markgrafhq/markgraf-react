import type { Preview } from "@storybook/react";
import "@markgrafhq/markgraf-react/css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
