import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WhatGpt3 = () => {
    let cards = [
        {
            title: "Chatbots",
            text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
        },
        {
            title: "Knowledgebase",
            text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
        },
        {
            title: "Education",
            text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
        },
    ]
  return (
    <div id="what-is-gpt" className='whatIsGpt my-5 py-5'>
        <Container>
            <div className="banner d-flex flex-column align-items-streatch justify-content-center">
                <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-lg-start align-items-stretch text-center text-lg-start">
                    <h3 className=''>What is GPT-3</h3>
                    <p className=''>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-lg-start align-items-stretch text-center text-lg-start">
                    <h2 className=''>The possibilities are beyond your imagination</h2>
                    <a className=' text-decoration-none' href='/'>Explore The Library</a>
                </div>
                <Row className='cards'>
                    {
                        cards.map((card, index) => (
                            <Col xs={12} key={index} lg={12/3} className='d-flex gap-lg-2 mt-5 flex-column justify-content-center justify-content-lg-between align-items-streatch text-center text-lg-start'>
                                <h3 className=''>{card.title}</h3>
                                <p>{card.text}</p>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default WhatGpt3