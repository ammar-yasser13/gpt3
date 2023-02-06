import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import blog1 from '../assets/images/blog01.png'
import blog2 from '../assets/images/blog02.png'
import blog3 from '../assets/images/blog03.png'
import blog4 from '../assets/images/blog04.png'
import blog5 from '../assets/images/blog05.png'
const Blog = () => {
    const articles = [
        {
            img: blog1,
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
        },
        {
            img: blog2,
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
        },
        {
            img: blog3,
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
        },
        {
            img: blog4,
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
        },
        {
            img: blog5,
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
        },
    ]
  return (
    <div className='blog my-5'>
        <Container className='d-flex flex-column justify-content-center align-items-center text-center text-lg-start'>
            <h2 className='mb-5'>A lot is happening,<br/>We are blogging about it.</h2>
            <Row className='articles '>
                {/* Articles */}
                {
                    articles.map((article , index) => (
                        <Col key={index} xs={12} md={12/2} lg={12/3} className="mb-5">
                            <Card key={index}>
                                <Card.Img variant="top" src={article.img} />
                                <Card.Body>
                                    <p>Sep 26, 2021</p>
                                    <Card.Title>{article.title}</Card.Title>
                                    <a href="/">Read Full Article</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </div>
  )
}

export default Blog