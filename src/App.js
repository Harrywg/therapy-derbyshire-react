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
    loadingHeight: '100vh',
    loadingOverflow: 'hidden'
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loadingState: 0,
        loadingHeight: 'auto',
        loadingOverflow: 'visible'
      })
    }, 800)

  }
  render() {

    return (
      <div id="main" style={{ height: this.state.loadingHeight, overflow: this.state.loadingOverflow }}>
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

