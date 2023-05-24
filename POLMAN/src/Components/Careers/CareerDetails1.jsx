import React from 'react';
import career from "../images/career.png";
import { HiOutlineLocationMarker } from 'react-icons/hi';
// import { AiOutlineClockCircle } from 'react-icons/ai';
// import { FaMoneyBillWave } from 'react-icons/fa';
import { Link } from "react-router-dom";


const CareerDetails1=()=>{
    return(
        <>
        
            <div className="container mt-5">
                <div className="row">
                    {/* <div className="col-12" style={{height: "60vh"}}>
                        <center className="career-heading"><h1>Careers</h1></center>
                        <img className="career-top" src={career} alt=""/>
                    </div> */}
                    <div>
                        <h2 className='mb-2' style={{right:"50px"}}> We believe in you. </h2>
                        <h2 class="slide-left">Apply now.</h2>                                                                                                                                                      
                    </div>
                </div> 
            </div>
            <div className='container mt-4'>
                <div className="card careersubbox">
                     <Link to="/CareerDetails"> <h5 className='style'>Konstruktionsleiter Verpackungsmaschinen Prozessautomation (m/w/d)</h5></Link>

                   
                    <div style={{display:"flex"}}>
                        <HiOutlineLocationMarker/><span>Bad Feilnbach,</span><span className="text-muted">Germany</span>
                    </div>
                    <div className="career-card-button">
                        <span style={{cursor:"pointer"}} className="jobweight bg-soft-primary">Fulltime</span>
                    </div>
                    <div className="career-card-button1">
                        <span style={{cursor:"pointer"}} className="jobweight bg-soft-warning">Office</span>
                    </div>
                        
                </div>
            </div>
            <div className='container mt-4'>
                <div className="card careersubbox">
                    <h5>Job 2</h5>
                    <div style={{display:"flex"}}>
                        <HiOutlineLocationMarker/><span>Bad Feilnbach,</span><span className="text-muted">Germany</span>
                    </div>
                    <div className="career-card-button">
                        <span style={{cursor:"pointer"}} className="jobweight bg-soft-primary">Fulltime</span>
                    </div>
                    <div className="career-card-button1">
                        <span  style={{cursor:"pointer"}} className="jobweight bg-soft-warning">Office</span>
                    </div>
                        
                </div>
            </div>
            <div className='container mt-4'>
                <div className="card careersubbox">
                    <h5>Job 3</h5>
                    <div style={{display:"flex"}}>
                        <HiOutlineLocationMarker/><span>Bad Feilnbach,</span><span className="text-muted">Germany</span>
                    </div>
                    <div className="career-card-button">
                        <span style={{cursor:"pointer"}}className=" bg-soft-primary jobweight">Fulltime</span>
                    </div>
                    <div className="career-card-button1">
                        <span style={{cursor:"pointer"}} className=" bg-soft-warning jobweight">Office</span>
                    </div>
                        
                </div>
            </div>
            <div className='container mt-4'>
                <div className="card careersubbox">
                    <h5>Job 4</h5>
                    <div style={{display:"flex"}}>
                        <HiOutlineLocationMarker/><span>Bad Feilnbach,</span><span className="text-muted">Germany</span>
                    </div>
                    <div className="career-card-button">
                        <span style={{cursor:"pointer"}} className=" bg-soft-primary jobweight">Fulltime</span>
                    </div>
                    <div className="career-card-button1">
                        <span style={{cursor:"pointer"}} className=" bg-soft-warning jobweight">Office</span>
                    </div>
                        
                </div>
            </div>
            <div className='container mt-4'>
                <div className="card careersubbox">
                    <h5>Job 5</h5>
                    <div style={{display:"flex"}}>
                        <HiOutlineLocationMarker/><span>Bad Feilnbach,</span><span className="text-muted">Germany</span>
                    </div>
                    <div className="career-card-button">
                        <span  style={{cursor:"pointer"}} className="jobweight bg-soft-primary">Fulltime</span>
                    </div>
                    <div className="career-card-button1">
                        <span style={{cursor:"pointer"}} className="jobweight bg-soft-warning">Office</span>
                    </div>
                        
                </div>
            </div>
            <div className='container mt-4'>
                <div className="card careersubbox">
                    <h5>Initiative Application</h5>
                    <div style={{display:"flex"}}>
                        <HiOutlineLocationMarker/><span>Bad Feilnbach,</span><span className="text-muted">Germany</span>
                    </div>
                    <div className="career-card-button">
                        <span style={{cursor:"pointer"}} className=" bg-soft-primary jobweight">Fulltime</span>
                    </div>
                    <div className="career-card-button1">
                        <span style={{cursor:"pointer"}} className=" bg-soft-warning jobweight" >Office</span>
                    </div>
                        
                </div>
            </div>
        </>             
);
};
export default CareerDetails1;
{/* <span><label style={{width:"70px"}}> full time </label><br/> </span>
                        <span><label style={{width:"70px"}}> part time </label></span>                     */}
                          {/* <AiOutlineClockCircle/><span>8hr/perday</span> */}
                        {/* <FaMoneyBillWave/><span>30k-35k</span> */}
    