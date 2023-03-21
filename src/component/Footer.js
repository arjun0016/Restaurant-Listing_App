import React from 'react'
import Card from 'react-bootstrap/Card';
// import {MDBContainer,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>  <Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Kochi</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
    {/* <MDBContainer className='pt-4'>
        
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>
      </MDBContainer> */}
    <Card.Footer className="text-black">© 2023 Copyright: MDBootstrap.com</Card.Footer>
  </Card></div>
  )
}

export default Footer