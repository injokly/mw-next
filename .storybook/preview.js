/** @type { import('@storybook/react').Preview } */
import "@/styles/productGlobal.css"; //운영중인 버전 전역 css 모음

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
