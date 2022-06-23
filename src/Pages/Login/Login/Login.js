import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div>
            <PageTitle title="Login"></PageTitle>
            <div className='py-5'>
                <h2 className='text-center text-primary pb-4'>Please Login</h2>
                <div className='form-container mx-auto shadow-lg p-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" autoComplete='off' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" autoComplete='off' />
                        </Form.Group>

                        <h6 className='fw-bold small-text'>new to XetGo Solver? <Link to="/register" className='text-decoration-none text-link'>Please Register</Link></h6>
                        <h6 className='fw-bold small-text'>Forgot password? <span className='text-decoration-none text-link' role="button">Reset Password</span></h6>

                        <div className='text-center'>
                            <Button className='px-5' variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;