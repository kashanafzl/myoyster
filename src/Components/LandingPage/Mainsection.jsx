import React, { useState } from 'react'
import './Mainsection.css'
import Navbar from './Navbar'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mainsectionimg from '../../Assets/Img/mainsectionimg.svg'
import Popupnav from './Popupnav1/Popupnav';
import Popupnav2 from './Popupnav2/Popupnav2';
import Popupnav3 from './Popupnav3/Popupnav3';



export default function Mainsection() {

    const [showbox, setShowbox] = useState(false);
    const [showbox2, setShowbox2] = useState(false);
    const [showbox3, setShowbox3] = useState(false);

    return (
        <div>
            <Navbar showbox={showbox} setShowbox={setShowbox} showbox2={showbox2} setShowbox2={setShowbox2} showbox3={showbox3} setShowbox3={setShowbox3} />
            {showbox && <Popupnav />}

            {showbox2 && <Popupnav2/>}
            {showbox3 && <Popupnav3 />}

            <Container fluid>
                <Row>

                    <Col lg={6} md={12} sm={12}  >

                        <div className='leftsideofmainsection'>
                            <h5>AUTOMATED GLOBAL EMPLOYMENT PLATFROM</h5>
                            <h1>Hire talent in <br />
                                180+ countries</h1>
                            <p>Hire, pay, reward, and manage talent compliantly <br />
                                without setting up an entity. Access deep local <br />
                                intelligence to win talent and stay competitive, fill <br />
                                new roles fast and expand to new markets in days.</p>

                            <button>Book a Demo</button>
                            <button id='signupfreebtn'>Sign up for free</button>

                            <div className='mainsectionparadiv'>
                                <p>G2’s Leader in global employment platforms</p>
                                <p>90% customer satisfaction rare</p>
                            </div>

                        </div>

                    </Col>

                    <Col lg={6} md={12} sm={12}  >

                        <div className='rightsideofmainsection'>
                            <img src={mainsectionimg} alt="" />
                        </div>
                    </Col>



                </Row>

            </Container>

            <Container fluid>
                <Row>

                    <div className='seconddsection'>
                        <div>
                            <h1>
                                What’s possible with Oyster? <br />
                                All of this:
                            </h1>

                            <p>Found a brilliant sales manager in Germany flag Germany?
                            A dev in Indian Flag  India ? A designer in Spanish Flag Spain ? <br />
                            Use Oyster to handpick your all-star team and provide the same five-star experience to them all.</p>

                        </div>
                    </div>


                </Row>


                <Container fluid>
                <Row>

                    <Col lg={6} md={12} sm={12}  >
                   
                     
                    </Col>

                    <Col lg={6} md={12} sm={12}  >

                    </Col>



                </Row>

            </Container>


            </Container>


       


        </div>
    )
}
