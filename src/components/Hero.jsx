import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import HeroImage from '../assets/images/ai.png'
const Hero = () => {
  return (
    <div className='hero mt-lg-5'>
        <Container>
            <Row>
                <Col lg={6} className="d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center align-items-center text-center text-lg-start ">
                    <h1 className='text-capitalize'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                    <p className='lead my-5'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    {/* Email bar */}
                    <form action="" method="get" className="emailBar">
                        <div className="input-group">
                            <input type="text" name="email" className='inputEmail' placeholder='Your email address'/>
                            <Button variant='primary' className='btn-no-padding'>Get Started</Button>
                        </div>
                    </form>
                </Col>
                <Col lg={6} className="mt-lg-0 mt-5"><img src={HeroImage} alt="hero" className='w-100' /></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero