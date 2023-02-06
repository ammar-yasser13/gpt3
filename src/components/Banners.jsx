import React from 'react'
import { Container } from 'react-bootstrap'
import imgGoogle from '../assets/images/google.png'
import imgSlack from '../assets/images/slack.png'
import imgAtlassian from '../assets/images/atlassian.png'
import imgDropbox from '../assets/images/dropbox.png'
import imgShopify from '../assets/images/shopify.png'
const Banners = () => {
    let images = [
        {
            alt: "google",
            src: imgGoogle,
        },
        {
            alt: "slack",
            src: imgSlack,
        },
        {
            alt: "atllassian",
            src: imgAtlassian,
        },
        {
            alt: "dropbox",
            src: imgDropbox,
        },
        {
            alt: "shopify",
            src: imgShopify,
        },
    ];
  return (
    <div className='banners mt-5 pt-lg-5'>
        <Container className='d-flex flex-column flex-md-row align-items-center justify-content-center gap-5'>
            {
                images.map((image, key) => (
                    <img key={key} src={image.src} alt={image.alt} />
                ))
            }
        </Container>
    </div>
  )
}

export default Banners