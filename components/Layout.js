import { deviceState } from "@/recoil/global";
import { useRecoilState } from "recoil";
import AppNav from "./AppNav";
import Nav from "./Nav";
import { useEffect, useState } from "react";
const Layout = ({ children }) => {
  const [lDeviceState, setDeviceState] = useRecoilState(deviceState);
  console.log(`sdfsdfsdfsdf : ` + lDeviceState);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 100); // Adjust the value based on when you want the header to change
      // console.log(`scroll ........... : ` + scrolling);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <>
      {/* TODO title 동적으로 받아서 보여줘야 함. */}
      {lDeviceState === "APP" ? <AppNav title={"이건초기모임세팅"} /> : lDeviceState === "MW" ? <Nav /> : ""}
      <div>{children}</div>
    </>
  );
};

export default Layout;
