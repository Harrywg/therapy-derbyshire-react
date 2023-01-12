import Home from './components/pages/Home'
import Head from './components/Head'
import Services from './components/pages/Services';
import About from './components/pages/About'
import Location from './components/pages/Location'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'
import React, { useState } from 'react';
import ReactLoading from "react-loading";


export default class App extends React.Component {
  state = {
    loadingState: 1,
    displayContent: 'none'
  }
  componentDidMount = () => {
    setTimeout(() => {
      let image = new Image();
      image.src = "https://media.istockphoto.com/id/1138257835/photo/closeup-of-woman-playing-with-child.jpg?s=612x612&w=0&k=20&c=n0xO_PAssVrAFsrsTO3asJ0sgc80Lz_ZeBJjZJzy_68=";
      let background = new Image();
      background.src = "./images/drawn-background-cropped.jpg"
      image.onload(
        background.onload(
          this.setState({
            loadingState: 0,
            displayContent: 'block'
          })
        ))


    }, 500);

  }
  render() {

    return (
      <div id="main" >
        <div id="loading" style={{ opacity: this.state.loadingState }}>
          <ReactLoading type="bubbles" color="white"
            height={100} width={50} />
        </div>
        <div style={{ display: this.state.displayContent }}>
          <Head />
          <Home />
          <Services />
          <About />
          <Location />
          <Contact />
          <Footer />
        </div>
      </div >)
  };
}

