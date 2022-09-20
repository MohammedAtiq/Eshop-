import React from 'react'
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoSkype, IoCallSharp, IoMail } from "react-icons/io5";
import online from "./Image/online.jpg"

const Footer = () => {
    return (
        <>
            <div className="container-fluid foot mt-5">
                <div className="row py-2 text-start ms-md-5  ms-2">
            <div className="col-md-3 col-6 mt-5 ">
                <h5> ABOUT</h5>
                <p><i><IoCallSharp/> </i><strong>+91 123456789</strong> </p>
                <p><i><IoMail/> </i><strong>abcd@gmail.com</strong> </p>
                <p className="ms-5"> Social Sites </p>
                <div className="icon" style={{width:'180px'}}>
                    <i className="px-2"><IoLogoInstagram/></i>
                    <i className="px-2"><IoLogoFacebook/></i>
                    <i className="px-2"><IoLogoLinkedin/></i>
                    <i className="px-2"><IoLogoSkype/></i>
                </div>
            </div>
            <div className="col-md-3 col-6 mt-5">
            <h5> ADDRESS</h5>
                <p>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quo tenetur doloribus. Quia eveniet consequuntur , </p>
                
                
            </div>
            <div className="col-md-3 col-6 mt-5 ">
            <h5>CATEGORIES</h5>
            <ul >
                <li>Mens Cloths</li>
                <li>womens Cloths</li>
                <li>Jewellers</li>
                <li>Electronic</li>
                </ul>
                
            </div>
            <div className="col-md-3 col-6 mt-5">
            <h5>ABOUT</h5>
               
               <p>Website made by </p>
                <p>Mohammed Atiq</p> 
                <img src={online} className="img-fluid mt-3" alt="" style={{ width:'130px',height:'70px'}} />
            </div>
        </div>
        <div className="row text-center foot2">
            <div className="col-md-10 mx-auto"><p>All copy@ rights reserved. 2022</p></div>
        </div>
            </div>    
        </>
    )
}

export default Footer
