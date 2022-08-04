import React, { Component } from 'react'
import './Home.css'
import avatar from './avatar.svg'
import { Header } from '../Small Components/Header/Header'
export class Home extends Component {
  render() {
    return <>
        
        <header className="home">
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="home-content text-white text-center ">
              <img src={avatar} alt="" className='w-50 mb-5 ' />
              <Header sectionName='START REACT' />
              <p className='fa-2x mt-5'>Graphic Artist - Web Designer - Illustrator</p>
            </div>

          </div>
        </header>
    
    </>
  }
}
