import React from 'react';
import './App.scss';
import Header from './components/header';
import Hero from './components/hero';
import Capable from './components/capable';
import CaseStudies from './components/case-studies';
import About from './components/about';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Capable/>
        <About/>
         <CaseStudies/>
        {/* <Testimonials/> */}
        <Footer/>
    </div>
  );
}

export default App;
