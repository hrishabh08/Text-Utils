import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';


export default function Navbar(props) {
  return (
  


  <div class="topnav">
  
     
       <a className="active" href="/"><b>{props.title}</b></a>
       <a href="/">Home</a>
       <a href="/about">About</a>
     
       
    
  </div>
      
 
     
  )
}
Navbar.prototype ={
   title : PropTypes.string,
   aboutus : PropTypes.string,
}

Navbar.defaultProps ={
    title : "Text default",
}