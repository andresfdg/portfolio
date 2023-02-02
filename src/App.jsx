import { useState } from "react";

import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Boot from "./components/Boot";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Boot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default App;
