import React, { Component } from 'react'
import './About.css'
import { Header } from '../Small Components/Header/Header'

export  class About extends Component {
  render() {
    return <>
      <section className="about ">
        <div className="container">
          <Header sectionName='ABOUT' />

          <div className="row g-5 text-white p-5">
            <div className="col-md-4 ms-auto">
              <div className="about-text">
              <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
            <div className="col-md-4 me-auto ">
              <div className="about-text">
              <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    
    </>
  }
}
