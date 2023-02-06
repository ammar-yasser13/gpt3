import { useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import {IoClose, IoMenu} from "react-icons/io5"
import Banners from "./components/Banners"
import Blog from "./components/Blog"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import WhatGpt3 from "./components/WhatGpt3"
function App() {
  const [isShow,setIsShow] = useState(false) 
  const linksNavbar = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "What is GPT?",
      href: "#what-is-gpt",
    },
    {
      text: "Open Ai",
      href: "#open-ai",
    },
    {
      text: "Case Studies",
      href: "#case-studies",
    },
    {
      text: "Library",
      href: "#library",
    },
  ]
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" className="fw-bold me-5">GPT-3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" children={isShow ? <IoClose onClick={() => setIsShow(!isShow)} size={30} color="white"/> : <IoMenu onClick={() => setIsShow(!isShow)} size={30} color="white"/>}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              {
                  linksNavbar.map((link , key) => (
                      <Nav.Link key={key} href={link.href} className="ms-3">{link.text}</Nav.Link>
                  ))
              }
            </Nav>
            {/* buttons */}
            <div className="user d-flex flex-column flex-lg-row justify-content-lg-start align-items-lg-start justify-content-center align-items-stretch gap-3 ms-auto">
              <Button variant="link">Sign in</Button>
              <Button className="btn-primary">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Hero */}
      <Hero />
      {/* Banners */}
      <Banners />
      {/* What Is Gpt3 */}
      <WhatGpt3 />
      {/* Features */}
      <Features />
      {/* Blog */}
      <Blog />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
