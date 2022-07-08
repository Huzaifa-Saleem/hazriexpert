import React from 'react'
import Navbar from '../Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/total.css"
import "../css/responsive.css"
import { Link } from 'react-router-dom';
import About from '../AboutUs/About';
import Features from '../Features/Features'
import Faq from '../FAQ/Faq';
import Download from '../Download/Download';
const Home = () => {
  return (
    <div  style={{overflow:'hidden'}}>
    
        <Navbar />
    
    {/* blue background */}
        <div   className='bg-home '  id='home'> 
            <div style={{position:'relative'}} > <div style={{overflow:'hidden'}}>   <img  src="./images/background.svg" className='bga' alt="back" /> </div></div>
                <img src="./images/bg-ani-1.svg" className='bg-circle1' alt="" />
                <img src="./images/bg-ani-2.svg" className='bg-circle1 bg2' alt="" />
                <img src="./images/bg-ani-3.svg" className='bg-circle1 bg3' alt="" />
                <img src="./images/bg-ani4.svg" className='bg-circle1 bg4' alt="" /> 
        </div>
    {/* blue background */}

    {/* social */}
    <div   className='social' >
        <Link to={'/'}><img className='facebook' src="./images/f.svg" alt="" /></Link>
        <Link to={'/'}><img  src="./images/insta.svg" alt="" /></Link>
        <Link to={'/'}><img  src="./images/twitter.svg" alt="" /></Link>
        <Link to={'/'}><img  src="./images/linkdin.svg" alt="" /></Link>
    </div>
    {/* social */}

    <br />
    <br />
    
    {/* content */}
        <div className="container home-type" style={{textAlign:'center', color:'white'}}>
        <h1 class='h1-home' >Hazri Xpert That <br />
            Makes Life Easier</h1>
            <p style={{color:''}}>We care about your children. Do not just communicate, Engage. <br /> We will make Teachers and Pareants lives easier.</p>
        </div> 

        <div className="container">
            <img className='main-mobile' src="./images/Hero Image.svg" alt="" />
        </div>
        <div >
            <img style={{opacity:.5}} className="line" src="./images/line.svg" alt="" />
        </div>
    {/* content */}
        <div className="app-sec">
        <button className="  app-btn"> <img src="./images/apple-btn.svg" alt="" /></button>
        <button  className="  app-btn"> <img src="./images/Group 4.svg" alt="" /></button>
        </div>
        <div style={{marginTop:-200}} className="dec1">
            <img  src="./images/Decorator1.svg" alt="" />
        </div>

    {/* About us */}
    <About/>
    {/* About us */}

    {/* Features */}
    <Features/>
    {/* Features */}

    {/* FAQ */}
    <div >
        <img style={{opacity:.5}} className="line1" src="./images/line.svg" alt="" />
    </div>
    <Faq/>
    {/* FAQ */}

    {/* Download */}
    <img style={{opacity:.5,position:'absolute'}}  src="./images/Decorator3.svg" alt="" />
    <br />
    <br />
    <br />
    <Download/>
    {/* Download */}

    </div>
  )
}

export default Home