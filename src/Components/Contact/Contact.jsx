import React, { Component } from 'react'
import './Contact.css'
import { Header } from '../Small Components/Header/Header'

export  class Contact extends Component {
  render() {
    return <>
        <section className="contact">
            <div className="container my-5">
                <Header sectionName='CONTACT ME' />
                <div className="row mt-5">
                    <div className="col-md-8 mx-auto">
                        <div className="form">
                            <input name='userName' type="text" placeholder='Name' className='form-control' />
                            <hr />
                            <input name='userEmail' type="email" placeholder='Email Address' className='form-control' />
                            <hr />
                            <input name='userPhone' type="text" placeholder='Phone Number' className='form-control' />
                            <hr />
                            <textarea name="messege" id="" cols="30" rows="10" placeholder='Messege' className='form-control'></textarea>
                            <hr />
                            <button className='btn btn-form'>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    
    
    </>
  }
}
