import React from 'react';
import Card1 from "../images/about.jpg";
import Card2 from "../images/about1.png";
import Card3 from "../images/about.jpg";
import Card4 from "../images/about.jpg";
import Card5 from "../images/about1.png";
import Card6 from "../images/about.jpg";
import Card7 from "../images/about.jpg";
import Card8 from "../images/about1.png";
import Card9 from "../images/about.jpg";

function showImg(id, action) {
  if(action === 'show'){
    document.getElementById("img"+id).style.display = "block";
    document.getElementById("imgDesc"+id).style.display = "block";
  } else {
    document.getElementById("img"+id).style.display = "none";
    document.getElementById("imgDesc"+id).style.display = "none";
  }
}

function redirectPage() {
  window.location.href="./ProductDetails";
}


const Products= () => {
  return (
    <div className="container">
        <div className="row product-space">
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product darkblue p-4 mt-4 c1" onMouseEnter={() => showImg(1, 'show')} onMouseLeave={() => showImg(1, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title1">QGP</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card1} alt="img" id="img1"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#07346f"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product darkblue p-4 mt-4 c1" onMouseEnter={() => showImg(2, 'show')} onMouseLeave={() => showImg(2, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title1">QGH</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card2} alt="img" id="img2"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#07346f"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product darkblue p-4 mt-4 c1" onMouseEnter={() => showImg(3, 'show')} onMouseLeave={() => showImg(3, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title1">QGC</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card3} alt="img" id="img3"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#07346f"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product litegreen p-4 mt-4 c1" onMouseEnter={() => showImg(4, 'show')} onMouseLeave={() => showImg(4, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title">QL-R</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card4} alt="img" id="img4"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#a6d148"}}></path>
                              </svg>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product litegreen p-4 mt-4 c1" onMouseEnter={() => showImg(5, 'show')} onMouseLeave={() => showImg(5, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title">QL-S</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card5} alt="img" id="img5"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#a6d148"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product litegreen p-4 mt-4 c1" onMouseEnter={() => showImg(6, 'show')} onMouseLeave={() => showImg(6, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title">QL-Ce</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card6} alt="img" id="img6"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#a6d148"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product litegreen p-4 mt-4 c1" onMouseEnter={() => showImg(7, 'show')} onMouseLeave={() => showImg(7, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title">QL-PL</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card7} alt="img" id="img7"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#a6d148"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product litegreen p-4 mt-4 c1" onMouseEnter={() => showImg(8, 'show')} onMouseLeave={() => showImg(8, 'hide')} onClick={redirectPage}> 
                            <div className="card-head">
                              <b className="card-title">QL-PK</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card8} alt="img" id="img8"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#a6d148"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product litegreen p-4 mt-4 c1" onMouseEnter={() => showImg(9, 'show')} onMouseLeave={() => showImg(9, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title">QL-I</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card9} alt="img" id="img9"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#a6d148"}}></path>
                              </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 card-center" >
                        <div className="card card-product litegreen p-4 mt-4 c1" onMouseEnter={() => showImg(10, 'show')} onMouseLeave={() => showImg(4, 'hide')} onClick={redirectPage}>
                            <div className="card-head">
                              <b className="card-title">QL-C</b>
                            </div>
                            <div className="card-body">
                              <img className="img-p" src={Card4} alt="img" id="img4"/>
                            </div>
                            <div class="curve">
                              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                                  <path d="M166.13,151.48 C334.87,196.88 461.85,118.91 504.74,-18.25 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#a6d148"}}></path>
                              </svg>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
              <div className='row imgDescRow' id="imgDesc1" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 1</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc2" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 2</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc3" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 3</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc4" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 4</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc5" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 5</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc6" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 6</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc7" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 7</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc8" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 8</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc9" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 9</p>
                </div>
              </div>
              <div className='row imgDescRow' id="imgDesc10" style={{display:"none"}}>
                <div className='col-12 card-lite'>
                  <p>Some Desc 10</p>
                </div>
              </div>
            </div>
        </div>
    </div>  
  );
};

export default Products;