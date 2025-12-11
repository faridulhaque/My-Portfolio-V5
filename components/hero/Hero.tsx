import React from "react";
import Navbar from "./Navbar";
import AppBar from "./AppBar";

function Hero() {
  return (
    <div className="relative w-full h-screen bg-linear-to-t from-[#C7A9FF] to-[#F5EFFF] overflow-hidden">
      <div className="absolute top-0 left-1/2 w-full h-[150%] -translate-x-1/2 z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0.6)_30%,rgba(255,255,255,0)_70%)]"></div>
      <Navbar></Navbar>
      <AppBar></AppBar>
    </div>
  );
}

export default Hero;
