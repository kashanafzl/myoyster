import React, { useState } from "react";
import './Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import loginimg from '../../Assets/Img/Loginimg.svg'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={4} md={12} sm={12} >
            <div className='signinimgdiv'>
              <img src={loginimg} alt="loginimg" />
            </div>
          </Col>
          <Col lg={8} md={12} sm={12} >
            <div className='signinrightdiv'>
              <h3>Sign in</h3>
              <p>Need an account? Sign up</p>
              <div className='formdiv'>
                <label>Email</label>
                <div>
                  <input type="text" placeholder='Enter your email' />
                </div>
                <label id='passworddiv'>Password</label>
                <div className='passworddiv'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your Password'
                  />
                  <Icon
                    onClick={togglePasswordVisibility}
                    className='notviewicon'
                    icon={showPassword ? "carbon:view" : "carbon:view-off"}
                  />
                </div>
              </div>
              <div className='checkboxdiv'>
                <div>
                  <input type="checkbox" />
                  <small>Remember me</small>
                </div>
                <span>Forgot your password?</span>
              </div>
              <div className='signinbtn'>
                <button>Sign in</button>
              </div>
              <div className='ordiv'>
                <p>Or</p>
              </div>
              <div className='gooleinbtn'>
                <button>Sign in Google</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
