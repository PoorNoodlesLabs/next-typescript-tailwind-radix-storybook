import type { Preview } from "@storybook/react";
import { Theme } from "@radix-ui/themes";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import CssBaseline from "../src/components/CssBaseline";

export const decorators = [
  withThemeFromJSXProvider({
    defaultTheme: "system",
    Provider: Theme,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
