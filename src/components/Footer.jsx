import React from 'react'
import {Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className=''>
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <p className='text-center p-0 m-0'>© 2021 GPT-3. All rights reserved.</p>
        </Container>
    </footer>
  )
}

export default Footer