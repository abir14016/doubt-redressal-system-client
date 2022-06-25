import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    if (emailUser) {
        console.log(emailUser)
    }
    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name, photoURL: data.photo });
    };
    return (
        <div>
            <PageTitle title="Register"></PageTitle>
            <div className='py-5'>
                <h2 className='text-center text-primary pb-4'>Please Register</h2>
                <div className='form-container mx-auto shadow-lg p-5'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className='fw-bold'>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Name"
                                autoComplete='off'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                })}
                            />
                            {errors.name?.type === 'required' && <Form.Text className="text-danger fw-bold">
                                {errors.name.message}
                            </Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>Email address</Form.Label>
                            <Form.Control
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

                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label className='fw-bold'>Photo URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Photo URL"
                                autoComplete='off'
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: 'photo is required'
                                    }
                                })}
                            />
                            {errors.photo?.type === 'required' && <Form.Text className="text-danger fw-bold">
                                {errors.name.message}
                            </Form.Text>}
                        </Form.Group>

                        <h6 className='fw-bold small-text'>Already have an account? <Link to="/login" className='text-decoration-none text-link'>Please Login</Link></h6>

                        {
                            emailLoading && <Loading></Loading>
                        }
                        {
                            emailError && <h6 className='text-danger small-text fw-bold'>{emailError.message}</h6>
                        }

                        <div className='text-center'>
                            <Button className='px-5' variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </Form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;