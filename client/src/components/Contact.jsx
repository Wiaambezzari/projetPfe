import React from 'react';
import ContactFont from '../assets/contact.jpg';
import {Form, Button, Row, Col} from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div>
     <img src={ContactFont} style={{width:'100%', height:'100vh'}}/>
     <center>
        <span className='contact'>
            <h2><b> Contact us</b></h2> <br />
            <Form>
            <Row>
              <Col>
                <Form.Control placeholder="First name"/>
              </Col>
              <Col>
                <Form.Control placeholder="Last name"/>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><b>Email address</b></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Label><b>Objet</b></Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><b>Message</b></Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            </Form>  
            <Button variant="primary">Send</Button>
        </span>
      
        </center>
    </div>
  )
}

export default Contact
