import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";


import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../store/features/filterSlice';
import { handleStyle } from '../../store/features/filterSlice';
import LoginPage from './LoginPage';

import logo from "../../assets/images/vrslogo2.png";

const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [nav, setNav] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };

    const changeCategory = (category) => {
        dispatch(handleCategory(category));
        navigate('/shop')
    };
    const changeStyle = (style) => {
        dispatch(handleStyle(style));
        navigate('/shop')
    };


    const closeHamburger = () => {
        setNav(false);
        setHamburger(true)
    };

    const openHamburger = () => {
        setNav(true);
        setHamburger(false)
    };

    const toggleLogin = () => {
        setShowLogin(!showLogin); // Toggle the login form visibility
    };
    const navigateToLogin = () =>{
        navigate("/LoginPage");
    };
    
    const handleLogout = () => {
        // Remove the JWT token and user data on logout
        localStorage.removeItem('token');
        setUser(null);
        setIsLoggedIn(false);
        navigate('/');
    };

    useEffect(() => {
      // Fetch user details from the server using the JWT token
      const token = localStorage.getItem('token');
      if (token) {
        fetch('https://ct2-be.onrender.com/getUserDetails', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUser(data);
            setIsLoggedIn(true); // User is logged in
          })
          .catch((error) => {
            console.error('Error fetching user details:', error);
          });
      }
    }, []);
    return (
        <header className='bg-grey'>
            <div className="page-container">
                <div className="header-content">
                    <div className="header-left">
                        <Link to="/">
                            {/* Add the logo */}
                            <img src={logo} alt="Logo" style={{ width:'70px',height:'90px',marginRight:'10px' }} />

                            <button className='clean-button' style={{ marginRight: '5px' }}>
                                {/* <FiHome />  */}
                                
                                Home
                            </button></Link>
                            {/* <button className='clean-button' onClick={() => { changeCategory("All") }} style={{ marginRight: '10px' }}> All Plants</button> */}
                            <button className='clean-button' onClick={() => { changeCategory("Ring") }} style={{ marginRight: '10px' }}>Rings</button>
                            <button className='clean-button' onClick={() => { changeCategory("Chain") }} style={{ marginRight: '10px' }}>Chain</button>
                            <button className='clean-button' onClick={() => { changeCategory("Bracclet") }} style={{ marginRight: '10px' }}>Bracclet</button>
                            <button className='clean-button' onClick={() => { changeCategory("Earring") }} style={{ marginRight: '10px' }}>Earring</button>
                            <button className='clean-button' onClick={() => { changeStyle("kids") }}>Kids</button>
                           {/* <button className='clean-button' onClick={() => { changeStyle("adaa") }}>Adaa</button>*/}
                        
                    </div>
                    <div className="header-right">
                       {/* <p className='price'>₹{getTotalPrice()}.00</p>*/}
                        <div className='cart'>
                            <Link to="/cart"><HiShoppingCart /></Link>
                            <p className='cart-quantity'>{getTotalQuantity()}</p>
                        </div>
                       
                        <br></br>
                       
                        {isLoggedIn ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <button onClick={navigateToLogin}>Login</button>
                        )}
                    </div>
                </div>
            </div>
            <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                {/* <li><button className='clean-button' onClick={() => { changeCategory("All"); closeHamburger() }}>All Plants</button></li> */}
                <li><button className='clean-button' onClick={() => { changeCategory("Ring"); closeHamburger() }}>Ring</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Chain"); closeHamburger() }}>Chain</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Bracclet"); closeHamburger() }}>Bracclet</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Earring"); closeHamburger() }}>Earring</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("kids"); closeHamburger() }}>kids</button></li>
                <div>
                {user && (
        <div>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here */}
        </div>
      )}</div>
            </ul>
            <br></br>
            {showLogin && <LoginPage />}
        </header>
    )
}

export default Header;

