
import React, { Component } from 'react';
import './PortfolioView.css'
import { Header } from '../Small Components/Header/Header'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export class PortfolioView extends Component {
  render() {
    return <>
    {
        <div>
        <div className="view-photo shadow">
            <div id='box' className="my-5 p-4 text-center position-relative" >
                <div className='close-btn'>
                    <a onClick={close} className='text-info exit fa-4x p-4'>X</a>
                </div>
                <Header sectionName='TASTY CAKE'/>
                <img src="" className="w-75 text-center p-5" />
                <p className='w-75 mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                </p>
                <button onClick={close} className='btn btn-info mt-5'>x Close Window</button>
                
            </div>    
          </div>
      </div>
    }
    </>
  }
}
