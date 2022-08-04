import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
  render() {
    return <>
    
    <footer>
        <div className="container">
            <div className="row text-white text-center">
                <div className="col-md-3 ms-auto">
                    <div className="location p-4">
                        <h2>LOCATION</h2>
                        <p className=''>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="social p-4">
                        <h2>AROUND THE WEB</h2>
                        <div className="social-icons">
                            <i className="fa-brands rounded-circle fa-facebook-f"></i>
                            <i className="fa-brands rounded-circle fa-twitter"></i>
                            <i className="fa-brands rounded-circle fa-linkedin"></i>
                            <i className="fab fa-dribbble rounded-circle "></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ms-auto">
                    <div className="location p-4">
                        <h2>ABOUT FREELANCER</h2>
                        <p className=''>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    <div className="copyright text-center text-white p-4">
            <p className='p-0 m-0'>Copyright © Your Website <u>2021</u></p>
    </div>
    
    </>
  }
}
