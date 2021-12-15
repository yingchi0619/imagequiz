import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import './index.scss';

function Login(props) {
    let toSignUp = function(){
        props.history.push({
            pathname: '/signUp'
        });
    };
    let toListPage = function(){
        props.history.push({
            pathname: '/list'
        });
    };
    return (
        <div className="login-wrap">
            <div className="login-box">
                <div className="logo">LOGO</div>
                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/*<Form.Label>Email address</Form.Label>*/}
                        <Form.Control type="text" placeholder="Phone"/>
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/*<Form.Label>Password</Form.Label>*/}
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="button" onClick={toListPage}>
                            Log In
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
