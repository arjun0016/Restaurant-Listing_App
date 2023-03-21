import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestlistAction} from '../actions/restlistAction'
import { useDispatch, useSelector } from 'react-redux';


function Restlist() {

        const[AllRestaurant,setAllRestaurant]= useState([])

        const getRestaurants=async()=>{
            await fetch('./restaurants.json')
            .then((data)=>{
                data.json()
                .then((result)=>{
                    console.log(result);
                    setAllRestaurant(result.restaurants)
                })
            })
        }
        console.log(AllRestaurant);

        const dispatch = useDispatch()
        const result= useSelector(state=>state.restaurantReducer)
        console.log(result);
        const {restaurantList}=result;


        useEffect(()=>{
            // getRestaurants()
            dispatch(RestlistAction())

        },[])
  return (
    
    <Row>{
        
        restaurantList?.map((item)=>(
            <Restcard  restaurant={item}/>
            // <h2>{item.name}</h2>
        ))
        
        }</Row>
  )
}

export default Restlist