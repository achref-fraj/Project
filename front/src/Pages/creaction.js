import { useState } from "react";
import "./Css/signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [forum, setForum] = useState({});
  const navigate = useNavigate()
  const handleState = (event, key) => {
    setForum({ ...forum, [key]: event.target.value });
  };// see how jwt (json web token) works and localstorage works
  // see how private routes in react 
  // if the user already signed he can directly access to the home page and hide the icon login 
  // show the icon sign 
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
       await axios.post(process.env.REACT_APP_API_URL + "/users/register",forum );
     navigate("/login")
       // to do: navigate to the homepage 
    } catch (error) {
      console.log(error.response.data.statusCode);
      if (error.response.data.statusCode == 409) {
          alert(error.response.data.message)
    }
  }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {/* Form Title */}
        <h1>Sign Up</h1>
        <form>
          {/* Name Input Field */}
          <div className="input-group">
            <label htmlFor="name" className="user-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              className="input"
              required
              onChange={(e) => handleState(e, "name")}
            />
          </div>
          {/* Email Input Field */}
          <div className="input-group">
            <label htmlFor="email" className="user-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              className="input"
              required
              onChange={(e) => handleState(e, "email")}
            />
          </div>
          {/* Password Input Field */}
          <div className="input-group">
            <label htmlFor="password" className="user-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              className="input"
              required
              onChange={(e) => handleState(e, "password")}
            />
          </div>
          {/* Submit Button */}
          <button  onClick={handleSubmit}>Sign Up</button>
          {/* Login Link */}

          <p className="loginsignup-login">
            Already have an account?{" "}
            <Link to="/login">
              <span>Log In here</span>{" "}
            </Link>
          </p>

          {/* Terms and Conditions Checkbox */}
          <div className="loginsignup-agree">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              I agree to the terms of use & privacy policy.
            </label>
          </div>
        </form>
      </div>
      {/* Illustrative Image */}
      <img
        src="https://pbs.twimg.com/media/GAlulF5a0AAMQkP?format=jpg&name=4096x4096"
        alt="Illustration"
        className="form-image"
      />
    </div>
  );
};

export default SignUp;
