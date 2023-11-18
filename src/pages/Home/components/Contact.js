import React from "react";

import { BiMailSend, BiPhoneCall,  } from "react-icons/bi";
const Contact = () => {
    const image="https://imgcdn.floweraura.com/cycle-vase-sansevieria-plant-9946747pl-C.jpg.jpg"
  return (
   

      <div className="row contactus mt-4 p-5">
        {/* // Bootstrap Grid System for responsive design */}
        <div className="col-md-6">
          <img
            src={image} 
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>

        {/* // Bootstrap Grid System for responsive design */}
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            <br></br>
            <br></br>
          
            <br></br>
          </p>
          <p className="mt-3">
            <BiMailSend /> : shasmiindoorplants.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9025422321
          </p>
          {/* <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p> */}
        </div>
      </div>
    
  );
};

export default Contact;