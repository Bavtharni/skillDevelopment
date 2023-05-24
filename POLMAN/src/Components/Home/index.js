import React from 'react';
import ReactDOM from 'react-dom';
import createScrollSnap from 'scroll-snap';
import './style.css';

import Home1 from "../images/home1.png";
import Home2 from "../images/PAGE3.png";
import Home3 from "../images/home3.png";

import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';
import {FiLinkedin} from 'react-icons/fi';
import { Link } from "react-router-dom";
import { AiOutlineRight} from 'react-icons/ai';



class Home extends React.Component {
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    createScrollSnap(element, {
      snapDestinationY: '100%',
    }, () => console.log('snapped'))
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div className="fullwidth-container" id="container" ref={this.container}>
        <div className="page first-page">
          <div class="row">
            <div class="col-12">
                <h1 className='homehead'>QGUARD®</h1>
                <div className='img-text'>
                    <h2 className='homesubhead'>Precision in perfection</h2>
                    <p className='homeparagraph'>
                      Your key to uninterrupted performance. Hardened to <br/>
                      the exceptional requirements of the international oil <br/>
                      and gas industry, our QGUARD® pneumatic actuators <br/> 
                      display unmatched precision and durability.
                    </p>
                    <center><Link to="/Products" className='btn btn-secondary bg-b p-2'>Know More</Link></center>
                </div>
                <img className='img' src={Home1} alt="" />
    
            </div>
          </div> 
        </div>
        <div className="page second-page">
          <div class="row">
            <div class="col-12 p-0">
              <h1 className='homehead1' style={{color:"#0f4fa2 "}}>QLOOP®</h1>
              <div className='img-text1'>
                <h1>Next Gen <br />automation</h1>
                <Link to="/Products"  style={{position: "relative", left: "52px"}} className='btn btn-secondary bg-b p-2'>Know More</Link>
              </div>
              <img className='img1' src={Home2} alt="" />
            </div>
          </div>
        </div>
        <div className="page third-page">
          <div class="row" style={{display:"flex", justifyContent:"center"}}>
            <div className='col-4'> 
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
            <div className='col-2 pb-2'>
              <h1 className="footersubhead">Company</h1>
            
              <ul className="list-unstyled">
                  <li className="footerfont fa-li"> <AiOutlineRight/> About Us</li>
                  <li className="footerfont"> <AiOutlineRight/> Products</li>
                  <li className="footerfont"> <AiOutlineRight/> Polman Revolution</li>
                  <li className="footerfont"> <AiOutlineRight/> Career</li>
                  <li className="footerfont"> <AiOutlineRight/> Contact</li>
              </ul>
            </div>
            <div className='col-2'>
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
            <p className="footerfont" style={{position: "absolute",top: "350px",textAlign:"center"}}> © 2022 Polman. Design by Vulcantechs.</p> 
          </div>            
        </div>
      </div>
    )
  }
}

export default Home;
