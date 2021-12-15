import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import './style.scss';
function SignUp(props){
    let toLogin = function(){
        props.history.push({
            pathname: '/login'
        });
    };
    return(
        <div className="sign-up-wrap">
            <div className="sign-up-box">
                <Form className="sign-form">
                    <Form.Group className="mb-3" controlId="formBasicUser">
                        {/*<Form.Label>Email address</Form.Label>*/}
                        <Form.Control type="text" placeholder="User Name"/>
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>
                    <Form.Group className="mb-3">

                        <Form.Check
                            inline
                            name="sex"
                            type="radio"
                            label="man"
                            id="man"
                        />
                        <Form.Check
                            inline
                            name="sex"
                            type="radio"
                            label="woman"
                            id="woman"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/*<Form.Label>Email address</Form.Label>*/}
                        <Form.Control type="text" placeholder="Password"/>
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEnterPassword">
                        {/*<Form.Label>Email address</Form.Label>*/}
                        <Form.Control type="text" placeholder="Enter Password"/>
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        {/*<Form.Label>Email address</Form.Label>*/}
                        <Form.Control type="text" placeholder="Phone"/>
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicVer">
                        {/*<Form.Label>Password</Form.Label>*/}
                        <Row>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="verification"/>
                            </Col>
                            <Col sm={3}>
                                <Button variant="primary" type="button">
                                    GET
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="button">
                            Sign Up
                        </Button>
                    </div>
                    <div className="form-bottom">
                        <p>There is an account?<b onClick={toLogin}>Log In Now!</b></p>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default SignUp;
