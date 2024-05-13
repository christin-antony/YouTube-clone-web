import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "./image/1.jpg";

const Loginmain = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email == "admin@123" && password == "admin") {
      navigate('/add');
    } else {
      alert("Please enter valid email and password.");
    }
  };

  return (
    <div>
  
    <div className="container-xxl position-relative bg-white d-flex p-0">

      {/* Sign In Start */}
      <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{"min-height":"100vh"}}>
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <a href="index.html" className>
                  <h3 className="text-primary"> <img src={image1} className="logo" alt="" /></h3>
                </a>
                <h3>Sign In</h3>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <a href>Forgot Password</a>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={handleLogin}>Sign In</button>
              <p className="text-center mb-0">Don't have an Account? <a href>Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* Sign In End */}
    </div>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
  </div>
  );
};

export default Loginmain;
