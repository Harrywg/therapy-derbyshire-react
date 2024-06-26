import Home from "./components/pages/Home";
import Head from "./components/Head";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Location from "./components/pages/Location";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import React, { useState } from "react";
import ReactLoading from "react-loading";

export default class App extends React.Component {
  render() {
    return (
      <div id="main" style={{}}>
        <div>
          <Head />
          <Home />
        </div>
      </div>
    );
  }
}
