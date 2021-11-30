import { Form, Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return(
        <div>
            <Form className="d-flex flex-column align-item-center justify-content-center text-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="w-50 mx-auto" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="d-flex flex- align-item-center justify-content-around text-center my-4 background">
            <SocialIcon network="linkedin" className="my-auto" />
            <SocialIcon network="twitter" className="my-auto" />
            <SocialIcon network="github" className="my-auto" />
            </div>
        </div>
    )
}

export default Contact;