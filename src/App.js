import React from "react";
import "./styles.css";

import Count from "./components/addition.js";
import ChangeColor from "./components/changeColor.js";
import GrowShrink from "./components/growShrink.js";
import Hide from "./components/hideMe.js";
import Slider from "./components/rgbSlider.js";
import Clock from "./components/tickingClock.js";
import Toggle from "./components/toggleMe.js";
import Push from "./components/pushMeAround";
import ChangePlacement from "./components/moveButton";

export default function App() {
  return (
    <div className="App">
      <Count />
      <hr />
      <ChangeColor />
      <hr />
      <GrowShrink />
      <hr />
      <Hide />
      <hr />
      <Push />
      <hr />
      <Slider />
      <hr />
      <Clock />
      <hr />
      <ChangePlacement />
      <hr />
      <Toggle />
      <hr />
    </div>
  );
}
