import "./LoginStyle.css";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from '@mui/material/Button';

import user from "../../assets/authAsset/user.png"
import logo from "../../assets/mainLogo/logo.png"



import { UseLogin } from "./UseLogin";
import BtnLoader from "../../commonComponents/BtnLoader";
import { Padding } from "@mui/icons-material";
import SimpleLoader from "../../commonComponents/SimpleLoader";



function Login() {
  const [setInpId, setPassword, ctaLogin, loginLoading, ID, password] =
    UseLogin();


  
  return (
    <>
      <div className="loginMain">
        {/* <h5 className="loginTitle">Login Your Account</h5> */}
        <center>
          <div className="imgDivlogin">
            <img src={logo} className="logoImagelogin" alt="broken-img" />
          </div>
        </center>

        <div className="loginScreen">
          <center>
            <div className="imgDiv2login">
              <img src={user} className="logoImage2login" alt="broken-img" />
            </div>
          </center>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="hl"
          >
            <TextField
              id="standard-basic"
              label="Admin ID"
              variant="standard"
              required
              InputLabelProps={{
                style: { color: "#29ab87" },
              }}
              InputProps={{
                style: { color: "#ffffff" },
              }}
              className="loginInp"
              onChange={(e) => {
                setInpId(e.target.value);
              }}
              value={ID}
            />
            <br />

            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              required
              type={"password"}
              InputLabelProps={{
                style: { color: "#29ab87" },
              }}
              InputProps={{
                style: { color: "#ffffff" },
              }}
              className="loginInp"
              onChange={(e) => {
                setPassword(e.target.value);
                e.preventDefault();
              }}
              value={password}
            />

            {/* <br /> */}
            {/* <NavLink exact to="/dashboard" className="activeClassName"> */}
            <div className="loginForgotPass"></div>
            <br />
            {/* <p className="loginForgotPass">Forgot Your Password?</p> */}
            {/* </NavLink> */}
            {/* <br /> */}
            {/* <NavLink exact to="/dash" className="activeClassName"> */}

            {loginLoading ? (
              <Button className="loginButtonLoader" >
                <BtnLoader size={40} color={"black"} />
                {/* <SimpleLoader size={20} color={"white"} /> */}
              </Button>
            ) : (
              <Button className="loginButton" onClick={ctaLogin} >
                Login
              </Button>
            )}

            {/* </NavLink> */}
          </Box>
        </div>
      </div>
    </>
  );
}
export default Login;
