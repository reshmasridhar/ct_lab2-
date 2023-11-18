import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutUs.css';

const AboutUs = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="about-us">
      <center><h1>Our Story</h1></center>
      {showDetails && (
        <div>
          <center><h4>Who we are!</h4></center>
    <p>Sri Mahalakshmi Jewellery was founded in 2001, with the objective to make beautiful jewellery accessible, affordable and forever wearable. After speaking to hundreds of women across the country, we came to find that there was a common dilemma women faced - picking between expensive jewellery for special occasions, and everyday jewellery that was of inferior quality and was not keeping pace with their changing lifestyle. It was founded, to give women access to modern, fine jewellery, that was also wearable everyday.
Today we are the India's largest omni-channel jeweller.</p>

          <center><h4>Our Mission</h4></center>
          <p>Our mission is to make beautiful jewellery accessible. Jewellery that not only makes a woman look beautiful but also make her feel beautiful and loved.
</p>

          <center><h1>Our Promise</h1></center>
          <p><center>We started our company on three simple premises:</center></p>
<p><center>-Our style is relentlessly modern, yet intensely respectful of traditions.</center></p>
<p><center>-We always look for better and newer ways to do things; from the designs that we make to the experiences that we deliver.</center></p>
<p><center>-We are open in our interactions with our customers. Our prices and policies are always transparent.</center>
</p>

        </div>
      )}
      <center><button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'click to know About us'}
      </button></center>
     
    </div>
  );
};

export default AboutUs;
