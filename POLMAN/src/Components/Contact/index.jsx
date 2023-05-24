import React from 'react';
import { HiOutlineMail,HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { BiMessageRounded } from 'react-icons/bi';
import icon1 from "../images/2.jpg";
import icon2 from "../images/1.jpg";
import icon3 from "../images/4.png";


const Contact = () => {
  return (
    <>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21455.369926698506!2d12.014288!3d47.76358200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb7f04383794bdcf!2sPolman%20Company!5e0!3m2!1sen!2sin!4v1657632089413!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" ></iframe>
      </div>
      <form action="">
        <div className='row'>
          <div className="col-12 col-md-6 p-4">
            <div className='card p-3'>
              <div className='row'>
                <div className='col-md-6 wrapper'>
                    <label>Your Name <span class="text-danger">*</span></label>
                    <div className='pl-3'>
                      <AiOutlineUser  className="icon" />
                      <input type="text" className="form-control"  style={{paddingLeft:"65px"}} placeholder="Name:"/>
                    </div>
                </div>
                <div className='col-md-6 wrapper'>
                    <label>Your Email <span class="text-danger">*</span></label>
                    <div className='pl-3'>
                      <AiOutlineMail className="icon"/>
                      <input type="email" className="form-control" style={{paddingLeft:"65px"}}  placeholder="Email"/>
                    </div>
                </div>
                <div className="col-md-12 wrapper">
                  <label>Subject</label>
                  < FiBook className="icon"/>                        
                  <input type="text" className="form-control" style={{paddingLeft:"65px"}}  placeholder="subject"/> 
                </div>
                <div className="col-md-12 wrapper">
                  <label>Comments <span class="text-danger">*</span></label>
                  < BiMessageRounded className="icon"/>                        
                  <input type="text" className="form-control" style={{paddingLeft:"65px"}}  placeholder="Message"/> 
                </div>
                <div className="col-md-12 wrapper">
                  <button className="bg-primary form-control" type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
              <h6>CONTACT DETAILS</h6>
              <div className="col-12 desc pb-4">
                <div className="row">
                  <div className="col-12">
                    <div className="icon-parent">
                      <HiOutlineMail className="icons"/>
                      Email
                      <a href="mailto:contact@example.com" class="text-primary">info@polman.de</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="icon-parent">
                      <BsTelephone className="icons"/>
                      Phone
                      <a href="tel:+152534-468-854" class="text-primary">+49 8066 4299 890</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="icon-parent">
                      <HiOutlineLocationMarker className="icons"/>
                      Phone
                      <a href="/Contact" data-type="iframe" class="video-play-icon text-primary lightbox">View on Google map</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>  
      </form> 
      <div className='container pd-5'>
        <div className='row'>
            <div className="col-12 col-md-4 p-4">
              <div className='card p-3'>
                <h4 className='contacthead'><img className="iconimg" src={icon1} alt="img"/> Saudi Arabia</h4>
                <p className='contacthead1'>Polman Company LTD.<br/>P.O.Box 7698, Khurais Branch Road​<br/>Al Nasim Al Gharbi​<br/>14231 Riyad, SAUDI ARABIA</p>
              </div>
            </div>
            <div className="col-12 col-md-4 p-4">
              <div className='card p-3'>
                <h4 className='contacthead'><img className="iconimg" src={icon2} alt="img"/>India</h4>
                <p className='contacthead1'>G1, Indirani Avenue,<br/>Pallaru Street, Thiruthani<br/>Nagar, Old Pallavaram​<br/>Chennai - 625006</p>
              </div>
            </div>    
            <div className="col-12 col-md-4 p-4">
              <div className='card p-3'>
                <h4 className='contacthead'> <img className="iconimg" src={icon3} alt="img"/>Canada</h4>
              </div>
            </div>  
        </div>       
      </div> 
    </>
  );
};

export default Contact;




{/* <div className='container'>
<div className='row'>
  <div className='col-12 col-md-4'>
    <a href="https://www.google.com/maps/@24.7351022,46.7921245,17z?hl=en" style={{textDecoration:"none",textAlign:"center"}}>
      <div className='card'>
        <div className='card-head'>
          <p>Saudi Arabia</p>
        </div>
      </div>
    </a>
  </div>
  <div className='col-12 col-md-4'>
    <a href="https://www.google.com/maps/@13.04908,79.928802,9z?hl=en" style={{textDecoration:"none",textAlign:"center"}}>
        <div className='card'>
          <div className='card-head'>
            <p>Chennai</p>
          </div>
        </div>
    </a>
  </div>
  <div className='col-12 col-md-4'>
    <a href="https://www.google.com/maps/@49.901934,-97.183589,16z?hl=en" style={{textDecoration:"none",textAlign:"center"}}>
      <div className='card'>
        <div className='card-head'>
          <p>canada</p>
        </div>
      </div>
    </a>
  </div>
</div>
</div> */}