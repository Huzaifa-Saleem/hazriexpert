import React,{useEffect}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/total.css"
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
const Features = () => {
    useEffect(() => {
    
        Aos.init({duration:0});
      
      }, [])
  return (
    <>
    <div style={{overflow:'hidden'}} id='features' className="container">
        <div className="container">
        <div className="container">
        <div className="container">
        <div className="container" style={{textAlign:'center' }}>
            <h1 style={{fontWeight:'600', fontSize:50, color:'#313131'}}>Features</h1>
            <p className='container' style={{minWidth: '50%',maxWidth:'80%', textAlign:'center'}}>Some of Hazri Xpert Features where you get an idea about Hazri Xpert how it works and what's new feature included and how you can use this app. </p>
            <br />
            <br />
        </div>
        <div className="container">
            <div  className="row " style={{}}>
                <div data-aos='fade-up' className="col-sm-6 features- container">
                <div className=" rounded ">
                    <div className="-body">
                    <h4 className='-title'>Mark Attendance</h4>
                    <p style={{color:'#5F7285' ,fontSize:14}}>Teachers can mark attendance in less than 60 seconds using the Hazri Xpert App for teachers. All lists are generated after selection of subject and mark attendance and make a report on a daily basis. </p>
                    </div></div>
                </div>
                <div data-aos='fade-up' className="col-sm-6 features- container">
                <div className=" rounded ">
                    <div className="-body">
                    <h4 className='-title'>Communicate With Parents</h4>
                    <p style={{color:'#5F7285' ,fontSize:14}}>Teachers can broadcast a message or important notice to all the parents at once with the Hazri Xpert. Additionally, teachers can also chat with parents regarding their child.</p>
                    
                    </div></div>
                </div>               
            </div>               
            </div>


            <div className="container">
            <div className="row " style={{}}>
                <div data-aos='fade-up' className="col-sm-6 features- container">
                <div className=" rounded ">
                    <div className="-body">
                    <h4 className='-title'>Mark Attendance</h4>
                    <p style={{color:'#5F7285' ,fontSize:14}}>Teachers can mark attendance in less than 60 seconds using the Hazri Xpert App for teachers. All lists are generated after selection of subject and mark attendance and make a report on a daily basis. </p>
                    </div></div>
                </div>
                <div data-aos='fade-up' className="col-sm-6 features- container">
                <div className=" ab">
                    <div className="-body">
                    <h4 className='-title'>Communicate With Parents</h4>
                    <p style={{color:'#5F7285' ,fontSize:14}}>Teachers can broadcast a message or important notice to all the parents at once with the Hazri Xpert. Additionally, teachers can also chat with parents regarding their child.</p>
                    </div></div>
                </div>               
            </div>                 
            </div>
           
           
            <div className="container">
            <div className="row " style={{}}>
                <div data-aos='fade-up' className="col-sm-6 features- container">
                <div className=" rounded ">
                    <div className="-body">
                    <h4 className='-title'>Mark Attendance</h4>
                    <p style={{color:'#5F7285' ,fontSize:14}}>Teachers can mark attendance in less than 60 seconds using the Hazri Xpert App for teachers. All lists are generated after selection of subject and mark attendance and make a report on a daily basis. </p>
                    </div></div>
                </div>
                <div data-aos='fade-up' className="col-sm-6 features- container">
                <div className=" ab">
                    <div className="-body">
                    <h4 className='-title'>Communicate With Parents</h4>
                    <p style={{color:'#5F7285' ,fontSize:14}}>Teachers can broadcast a message or important notice to all the parents at once with the Hazri Xpert. Additionally, teachers can also chat with parents regarding their child.</p>
                    </div></div>
                </div>               
            </div>           
            </div>
            

            </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default Features