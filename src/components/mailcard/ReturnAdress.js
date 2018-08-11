import React from 'react';
import { Card, CardImg, CardText, CardBody,Input,
  CardTitle, CardSubtitle, Row, Col, Container, Button, CardGroup } from 'reactstrap';


const ReturnAdress = ( {mailInfo} ) => {
  
  return (
    <CardBody>  
         <CardSubtitle>{mailInfo.returnAdress.lineOne}</CardSubtitle>
         <CardSubtitle>{mailInfo.returnAdress.lineTwo}</CardSubtitle>
         <CardSubtitle>{mailInfo.returnAdress.lineThree}</CardSubtitle>
    </CardBody>
  )
  
}

export default ReturnAdress; 