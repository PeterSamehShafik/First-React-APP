import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends Component {
    render() {
    return (
        <nav className="navbar navbar-expand-lg bg-nav fixed-top">
        <div className="container px-5">
            <NavLink className="navbar-brand fa-2x" to="/">START REACT</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <i className="fab fa-chrome text-white text-center mt-1"></i>
            </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <NavLink className="nav-link" 
                     aria-current="page" to="/home">HOME</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" 
		    to='/portfolio'
		    >
			PORTFOLIO
		</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>CONTACT</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
    }
}
