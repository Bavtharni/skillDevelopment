import React from 'react';
import career from "../images/career.png";
import career1 from "../images/career1.jpg";
import { AiFillStar } from 'react-icons/ai';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <div className="fullwidth-container">
        <div className="row">
          <div className="col-12" style={{height: "60vh"}}>
            <center className="career-heading"><h1>Careers</h1></center>
            <img className="career-top" src={career} alt=""/>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <h1 className="career-subhead">Recommended Job:</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-head">
                <img className="career1 career-img" src={career1} alt=""/>
                <div className="career-card-button">
                  <center><label style={{width:"70px"}}> full time </label></center>
                </div>
                <p className="card-heading">Web Designer</p>
                <div className="icon-p">
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                </div>
              </div>
              <div className="card-body">
                  <center><h1 style={{fontWeight:'normal'}}>CircleCi</h1></center>
                  <center><a href="/Careers" style={{textDecoration:'None'}}><HiOutlineLocationMarker/>San Francisco</a></center>
                  <ul class="list-items">
                    <li>2 Year Expirence</li> 
                    <li>Working Hours- 6hr</li>
                    <li>Information strategy</li>
                  </ul>
                  <Link to="/CareerDetails" className="btn btn-outline-primary" style={{width:'360px'}}>Apply Now</Link>
              </div>
            </div>
            
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-head">
                <img className="career1 career-img" src={career1} alt=""/>
                <div className="career-card-button">
                  <center><label style={{width:"70px"}}> full time </label></center>
                </div>
                <p className="card-heading">Web Designer</p>
                <div className="icon-p">
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                </div>
              </div>
              <div className="card-body">
                  <center><h1 style={{fontWeight:'normal'}}>CircleCi</h1></center>
                  <center><a href="/Careers" style={{textDecoration:'None'}}><HiOutlineLocationMarker/>San Francisco</a></center>
                  <ul class="list-items">
                    <li>2 Year Expirence</li> 
                    <li>Working Hours- 6hr</li>
                    <li>Information strategy</li>
                  </ul>
                  <Link to="/CareerDetails" className="btn btn-outline-primary" style={{width:'360px'}}>Apply Now</Link>
              </div>
            </div>
            
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-head">
                <img className="career1 career-img" src={career1} alt=""/>
                <div className="career-card-button1">
                  <center><label style={{width:"70px"}}> part time </label></center>
                </div>
                <p className="card-heading">Web Designer</p>
                <div className="icon-p">
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                </div>
              </div>
              <div className="card-body">
                  <center><h1 style={{fontWeight:'normal'}}>CircleCi</h1></center>
                  <center><a href="/Careers" style={{textDecoration:'None'}}><HiOutlineLocationMarker/>San Francisco</a></center>
                  <ul class="list-items">
                    <li>2 Year Expirence</li> 
                    <li>Working Hours- 6hr</li>
                    <li>Information strategy</li>
                  </ul>
                  <Link to="/CareerDetails" className="btn btn-outline-primary" style={{width:'360px'}}>Apply Now</Link>
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-head">
                <img className="career1 career-img" src={career1} alt=""/>
                <div className="career-card-button1">
                  <center><label style={{width:"70px"}}> Part time </label></center>
                </div>
                <p className="card-heading">Web Designer</p>
                <div className="icon-p">
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                </div>
              </div>
              <div className="card-body">
                  <center><h1 style={{fontWeight:'normal'}}>CircleCi</h1></center>
                  <center><a href="/Careers" style={{textDecoration:'None'}}><HiOutlineLocationMarker/>San Francisco</a></center>
                  <ul class="list-items">
                    <li>2 Year Expirence</li> 
                    <li>Working Hours- 6hr</li>
                    <li>Information strategy</li>
                  </ul>
                  <Link to="/CareerDetails" className="btn btn-outline-primary" style={{width:'360px'}}>Apply Now</Link>
              </div>
            </div>
            
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-head">
                <img className="career1 career-img" src={career1} alt=""/>
                <div className="career-card-button">
                  <label>full-time</label>
                </div>
                <p className="card-heading">Web Designer</p>
                <div className="icon-p">
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                </div>
              </div>
              <div className="card-body">
                  <center><h1 style={{fontWeight:'normal'}}>CircleCi</h1></center>
                  <center><a href="/Careers" style={{textDecoration:'None'}}><HiOutlineLocationMarker/>San Francisco</a></center>
                  <ul class="list-items">
                    <li>2 Year Expirence</li> 
                    <li>Working Hours- 6hr</li>
                    <li>Information strategy</li>
                  </ul>
                  <Link to="/CareerDetails" className="btn btn-outline-primary" style={{width:'360px'}}>Apply Now</Link>
              </div>
            </div>
            
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-head">
                <img className="career1 career-img" src={career1} alt=""/>
                <div className="career-card-button">
                  <label>full-time</label>
                </div>
                <p className="card-heading">Web Designer</p>
                <div className="icon-p">
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                  <AiFillStar className="text-warning"/>
                </div>
              </div>
              <div className="card-body">
                  <center><h1 style={{fontWeight:'normal'}}>CircleCi</h1></center>
                  <center><a href="/Careers" style={{textDecoration:'None'}}><HiOutlineLocationMarker/>San Francisco</a></center>
                  <ul class="list-items">
                    <li>2 Year Expirence</li> 
                    <li>Working Hours- 6hr</li>
                    <li>Information strategy</li>
                  </ul>
                  <Link to="/CareerDetails" className="btn btn-outline-primary" style={{width:'360px'}}>Apply Now</Link>
              </div>
            </div>            
          </div>
        </div>
      </div>
    
    </>

  );
};

export default Careers;