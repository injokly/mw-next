import { Ctrl } from "./Ctrl";

export default {
  title: "Components/Ctrl",
  component: Ctrl,
  argTypes: {
    horiResizing: {
      options: ["fill", "hug", "fixed"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showSecBtn: false,
    horiResizing: "fill",
    className: {},
    solidBg: "posi",
    solidBtnTxt: "#btn_txt",
    solidGrade: "pri",
  },
};
