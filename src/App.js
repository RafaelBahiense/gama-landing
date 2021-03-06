import React, { useEffect, } from "react";
import WebFont from "webfontloader";

import LandingPage from "./compoments/landing-page/LandingPage";

import ResetCSS from "./styles/ResetCSS";
import GlobalCSS from "./styles/GlobalCSS";

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
      <GlobalCSS />
      <LandingPage />
    </>
  );
}
