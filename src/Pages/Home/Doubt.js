import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Doubt.css';

const Doubt = ({ doubt }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='doubt-container'>
            <div className='p-3'>
                <div className='d-flex justify-content-between mb-3'>
                    <h5>{doubt.title}</h5>
                    <button className='px-5 resolved-button'>Resolved</button>
                </div>
                <h6>{doubt.details}</h6>
                <p className='text-end small-text fw-bold'><small>Asked By: John Doe On Aug 8, 7:37</small></p>
            </div>

            <hr className='custom-hr' />

            <div className='px-3'>
                <p className='fw-bold'><small>2 comments</small></p>
                <div className='comment-container p-2'>
                    <p className='fw-bold'><small>Abir: Make an api then try</small></p>
                </div>
                <div className='my-3'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='d-flex justify-content-between'>
                        <Form.Group className="add-a-comment-input" controlId="formBasicComment">
                            <Form.Control
                                type="text"
                                placeholder="Add a comment"
                                {...register("comment", {
                                    required: {
                                        value: true,
                                        message: 'plz add a valid comment'
                                    }
                                })}
                            />
                        </Form.Group>
                        <input className='comment-button px-3' type="submit" value="Comment" />
                    </Form>
                    {errors.comment?.type === 'required' && <Form.Text className="text-danger small-text fw-bold">
                        {errors.comment.message}
                    </Form.Text>}
                </div>
            </div>
        </div>
    );
};

export default Doubt;