import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function Header() {
  return (
    <Navbar bg="warning" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/2727/2727399.png"
          width="50"
          height="50"
          className="d-inline-block "
        />{' '}
        <span className='heading'>Restaurant</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header