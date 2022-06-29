import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useAuthState, useSendPasswordResetEmail, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/social/google-logo.png';
import github from '../../../images/social/github-logo.png';
import '../SocialLogin/SocialLogin.css';
import UseUser from '../../../Hooks/UseUser';
import UseToken from '../../../Hooks/UseToken';
import UseUsers from '../../../Hooks/UseUsers';

const Login = () => {
    const [loggedInUser] = useAuthState(auth);
    const [users] = UseUsers();
    // console.log(users?.length);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);



    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const [token] = UseToken(googleUser || githubUser || emailUser);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loggedInUser) {
        const selectedUser = users.find(user => user.email === loggedInUser?.email);
        if (selectedUser?.role) {
            navigate(from, { replace: true });
        }
        if (!selectedUser?.role) {
            navigate('/updaterole');
        }
    }

    if (token) {
        // navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    };


    return (
        <div>
            <PageTitle title="Login"></PageTitle>
            <div className='py-5'>
                <h2 className='text-center text-primary pb-4'>Please Login</h2>
                <div className='form-container mx-auto shadow-lg p-5'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Email address</Form.Label>
                            <Form.Control
                                className='input-field'
                                type="email"
                                placeholder="Enter email"
                                autoComplete='off'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            {errors.email?.type === 'required' && <Form.Text className="text-danger fw-bold">
                                {errors.email.message}
                            </Form.Text>}

                            {errors.email?.type === 'pattern' && <Form.Text className="text-danger fw-bold">
                                {errors.email.message}
                            </Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <Form.Control
                                className='input-field'
                                type="password"
                                placeholder="Password"
                                autoComplete='off'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: 'password must contain at least one number and letter'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'password must be 8 character or longer'
                                    }
                                })}
                            />
                            {errors.password?.type === 'required' && <Form.Text className="text-danger fw-bold">
                                {errors.password.message}
                            </Form.Text>}

                            {errors.password?.type === 'pattern' && <Form.Text className="text-danger fw-bold">
                                {errors.password.message}
                            </Form.Text>}

                            {errors.password?.type === 'minLength' && <Form.Text className="text-danger fw-bold">
                                {errors.password.message}
                            </Form.Text>}
                        </Form.Group>

                        <h6 className='fw-bold small-text'>new to XetGo Solver? <Link to="/register" className='text-decoration-none text-link'>Please Register</Link></h6>

                        {
                            emailLoading && <Loading></Loading>
                        }

                        {
                            emailError && <h6 className='text-danger small-text fw-bold'>{emailError.message}</h6>
                        }

                        <div className='text-center'>
                            <Button className='px-5' variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                    {/* <SocialLogin></SocialLogin> */}

                    <div>
                        <div className="row">
                            <div className="col"><hr /></div>
                            <div className="col-auto">or</div>
                            <div className="col"><hr /></div>
                        </div>
                        <p className='text-center fw-bold'>continue with</p>
                        <div className='social-logo-container py-2 bg-light'>
                            <div className='d-flex justify-content-center'>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className='border-0 bg-transparent social-button'>
                                    <img src={google} alt="google" />
                                </button>
                                <button
                                    onClick={() => signInWithGithub()}
                                    className='border-0 bg-transparent social-button'>
                                    <img src={github} alt="google" />
                                </button>
                            </div>
                            {
                                (googleLoading || githubLoading) && <h6 className='text-center text-warning fw-bold small-text pt-1'>Loading...</h6>
                            }
                        </div>
                        {
                            (googleError || githubError) && <h6 className='text-danger small-text text-center fw-bold'>Error: {googleError?.message || githubError?.message}</h6>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;