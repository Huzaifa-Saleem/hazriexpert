import React,{useState} from 'react'
import "../css/total.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll';
const Navbar = () => {
  
  const [Navbar, setNavbar] = useState(false)

  const navbarScroll = () =>{
    console.log(window.scrollY)
  }
  window.addEventListener('scroll', navbarScroll)

  return (
    <> 
    <nav className='navbar navbar-expand-lg navbar-dark'  style={{marginTop:10}} >    
    <div style={{position:'sticky'}} className='container'>
        <Link to="/" className='navbar-brand'><img style={{width:150}} src="./images/logo-main.svg" alt="" /></Link>
        <div className='collapse navbar-collapse'>
    
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navmenu' ></button>

    <ul className="navbar-nav ms-auto">
      <li className="nav-item ">
    <Link className="nav-link active" to='home' smooth={true} duration={1000} >Home</Link>
      </li>
     <li className="nav-item">
    <Link className="nav-link active" to='about-us' smooth={true} duration={1000} >About</Link>
     </li>
     <li className="nav-item">
    <Link className="nav-link active" to='features' smooth={true} duration={1000} >Features</Link>
     </li>
     <li className="nav-item">
    <Link className="nav-link active" to='faqs' smooth={true} duration={1000} >FAQ's</Link>
     </li>
     <li className="nav-item">
    <Link className="nav-link active" to='about-us' smooth={true} duration={1000} >Contact</Link>
     </li>
  
    </ul> 
    </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar