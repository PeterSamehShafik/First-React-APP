import React, { Component } from 'react'
import './NotFound.css'
export class NotFound extends Component {
  render() {
    return <>
        <section className="not-found bg-danger">
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="not-found-content text-white text-center">
                    <h2 className='display-1'>404 Not Found</h2>
                    <p >Check your URL again or contact the supporter</p>
                </div>
            </div>
        </section>
    
    
    </>
  }
}
