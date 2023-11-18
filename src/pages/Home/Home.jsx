import React from 'react';
import Hero from './components/Hero/Hero';
import HomeCollection from './components/HomeCollection/HomeCollection';
import HomeSale from './components/HomeSale/HomeSale';
import HomeServices from './components/HomeServices/HomeServices';
import HomeProducts from './components/HomeProducts/HomeProducts';
import Testimonials from './components/Testimonials/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';


const Home = () => {
    return (
        <div className="home">
            <br />
            <Hero />
            <HomeCollection />
            <br></br>
          
            <HomeServices />
            
            <AboutUs/>
            <HomeProducts />
            <Testimonials />
        </div>
    )
}

export default Home;