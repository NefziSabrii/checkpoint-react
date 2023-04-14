import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
        <Form.Control type='text' placeholder="Your First Name" />
        <Form.Text className="text-muted"></Form.Text> 
        <Form.Label>Second Name</Form.Label>
        <Form.Control type='text' placeholder="Your Second Name" />
        <Form.Label>Your Birthday</Form.Label>
        <Form.Control type='date' placeholder="Birthday" />

        <Form.Text className="text-muted"></Form.Text> 
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Label>Repeat Your Password</Form.Label>
        <Form.Control type="password" placeholder="Repeat Password" />
      </Form.Group>
      <div className='check'>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>  
      <Button variant="primary" type="submit">
      Sign Up
      </Button>
    </Form>
      
    </div>
  );
}

export default App;
