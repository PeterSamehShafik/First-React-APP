import './App.css'
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from './Components/Navbar/Navbar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { NotFound } from './Components/NotFound/NotFound';

export class App extends Component {
  render() {
    return <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='Home' element={ <Home />}/>
        <Route path='portfolio' element={ <Portfolio />}/>
        <Route path='About' element={ <About />}/>
        <Route path='Contact' element={ <Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    
      
    
    </>
  }
}
