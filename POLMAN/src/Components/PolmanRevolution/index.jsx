import React from 'react';

import qloop from "../images/qloop.png";


const polmanRevolution= () => {
  return (
    <div className='pb-42'> 
      <center><h1><b>The Polman Revolution</b></h1>
      <div className="qloop">
        <img src={qloop} alt="img"/>
      </div>
      <p className='pr-p'>From the visionary minds at Polman GmbH arrives the latest cutting-edge <br />robotic automation technology - QLOOP®</p>
    
      <p className='footerfont pt-5'>We are here to rewrite the rules of the game with our high production speeds, zero downtimes, energy efficiency and modular designs. It’s one of most <br/>compact in the market making it a great space-saver.<br/>
Ready to take the automation industry by storm, QLOOP®is highly customizable, scalable, flexible and will adapt to your specific stacking, sorting,<br/> palletizing, depalletizing, production, handling, assembly and packaging needs. All at one place!</p>
      <h1 style={{color:"black"}}>How did we do it?</h1>
      <p className='footerfont'>
      We at Polman understand that the traditional approach of mimicking human movements has reached its limitations. QLOOP®is based on the principle of <br/> the driven block chain operating at incredibly high speeds of 3 meters/second. Electrics, pneumatics, and data links are all allocated to each chain link.<br/> 
Workpieces and products can be loaded and processed, or transported, sorted, stacked, packed, palletized, or tested in a consistently rapid in-line process <br/> at every step of your production line.<br/> 
Continuous operation, Extraordinary speed, Highly adaptive, Flexible, Low Maintenance and Energy Efficient – These are the words that we associate with <br/> QLOOP®.
Improving productivity by leaps and boundsand no idle times, cycle count restrictions or bottlenecks.<br/> 
With QLOOP® we help you today to solve the problems of the future.<br/> 
      </p>
      </center>
    </div>  
    
  );
};

export default polmanRevolution;

