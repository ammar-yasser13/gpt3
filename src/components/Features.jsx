import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import imageFeature from '../assets/images/possibility.png'
const Features = () => {
    const cards = [
        {
            title: "Improving end distrusts instantly ",
            text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
        },
        {
            title: "Become the tended active",
            text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
        },
        {
            title: "Message or am nothing",
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
        },
        {
            title: "Really boy law county",
            text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
        },
    ]
  return (
    <div className='feature my-5'>
        <Container>
            <Row>
                <Col xs={12} lg={5} className="text-center text-lg-start">
                    <h2 className='mb-5'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                    <a href="/">Request Early Access to Get Started</a>
                </Col>
                <Col xs={12} lg={7}>
                    {/* Cards */}
                    <div className="cards ms-lg-5 mt-5 mt-lg-0 d-flex flex-column justify-content-start align-items-stretch">
                        {
                            cards.map((card,index) => (
                                <div key={index} className='d-flex gap-2 gap-lg-5 flex-column flex-lg-row justify-content-between align-items-start justify-content-center align-items-center text-lg-start text-center'>
                                    <h3 className='w-lg-50'>{card.title}</h3>
                                    <p className='w-lg-50 text-lg-end'>{card.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="my-5">
            <Row className='align-items-center'>
                <Col xs={12} lg={6}>
                    <img src={imageFeature} alt="feature" className='w-100' />
                </Col>
                <Col xs={12} lg={6} className="d-flex mt-5 gap-lg-3 flex-column justify-content-lg-start justify-content-center align-items-stretch text-center text-lg-start">
                    <p className="lead">Request Early Access to Get Started</p>
                    <h2>The possibilities are beyond your imagination</h2>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <a href="/">Request Early Access to Get Started</a>
                </Col>
            </Row>
        </Container>
        <Container className="banner my-5 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center  justify-content-center align-items-stretch text-center text-lg-start">
            <div className="bannerHead">
                <p>Request Early Access to Get Started</p>
                <h2>Register today & start exploring the endless possiblities.</h2>
            </div>
            <Button variant="black">Get Started</Button>
        </Container>
    </div>
  )
}

export default Features