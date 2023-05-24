import React from 'react';
import proddetails from "../images/proddetails.png";
import home1 from "../images/home1.png";


function showData(id) { 
    var Count=document.getElementsByClassName("cardbox").length;
    var Count1=document.getElementsByClassName("datafunc").length;
    for (let i = 1; i <= Count; i++) {
        document.getElementById("cardbox"+i).classList.remove("active1");  
    }
    for (let j = 1; j <= Count1; j++) {
        document.getElementById("Data"+j).style.display = "none";      
    }
    var Count2=document.getElementsByClassName("cardbox-1").length;
    var Count3=document.getElementsByClassName("cardbox-2").length;
    for (let z = 1; z <= Count2; z++) {  
        document.getElementById("cardbox-"+z).classList.remove("active1");
    }
    for (let w = 0; w < Count3; w++) {
        document.getElementById("Data-"+w).style.display = "none";      
    }
    document.getElementById("Data"+id).style.display = "block";
    document.getElementById("Data-0").style.display = "block";
    document.getElementById("cardbox"+id).classList.add("active1"); 

}
function showData1(id){
    var Count2=document.getElementsByClassName("cardbox-1").length;
    var Count3=document.getElementsByClassName("cardbox-2").length;
    for (let z = 1; z <= Count2; z++) {  
        document.getElementById("cardbox-"+z).classList.remove("active1");
    }
    for (let w = 0; w < Count3; w++) {
        document.getElementById("Data-"+w).style.display = "none";            
    }
    document.getElementById("Data-"+id).style.display = "block";
    document.getElementById("cardbox-"+id).classList.add("active1");
}

const ProductDetails=()=>{    
    return(
    <div className='container'>
        <div className='row '>
            <div className='col-3'>
                <div className='card productbox'>
                    <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData(1)}>
                        <div className='card cardbox active1' id="cardbox1">DN 80mm</div>
                    </div>
                    <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData(2)}>
                        <div className='card cardbox' id="cardbox2">DN 125mm</div>
                    </div>
                    <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData(3)}>
                        <div className='card cardbox' id="cardbox3">DN 160mm</div>
                    </div>
                    <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData(4)}>
                        <div className='card cardbox' id="cardbox4">DN 200mm</div>
                    </div>
                    <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData(5)}>
                        <div className='card cardbox' id="cardbox5">DN 250mm</div>
                    </div>
                    <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData(6)}>
                        <div className='card cardbox' id="cardbox6">DN 320mm</div>
                    </div>
                </div>               
            </div>
            <div className='col-3'>
                <div className='card productbox'>
                    <div className="datafunc" id='Data1' style={{display:"none"}}> 
                    <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData1(1)}>
                        <div className="card cardbox-1" id="cardbox-1">Stroke 125mm</div>
                    </div>    
                    </div>
                    <div className="datafunc" id='Data2' style={{display:"none"}}>
                        <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData1(2)}>
                            <div className="card cardbox-1" id="cardbox-2">Stroke 160mm</div>
                        </div>
                    </div>
                    <div className="datafunc"  id='Data3' style={{display:"none"}}>
                        <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData1(3)}>
                            <div className="card cardbox-1"id="cardbox-3">Stroke 200mm</div>
                        </div>
                    </div>
                    <div className="datafunc" id='Data4' style={{display:"none"}}>
                        <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData1(4)}>
                            <div className="card cardbox-1" id="cardbox-4">Stroke 200mm</div>
                        </div>
                    </div>
                    <div className="datafunc" id='Data5' style={{display:"none"}}>
                        <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData1(5)}>
                            <div className="card cardbox-1" id="cardbox-5">Stroke 250mm</div>
                        </div>
                    </div>
                    <div className="datafunc"  id='Data6' style={{display:"none"}}> 
                        <div style={{paddingBottom:"15px",cursor:"pointer"}} onMouseEnter={()=>showData1(6)}>
                            <div className="card cardbox-1" id="cardbox-6">Stroke 250mm</div>
                            <div className="card cardbox-1" id="cardbox-7">Stroke 400mm</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='card productbox'>
                    <div className="cardbox-2"  id='Data-0'> 
                        <img  src={proddetails} alt=""/>
                    </div>
                    <div className="cardbox-2"  id='Data-1' style={{display:"none"}}> 
                        <img className='prodimg' src={home1} alt=""/>
                    </div>
                    <div className="cardbox-2"  id='Data-2' style={{display:"none"}}> 
                        <img className='prodimg' src={home1} alt=""/>
                    </div>
                    <div className="cardbox-2"  id='Data-3' style={{display:"none"}}> 
                        <img className='prodimg' src={home1} alt=""/>
                    </div>
                    <div className="cardbox-2"  id='Data-4' style={{display:"none"}}> 
                        <img className='prodimg' src={home1} alt=""/>
                    </div>
                    <div className="cardbox-2"  id='Data-5' style={{display:"none"}}> 
                        <img className='prodimg' src={home1} alt=""/>
                    </div>
                    <div className="cardbox-2"  id='Data-6' style={{display:"none"}}> 
                        <img className='prodimg' src={home1} alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
};
export default ProductDetails;
