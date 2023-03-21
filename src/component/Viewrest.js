import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {

  const urlparams=useParams()
  // console.log(urlparams)
  console.log(urlparams.id);

  const[AllRestaurant,setAllRestaurant]= useState([])

        const getRestaurants=async()=>{
            await fetch('/restaurants.json')
            .then((data)=>{
                data.json()
                .then((result)=>{
                    // console.log(result);
                    setAllRestaurant(result.restaurants)
                })
            })
        }
        console.log(AllRestaurant);
        useEffect(()=>{
            getRestaurants()
        },[])

const viewrest=AllRestaurant.find(item=>item.id==urlparams.id)
console.log(viewrest);



  return (
    <>{
      viewrest?(
      <Row>
        <Col className='m-2'  md={3}>
        <Image src={viewrest.photograph} fluid/>
        </Col>
        <Col md={7}>
    <ListGroup className='mt-5' variant="flush">
      <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
      <ListGroup.Item><h4>{viewrest.cuisine_type}</h4></ListGroup.Item>
      <ListGroup.Item><h5>{viewrest.neighborhood}</h5></ListGroup.Item>
      <ListGroup.Item><h6>{viewrest.address}</h6></ListGroup.Item>

      <ListGroup.Item><Restop operate={viewrest.operating_hours}/></ListGroup.Item>
    <Restreview review={viewrest.reviews}/>
      


      
    </ListGroup>
        
        </Col>

    </Row>
    ):'null'
     }
    </>

   
    
  )
}


export default Viewrest