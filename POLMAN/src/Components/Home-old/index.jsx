import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home1 from "../images/home1.png";
import Home2 from "../images/home2.png";

const Home = () => {
    return (
        <>
            <section>
              <div className='fullwidth-container'>
                  <div class="row">
                      <div class="col-12">
                          <div className='img-text'>
                              <h1>Precision in <br /> perfection</h1>
                              <center><button className='btn btn-secondary bg-b p-2'>Know More</button></center>
                          </div>
                          <img className='img' src={Home1} alt="" />
                      </div>
                  </div>
              </div>
            </section>
            
            <section>
              <div className='fullwidth-container'>
                  <div class="row">
                      <div class="col-12">
                      <div className='img-text1'>
                              <h1>Next Gen <br />automation</h1>
                              <button className='btn btn-secondary bg-b p-2'>Know More</button>
                          </div>
                          <img className='img' src={Home2} alt="" />
                      </div>
                  </div>
              </div>
            </section>
        </>
    );
};

export default Home;