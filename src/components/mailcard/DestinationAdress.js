import React from 'react';
import './mailcard.css';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,Input,
  CardTitle, CardSubtitle, Row, Col, Container, Button, CardGroup } from 'reactstrap';


const DestinationAdress = ( {mailInfo} ) => {
  return (
  <CardBody className="middle-card-text">   
    <CardSubtitle>{mailInfo.destinationAdress.lineOne}</CardSubtitle>
    <CardSubtitle>{mailInfo.destinationAdress.lineTwo}</CardSubtitle>
    <CardSubtitle>{mailInfo.destinationAdress.lineThree}</CardSubtitle>
  </CardBody>   
  )
}

DestinationAdress.propTypes ={
  returnAdress: PropTypes.shape({
    
  })
}


export default DestinationAdress;