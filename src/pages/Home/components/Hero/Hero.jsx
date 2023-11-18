import React from 'react';
import "./hero.scss";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';



const Hero = () => {
    const navigate = useNavigate()
    return (
        <div data-aos="zoom-in" className="hero page-container mb-4">
            <div className="hero-content">
            <Carousel autoPlay
    interval={3000} // Set the interval to 3000 milliseconds (3 seconds)
    infiniteLoop={true}
    stopOnHover={false} // Allow auto-play to continue when hovering
    showArrows={false}
    showStatus={false}
    showThumbs={false}>
      <div>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/10_OCT/AppBanner/Festive/iconicbanner/2x.webp" alt="jewel1" />
      </div>
      <div>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/AppBanner/Newin/01/1X.jpg" alt="jewel1" />
      </div>
      <div>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/10_OCT/AppBanner/Festive/festivegifts/2x.webp" alt="jewel2" />
      </div>
      <div>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/10_OCT/AppBanner/Newin/02/1XB.jpg" alt="jewel3" />
      </div>
      <div>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/10_OCT/HPBanner/NewArrival/1X.jpg" alt="jewel3" />
      </div>
    </Carousel>
                
            </div>
        </div>
    )
}

export default Hero;