import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/total.css"


const Download = () => {
  return (
    
      <div  className="container">
 
       <div className="row ab-mbl-1" >
        
        <div data-aos='fade-right' className="col-lg-6 ab1-content container">
            <h2 style={{fontSize:60}}>Download <br/> App</h2><br/><br/>
            {/* <p style={{color:'#575757', marginTop:20}}>You can find Hazri Xpert on both Play Store and App Store</p> */}
            <div className="container-fluid " style={{display:'flex', marginLeft:-27}}>
        <button className="  app-btn" data-aos='fade-up'> <img style={{width:150}} src="./images/apple-btn.svg" alt="" /></button>
        <button  className="  app-btn" data-aos='fade-up'> <img style={{width:150}}  src="./images/Group 4.svg" alt="" /></button>
        </div>
        </div>
        <div data-aos='fade-left' className="col-lg-6 mbl1" >
            <img className='mblpic1' style={{width:550, marginTop:30}}  src="./images/1 15.svg" alt="" />
        </div>
    </div></div>
    
  )
}

export default Download