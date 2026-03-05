import React from "react";
import TopContent from "../TopContents/TopContents";
import { Element } from "react-scroll";
import bg from "../assets/BG.png";

const TopContainer = () => {
  return (
    <Element
      name="About"
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <TopContent />
    </Element>
  );
};

export default TopContainer;
