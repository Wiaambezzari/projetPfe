import React, {useState} from 'react';
import ContactFont from '../assets/contact.jpg';
import {Form, Button, Row, Col} from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const hundleSubmit = async (event)=>{
    event.preventDefault();
    try {
      const response = await fetch('/api/form',{
        method:'POST',
        headers:{'Content-Type':'Application-Json'},
        body: JSON.stringify({firstname,lastname,email,objet,message}),
      });
      const data = await response.json();
      console.log(data);
      alert('votre message a ete bien envoye')
    }
    catch(error) {
      console.log(error);
      alert('reessayer encore')
    }
  }
  return (
    <div>
     <img src={ContactFont} style={{width:'100%', height:'100vh'}}/>
     <center>
        <span className='contact'>
            <h2><b> Contact us</b></h2> <br />
            <Form onSubmit={hundleSubmit}>
            <Row>
              <Col>
                <Form.Control placeholder="First name" value={firstname}
                onChange={e=>setFirstname(e.target.value)}/>
              </Col>
              <Col>
                <Form.Control placeholder="Last name" value={lastname}
                onChange={e=>setLastname(e.target.value)}/>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><b>Email address</b></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={email}
                onChange={e=>setEmail(e.target.value)} />
                <Form.Label><b>Objet</b></Form.Label>
                <Form.Control type="text" value={objet}
                onChange={e=>setObjet(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><b>Message</b></Form.Label>
                <Form.Control as="textarea" value={message}
                onChange={e=>setMessage(e.target.value)} rows={3} />
            </Form.Group>

            </Form>  
            <Button type='submit' variant="primary">Send</Button>
        </span>
      
        </center>
    </div>
  )
}

export default Contact
