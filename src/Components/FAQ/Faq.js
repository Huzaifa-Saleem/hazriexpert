import React,{useEffect}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/total.css"
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Accordion } from 'react-bootstrap';
const Faq = () => {
    useEffect(() => {
    
        Aos.init({duration:0});
      
      }, [])
  return (
    <>
    <div style={{maxWidth:600}} className="container">
    <div style={{textAlign:'center' ,marginTop:80, marginBottom:50}} id='faqs' className="container-fluid">
    <h1 style={{fontWeight:'600', fontSize:50, color:'#313131'}} >FAQ's</h1> 
    </div>
    <Accordion style={{border:'1px solid #E7EBEE', borderRadius:10}} data-aos='fade-up' defaultActiveKey="0" flush>
  <Accordion.Item  eventKey="0">
    <Accordion.Header >Sign up</Accordion.Header>
    <Accordion.Body>
    Parents and teachers can be sign up free from the app. Parents simply go to school to get their username and password and login to the app where they get anything about their child.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item style={{}} eventKey="1">
    <Accordion.Header>Reports & Chat</Accordion.Header>
    <Accordion.Body>
    After logging into the app parents can easily get each report of a child in a single platform. Attendance report, test report and also they can apply for leave from the app within a mint and get notification after approval. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item style={{}} eventKey="2">
    <Accordion.Header>Enjoy the app</Accordion.Header>
    <Accordion.Body>
    Parents and teachers get notifications from school in an app. From a single touch admin can send announcements to both parents and teachers. Parents also get offers and child activities pictures in the app.     </Accordion.Body>
  </Accordion.Item>
</Accordion>


    </div>
    </>
  )
}

export default Faq