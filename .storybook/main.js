/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require("path");
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../pages/trnsList/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../components/**/story.tsx"],

  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-onboarding", "@storybook/addon-interactions", "@storybook/addon-console", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
    };
    // Return the altered config
    return config;
  },
};

export default config;
