import React from 'react';
// import { HiOutlineMail,HiOutlineLocationMarker } from 'react-icons/hi';
// import { BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { BiMessageRounded } from 'react-icons/bi';


const Jobapply=()=>{
  return(
    <>
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
          <label>Description</label>
          < FiBook className="icon"/>                        
          <input type="text" className="form-control" style={{paddingLeft:"65px"}}  placeholder="Your Text Here"/> 
        </div>
        <div className="col-md-12 wrapper">
          <label>Comments <span class="text-danger">*</span></label>
          < BiMessageRounded className="icon"/>                        
          <input type="text" className="form-control" style={{paddingLeft:"65px"}}  placeholder="Message"/> 
        </div>
        <div className="col-md-12 wrapper applysubmit">
          <button className="bg-primary form-control" type="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>  
</form>
</> 
);
};
export  default Jobapply;