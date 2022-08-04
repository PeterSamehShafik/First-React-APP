import React, { Component } from 'react'
import './Portfolio.css'
import cabin from'./img/cabin.png'
import cake from'./img/cake.png'
import game from'./img/game.png'
import circus from'./img/circus.png'
import safe from'./img/safe.png'
import submarine from'./img/submarine.png'
import { Header } from '../Small Components/Header/Header'





export class Portfolio extends Component {
    
    state= {
        imgSrc:null,
        secName:null
    }

    componentDidMount= ()=>{
        let viewPhoto = document.querySelector('.view-photo')
        let closeBtn= document.querySelectorAll('.cls')
        for(let i=0; i<closeBtn.length;i++){
            closeBtn[i].addEventListener('click',()=>{
                viewPhoto.style.display='none'
            })
        }


        let items = document.querySelectorAll(".item")
        for (let i=0; i<items.length; i++) {
            items[i].addEventListener('click',()=>{
                viewPhoto.style.display='flex'
                let imgSrc = items[i].firstChild.src;
                let secName = items[i].firstChild.alt;
                this.setState({imgSrc})
                this.setState({secName})

            })
        }
    }

  render() {
    return <>
    <section className='portfolio'>
        <div className="container my-5">
            <Header sectionName='PORFTOLIO' />

            <div className="row g-5 p-5">
                <div onClick={this.myFunc} className=" col-md-6 col-lg-4">
                    <div className="item position-relative">
                    <img src={cabin} className='img-fluid' alt="LOG CABIN" />
                    <div className="layer">
                        <i className="fa-solid fa-plus text-white fa-5x fw-bolder"></i>
                    </div>
                        
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item position-relative">
                        <img src={cake} className='img-fluid' alt="TASTY CAKE" />
                        <div className="layer">
                            <i className="fa-solid fa-plus text-white fa-5x fw-bolder"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item position-relative">
                        <img src={circus} className='img-fluid' alt="CIRCUS TENT" />
                        <div className="layer">
                            <i className="fa-solid fa-plus text-white fa-5x fw-bolder"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item position-relative">
                        <img src={game} className='img-fluid' alt="CONTROLLER" />
                        <div className="layer">
                            <i className="fa-solid fa-plus text-white fa-5x fw-bolder"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item position-relative">
                        <img src={safe} className='img-fluid' alt="LOCKED SAFE" />
                        <div className="layer">
                            <i className="fa-solid fa-plus text-white fa-5x fw-bolder"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item position-relative">
                        <img src={submarine} className='img-fluid' alt="SUBMARINE" />
                        <div className="layer">
                            <i className="fa-solid fa-plus text-white fa-5x fw-bolder"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="view-photo shadow">
                    <div id='box' className="my-5 p-4 text-center position-relative" >
                        <div onClick={this.closeFunc} className='cls close-btn'>
                            <a className='text-info exit fa-4x p-4'>X</a>
                        </div>
                        <Header sectionName={this.state.secName}/>
                        <img src={this.state.imgSrc} className="w-75 text-center p-5" />
                        <p className='w-75 mx-auto'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <button onClick={this.closeFunc} className='cls btn btn-info mt-5'>x Close Window</button>
                        
                    </div>    
                  </div>
            

        </div>
    </section>
    
    </>
  }
}
