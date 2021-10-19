import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Home = () => {




    return (
        <>
            <img id="homePicture" src='/images/matter.png' alt="" />
            <homeDiv>
                <h1 class="homeText1">if you need instant help, check these resources now! </h1>
            </homeDiv>

            <Container>
                <Row>
                    {/* col 1  */}
                    <Col xs={6} md={4}>
                        <Card border="primary" style={{ width: '20rem' }} >
                            <Card.Header>Emergency Medical Services (EMS)</Card.Header>
                            <Card.Body>
                                <Card.Title>911</Card.Title>
                                <Card.Text>
                                    If the situation is potentially life-threatening, get immediate emergency assistance by calling 911,
                                    available 24 hours a day.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* col 2  */}
                    <Col xs={6} md={4}>
                        <Card border="primary" style={{ width: '20rem' }} >
                            <Card.Header>National Suicide Prevention Helpline</Card.Header>
                            <Card.Body>
                                <Card.Title>1-800-273-8255 (TALK)</Card.Title>
                                <Card.Text>

                                    Trained crisis workers are available to talk 24 hours a day, 7 days a week. Your confidential and toll-free call goes to the nearest crisis center in the Lifeline national network. These centers provide crisis counseling and mental health referrals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* col 3  */}
                    <Col xs={6} md={4}>
                        <Card border="primary" style={{ width: '20rem' }}>
                            <Card.Header>SAMHSA Treatment Referral Helpline</Card.Header>
                            <Card.Body>
                                <Card.Title>1-877-726-4727</Card.Title>
                                <Card.Text>
                                    Get general information on mental health and locate treatment services in your area. Speak to a live person, Monday through Friday from 8 a.m. to 8 p.m. EST.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <div>
                <h1 id = "mission">Mission:</h1>
                <p id = "missionP">
                    "Aim is to make all South Asian people who are struggling with 
                    mental health feel at ease and safe here. As a south asian person, I understand
                    the struggle and how little our mental healths are prioritized."
                 
                </p>
          
            </div>

        </>

    )
}

export default Home
