import React from "react";
import image from "./contact.png"

const Contact = () =>{
    return (
        <>
        
        <div className="container-fluid">
          <div className="row contact">
            <div className="col-10 mx-auto">
               <div className="row">

                  <div className="col-md-6 animation">
                    <img src={image} alt="contact"  />
                  </div>
  
                   <div className="col-md-5 form">
                   <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" required/>

                        <label for="exampleFormControlInput1" class="form-label">Contact</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" required/>

                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"/>
                    
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                        <button className="btn btn-primary mt-4 py-2 px-5"> Submit </button>

                        </div>
                   </div> 

               </div>
            </div> 
          </div>
        </div>

        </>
    );
};

export default Contact;