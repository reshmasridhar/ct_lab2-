import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [flat, setFlat] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [building, setBuilding] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          country,
          mobileNumber,
          pinCode,
          flat,
          houseNo,
          building,
          area,
          landmark,
        }),
      });

      if (response.ok) {
        console.log("User details saved successfully!");
        alert('Submit successful!'); // Updated alert message
        // You can redirect the user to a different page after successful login
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="form-box">
          <h1 className="text-center">CheckOut</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="floatingInput">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="floatingPassword display-4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                {/* Additional inputs */}
                <div className="my-3">
                  <label htmlFor="country">Country/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Country/Region"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="pinCode">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pinCode"
                    placeholder="Pin Code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="flat">Flat</label>
                  <input
                    type="text"
                    className="form-control"
                    id="flat"
                    placeholder="Flat"
                    value={flat}
                    onChange={(e) => setFlat(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="houseNo">House No.</label>
                  <input
                    type="text"
                    className="form-control"
                    id="houseNo"
                    placeholder="House No."
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="building">Building/Company/Apartment</label>
                  <input
                    type="text"
                    className="form-control"
                    id="building"
                    placeholder="Building/Company/Apartment"
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="area">Area/Street/Sector/Village</label>
                  <input
                    type="text"
                    className="form-control"
                    id="area"
                    placeholder="Area/Street/Sector/Village"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    type="text"
                    className="form-control"
                    id="landmark"
                    placeholder="Landmark"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <p>
                    New Here?{" "}
                    <Link
                      to="/SignupPage"
                      className="text-decoration-underline text-info"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </div>
                <div className="text-center">
                  <button
                    className="my-2 mx-auto btn btn-dark"
                    type="submit"
                  >
                    Submit Details
                  </button>
                </div>
                <div><Link to="/PaymentPage" ><center><button
                    className="my-2 mx-auto btn btn-dark"
                    type="submit">Payment</button></center></Link></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
