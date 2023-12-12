/** @type { import('@storybook/react').Preview } */
import { RecoilRoot } from "recoil";
import "@/styles/productGlobal.css"; //운영중인 버전 전역 css 모음
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { QueryClientProvider, QueryClient } from "react-query";
import "@/styles/font.css";
import "@/styles/Card.css";
import "@/styles/Modal.css";
import "@/styles/styleguide.css";
import "@/styles/Account.css";
import "@/styles/Content.css";
import "@/styles/Ctrl.css";
import "@/styles/Info.css";
import "@/styles/Solid.css";
import "@/styles/Txt.css";
import "@/styles/Ico.css";
import "@/styles/Header.css";
import "@/styles/TagBackgroundDark.css";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    //default를 iphone 13으로 설정함.
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone13",
    },
    layout: "fullscreen",
  },
};
const queryClient = new QueryClient();
export default preview;
export const decorators = [
  (Story) => (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </RecoilRoot>
  ),
];
