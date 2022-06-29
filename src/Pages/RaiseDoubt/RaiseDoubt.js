import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useForm } from "react-hook-form";
import './RaiseDoubt.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import date from 'date-and-time';
import axios from 'axios';
import { toast } from 'react-toastify';

const RaiseDoubt = () => {
    const pattern = date.compile('MMM D, h:m A');
    const postMoment = date.format(new Date(), pattern);
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user.email
        data.poster = user.displayName;
        data.postMoment = postMoment;
        data.solution = "";
        axios.post(`http://localhost:5000/doubt`, data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    reset();
                    toast.success("Doubet Raised");
                }
            })
    };

    return (
        <div>
            <PageTitle title="raise-doubt"></PageTitle>
            <div className='mt-5 container'>
                <h2 className='mb-4'>Raise Doubt</h2>
                <div className='form-container w-100 mx-auto shadow-lg p-5'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label className='fw-bold mb-1'>Title</Form.Label>
                            <Form.Control
                                className='input-field'
                                type="text"
                                placeholder="Title"
                                autoComplete='off'
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'title is required'
                                    }
                                })}
                            />
                            {errors.title?.type === 'required' && <Form.Text className="text-danger small-text fw-bold">
                                {errors.title.message}
                            </Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label className='fw-bold mb-1'>Description</Form.Label>
                            <Form.Control
                                className='input-field'
                                type="text"
                                placeholder="Description"
                                autoComplete='off'
                                {...register("details", {
                                    required: {
                                        value: true,
                                        message: 'description is required'
                                    }
                                })}
                            />
                            {errors.description?.type === 'required' && <Form.Text className="text-danger small-text fw-bold">
                                {errors.details.message}
                            </Form.Text>}
                        </Form.Group>


                        <div className='text-end'>
                            <Button className='px-5' variant="primary" type="submit">
                                Ask Doubt
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default RaiseDoubt;