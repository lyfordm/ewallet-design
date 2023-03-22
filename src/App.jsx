import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mockups from "./components/mockUps";
import Mock from "./components/Mock";
function App() {
  return (
    <>
      <section className>
        <Hero />
      </section>
      <section className=" h-full">
        <Header />
      </section>
      <section>
        <Mock />
      </section>
    </>
  );
}

export default App;
