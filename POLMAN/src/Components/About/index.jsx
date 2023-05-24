import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';
import {FiLinkedin} from 'react-icons/fi';


import about from "../images/about.jpg";
import about1 from "../images/about1.png";

function showSocialIcons(action) {
  if(action === 'show'){
    document.getElementById("socialicons").style.display = "block";
  } else {
    document.getElementById("socialicons").style.display = "none";
  }
}

const About = () => {
  return (
    <div>
      <section>
        <div className='container'>
            <div class="row pb-100">
                <div className="col-12 col-md-6">
                  <img className="img p-2" src={about} alt="" />
                </div>
                <div className="col-12 col-md-6">
                  <p><b>Our Story</b><br />We are Polman GmbH. A German global company that has been transforming the industrial landscape for more than 26 years since its inception.

Founded on a backbone of intrinsic ethics by Eckhard Polman at Bad Feilnbach, we have constantly set industry standard benchmarks with our QGUARD® pneumatic actuators in the international oil and gas industry.

Polman is now associated worldwide with the innovation, reliability and durability of our products. We have made continuous strides in the area of industrial automation, challenging the existing norms and developed the product ProChain® which is a continuously operating automation tool.

Realizing that the present generation of industrial automation tools have reached their limitations, we have pioneered the most cutting-edge and versatile tool in the market - QLOOP®.

The Polman Revolution – We are dedicated and determined to challenge the rules of the game. No more idle times, cycle count restrictions or bottlenecks.
With QLOOP® we help you today to solve the problems of the future.</p>
                </div>
            </div>
            <div class="row pt-100">
              <div className="col-12">
                <center>
                  <div>
                    <h2>Our Greatest Minds</h2>
                    <p>Polman GmbH originated on the hard work and success of our esteemed founder <br/>who has been the fundamental driving force with his motto
                    <br/>Make it easier - make it better - every day</p>
                    <div className='team' onMouseEnter={() => showSocialIcons('show')} onMouseLeave={() => showSocialIcons('hide')}>
                      <img className='img-about1' src={about1} alt="" />
                      <ul id='socialicons' >
                        <li><a href="https://www.facebook.com/" target="_blank"rel="noreferrer"><div className="social-icons"><FiFacebook /></div></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"rel="noreferrer"><div className="social-icons"><AiOutlineInstagram/></div></a></li>
                        <li><a href="https://twitter.com/?lang=en-in" target="_blank"rel="noreferrer"><div className="social-icons"><RiTwitterLine /></div></a></li>
                        <li><a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><div className="social-icons"><FiLinkedin /></div></a></li>
                      </ul>
                    </div>
                  </div>
                </center>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;