// import React, { Component } from 'react';
// import './SignupPage.scss'; // Import your CSS file for styling
// import { Link } from 'react-router-dom';



// class SignupPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//       password1: '', // Fixed the name for password confirmation
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     // You can perform form validation here
//     if (this.state.password !== this.state.password1) {
//       alert("Passwords do not match");
//       return;
//     }

//     // Show the alert box
//     alert('Successfully completed');

//     console.log(this.state);
//   };

//   render() {
//     return (
      
//       <div className='cont'>
//         <div className="signup-container"><br />
//           <h2 className="signup-heading">Create an Account</h2>
//           <form onSubmit={this.handleSubmit} className="signup-form">
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.handleInputChange}
//                 required
//                 className="input-field"
//               />
//             {/* </div>
//             <div className="form-group"> */}
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleInputChange}
//                 required
//                 className="input-field"
//               />
//             {/* </div>
//             <div className="form-group"> */}
//               <label htmlFor="password">Set Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 required
//                 className="input-field"
//               />
//             {/* </div>
            

//             <div className="form-group"> */}
//               <label htmlFor="password1">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="password1"
//                 name="password1"
//                 value={this.state.password1}
//                 onChange={this.handleInputChange}
//                 required
//                 className="input-field"
//               />
//             {/* </div>
//             <div className="form-group"> */}
//               <center><br></br><button type="submit" className="signup-button"><center>
//                 SignUp</center>
//               </button></center>
//             </div>
//           </form>
//           <p className="signup-info">
//             Already have an account? <Link to="/LoginPage">Click to Login</Link>.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignupPage;
// signup.js
import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
//import loginImage from './signup.jpg'; // Import your login image
import "./SignupPage.scss";

function SignUpPage() {
  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '' || contactNumber === '') {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('https://ct2-be.onrender.com/jewel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            contactNumber,
          }),
        });
  
        if (response.ok) {
          navigate('/LoginPage');
        } else {
          const data = await response.json();
          console.error('Server response:', data); // Log the error response to the console
          alert('An error occurred during registration: ' + data.message); // Display the server's error message
        }
      } catch (error) {
        console.error('Client error:', error); // Log any unhandled exceptions to the console
        alert('An error occurred during registration: ' + error.message); // Display a generic error message
      }
    }
  };
  //const backgroundImageUrl='https://img.freepik.com/premium-photo/modern-loft-empty-living-room-interior-design-black-pattern-wall-background_221619-1792.jpg?w=1060';
  
  return (
    
    
   
    <div className="sign"style={{
      //backgroundImage: `url(${backgroundImageUrl})`, // Set the online image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <div className="login-container">
      <div className="signup-content">
        <div className="login-form">
          <h2>Create your account</h2>
         
          <form onSubmit={handleSignup} >
            <div className="form-group">
            <input
                    type="text"
                    id="username"
                    name="username" required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
            </div>
            <div className="form-group">
            <input
                    type="email"
                    id="email"
                    name="email" required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
            </div>
            <div className="form-group">
            <input
                    type="password"
                    id="password"
                    name="password" required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
            </div>
           <div className="form-group phone-input">
            <input type="text" value="91+" disabled />
            <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                   
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
          </div>
          <button type="submit">Sign Up</button><br/><br/>
          Already have a account? <Link to='/LoginPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Login</Link>
          </form>
        </div>
        {/* <div className="sign-image">
          <img src={loginImage} alt="Login" />
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default SignUpPage;

