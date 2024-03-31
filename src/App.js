import React from "react";
import Nav from "./Nav";
import "./styles.css"
import Hero from "./Hero";
import Bookarea from "./Bookarea";
import Packages from "./Packages";
import Services from "./Services";
import Gallery from "./Gallery";
import Aboutus from "./Aboutus";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Bookarea />
      <Packages />
      <Services />
      <Gallery />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
