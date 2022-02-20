import React, { useEffect, useRef, useState, Component } from 'react'

import './style.css'
import './responsive-style.css'

import video from '../Components/Imgs/file.mp4'
import main_img from '../Components/Imgs/main-img.webp'
import main_img1 from '../Components/Imgs/main-img1.webp'
import logos from '../Components/Imgs/logos.webp'
// import banner from '../Components/Imgs/banner.webp'
import banner from '../Components/Imgs/banner.gif'
import logos1 from '../Components/Imgs/logos1.webp'
import img1 from '../Components/Imgs/img1.webp'
import btn2 from '../Components/Imgs/btn2.webp'
import btn21 from '../Components/Imgs/btn21.webp' 
import logo from '../Components/Imgs/logo.webp'
import logo1 from '../Components/Imgs/logo1.webp'
import btn1 from '../Components/Imgs/btn1.webp'
import btn11 from '../Components/Imgs/btn11.webp'
import img11 from '../Components/Imgs/img11.webp'

import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
require("dotenv").config();

export default function Home() {

    const [userWallet, setUserWallet] = useState(false);

    async function connectWallet(){
        if (await detectEthereumProvider()) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          const web3 = window.web3;
   
            let metaMaskAccount = await web3.eth.getAccounts();
            metaMaskAccount = metaMaskAccount[0];

            console.log(metaMaskAccount);
            setUserWallet(metaMaskAccount);
        }
    }

    return (
        <div className="banner-page main-wrapper d-flex align-items-center">
            <video autoPlay muted loop id="myVideo" src={video}></video>
            <div className="container">
                <div className="row">
                    <div className="col-12 banner-page-top">
                        <img className="main-banner-img" src={main_img} alt="#" />
                        <img className="main-banner-img1 visible-xs" src={main_img1} alt="#" />
                        <img className="social-icon" src={logos} alt="#" />
                    </div>
                    <div className="col-12 text-center">
                        <img className="banner-img1" src={banner} alt="banner" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 banner-page-bottom d-flex">
                        <img className="social-icon-img1 visible-xs" src={logos1} alt="#" />

                        <img className="main-bottom-img hidden-xs" src={img1} alt="#"  />
                        <img className="main-bottom-img visible-xs" src={img11} alt="#" />

                        <a href="http://haseeds.com/roadmap/"><img className="btn-img1 hidden-xs" src={btn2} alt="#" /></a>
                        <a href="./learn-more"><img className="btn-img1 visible-xs" src={btn21} alt="#" /></a>

                        <a href="#"><img className="logo-img hidden-xs" src={logo} alt="#" /></a>
                        <a href="#"><img className="logo-img visible-xs" src={logo1} alt="#" /></a>

                        <a href="#">
                        {
                            !userWallet ? <>
                                <img className="btn-img2 hidden-xs" src={btn1} alt="#" onClick={() => connectWallet()}/>
                                <img className="btn-img2 visible-xs" src={btn11} alt="#" onClick={() => connectWallet()}/>
                            </> : <span className='btn-img2 d-block' style={{color: '#22ea7f'}}>
                                Wallet Connected
                                {/* {userWallet} */}
                            </span>
                        }
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
