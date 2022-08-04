import './Header.css'
import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return <>
        <div className="section-header text-center">
            <h2 className='fa-4x '>{this.props.sectionName}</h2>
            <div className="star-line d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <i className="fa-solid fa-star fa-2x px-3"></i>    
                <div className="line"></div>
            </div>    
        </div>
    </>
  }
}
