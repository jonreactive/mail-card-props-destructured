import React, { Component } from 'react';
import ReturnAdress from './ReturnAdress';
import DestinationAdress from './DestinationAdress';
import './mailcard.css';
import { Card, CardImg, CardText, CardBody,Input,
  CardTitle, CardSubtitle, Row, Col, Container, Button, CardGroup } from 'reactstrap';

  let mailInfo = {
    returnAdress: {
      lineOne: "349 Knickerbocker ave",
      lineTwo: "Apt 2R",
      lineThree: "Brooklyn, NY 11237"
    },
    destinationAdress: {
      lineOne: "1625 Putanam ave",
      lineTwo: "Apt 9R",
      lineThree: "Queens, NY 11837"
    }
  };  

class MailCard extends Component {
  render() {
    return (
      <Container className="card-container">
        <Card className="card">      
          <Row>
            <Col xs="6" sm="4">
              <ReturnAdress mailInfo = {mailInfo} />  
            </Col>
            
            <Col xs="6" sm="4">
              <CardBody>
                <DestinationAdress mailInfo = {mailInfo} />
              </CardBody>
            </Col>
            
            <Col sm="4">
              <CardBody>
                <CardText className="stamp"></CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>        
      </Container>
    )
  }
}





export default MailCard;