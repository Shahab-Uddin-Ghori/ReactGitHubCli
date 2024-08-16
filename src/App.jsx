import { useState } from "react";
import "./App.css";
import "./responsive.css";
import Header from "./header";
import MainSec from "./mainSec";
import Footer from "./footer";
import React from "react";
import Type1js from "./type1js";
import Type2 from "./type2js";
import Type3 from "./type3";

const App = () => {
  return (
    <>
      <Header />
      <MainSec />
      <Footer />
    </>
  );
};
App();

export default App;
