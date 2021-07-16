import React, { useEffect, } from "react";
import styled from "styled-components";
import WebFont from "webfontloader";

import LandingPage from "./compoments/landing-page/LandingPage";

import ResetCSS from "./global-styles/ResetCSS";

export default function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Saira Stencil One", "Raleway"],
      },
    });
  }, []);


  return (
    <>
      <ResetCSS />
      <LandingPage />
    </>
  );
}
