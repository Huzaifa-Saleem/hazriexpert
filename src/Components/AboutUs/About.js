import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/total.css"
import "../css/responsive.css"
import { Link } from 'react-router-dom';
// import { ScrollContainer, ScrollPage } from 'react-scroll-motion';
import Aos from 'aos';
import "aos/dist/aos.css"

const About = () => {
    useEffect(() => {
    
        Aos.init({duration:0});
      
      }, [])
    
  return (
    <div style={{overflow:'hidden'}}>
        {/* <ScrollPage  > */}
    <div style={{textAlign:'center' ,marginTop:0}} id='about-us' className="container-fluid">
    <h1 style={{fontWeight:'600', fontSize:50, color:'#313131'}} >About us</h1> 
    </div>
    <div className="container ab-mbl-1" >
        <div data-aos='fade-up' className=" mbl " >
            <img className='mblpic1'  src="./images/about1mbl.svg" alt="" />
        </div>
        <div data-aos='fade-left' className="ab1-content " style={{}}>
            <h2>About Us</h2>
            <p style={{color:'#5F7285' ,fontSize:15}}>First of all teachers and busy parents can collaborate anytime and anywhere with the help of a Hazri Xpert App.It is most effective way to promote the teacher-parent communication.At the leading edge,it uplifts the distance & time barrier.A Hazri Xpert App equipped with the following features can significantly enhance parental involvement and simplifies the life of teachers. </p>
            <button className='learn-more-btn' >Learn More</button>
        </div>
    </div>
    <div className="container ab-mbl-2"  >
        <div data-aos='fade-up' className=" mbl " >
            <img className='mblpic1'  src="./images/about1mbl.svg" alt="" />
        </div>
        <div data-aos='fade-left' className="ab1-content " style={{}}>
            <h2>About Us</h2>
            <p style={{color:'#5F7285' ,fontSize:15}}>First of all teachers and busy parents can collaborate anytime and anywhere with the help of a Hazri Xpert App.It is most effective way to promote the teacher-parent communication.At the leading edge,it uplifts the distance & time barrier.A Hazri Xpert App equipped with the following features can significantly enhance parental involvement and simplifies the life of teachers. </p>
            <button className='learn-more-btn' >Learn More</button>
        </div>
    </div>

    <img style={{position:'absolute', right:0, marginTop:-200}} src="./images/Decorator2.svg" alt="" />
    {/* </ScrollPage> */}
    </div>
  )
}

export default About