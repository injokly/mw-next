import React, { Component } from "react";
import Nav from "./Nav";
import { useRecoilState } from "recoil";
import { deviceState } from "@/recoil/global";
import AppNav from "./AppNav";
const Layout = ({ children }) => {
  const [lDeviceState, setDeviceState] = useRecoilState(deviceState);
console.log(`sdfsdfsdfsdf : `+lDeviceState);
  return (
    <>
      {lDeviceState === "APP" ? <AppNav /> : <Nav/>}
      <div>{children}</div>
    </>
  );
};

export default Layout;
