import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';


import Home3 from "../images/home3.png";

import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';
import {FiLinkedin} from 'react-icons/fi';
import { AiOutlineRight} from 'react-icons/ai';
import { useLocation } from "react-router-dom";

const Footer= () => {
    const { pathname } = useLocation();
    console.log(pathname);
    // you can check a more conditions here
    if (pathname === "/") return null;
    
    return (
        <>
            <div className="container-fluid pt-4">
            <div class="row row-1" style={{display:"flex", justifyContent:"center"}}>
            <div className='col-4 pt-4'> 
                <img className='smallimg' src={Home3} alt="" />            
                <p className="footerfont">
                Start working with Polman that can provide everything <br/> you need to generate awareness, drive traffic, connect.</p>
                    <ul id='socialicons1' >
                    <li><div className="social-icons1"><FiFacebook /></div></li>
                    <li><div className="social-icons1"><AiOutlineInstagram/></div></li>
                    <li><div className="social-icons1"><RiTwitterLine /></div></li>
                    <li><div className="social-icons1"><FiLinkedin /></div></li>
                    </ul>
            </div>
            <div className='col-2 pt-4'>
                <h1 className="footersubhead">Company</h1>
            
                <ul className="list-unstyled">
                    <li className="footerfont fa-li"> <AiOutlineRight/> About Us</li>
                    <li className="footerfont"> <AiOutlineRight/> Products</li>
                    <li className="footerfont"> <AiOutlineRight/> Polman Revolution</li>
                    <li className="footerfont"> <AiOutlineRight/> Career</li>
                    <li className="footerfont"> <AiOutlineRight/> Contact</li>
                </ul>
            </div>
            <div className='col-2 pt-4'>
            <h1 className="footersubhead">Useful Links</h1>
                <ul className="list-unstyled">
                <li className="footerfont fa-li"><AiOutlineRight/> Impressum</li>
                <li className="footerfont"><AiOutlineRight/> Privacy policy</li>
                <ul className="list-unstyled">
                    <li className="footerfont"><AiOutlineRight/> Sales</li>
                    <li className="footerfont"><AiOutlineRight/> Purchases</li>
                </ul>
                </ul>
            </div> 
            <p className="footerfont" style={{position: "absolute",top: "350px", textAlign:"center"}}> © 2022 Polman. Design by Vulcantechs.</p> 
            </div>            
            </div>
        </>
 );
};
export default Footer;
