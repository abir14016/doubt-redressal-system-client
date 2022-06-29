import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseComments from '../../Hooks/UseComments';
import { useForm } from "react-hook-form";
import Comments from '../Home/Comments';
import './SolveSingleDoubt.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import date from 'date-and-time';
import { toast } from 'react-toastify';

const SolveSingleDoubt = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { doubtId } = useParams();
    const [doubt, setDoubt] = useState({});
    useEffect(() => {
        fetch(`https://safe-mountain-18279.herokuapp.com/doubt/${doubtId}`)
            .then(res => res.json())
            .then(result => setDoubt(result))
    }, [doubtId]);

    const [comments] = UseComments(doubtId);
    const [user] = useAuthState(auth);

    const pattern = date.compile('MMM D, h:m A');
    const solveMoment = date.format(new Date(), pattern);

    const onSubmit = data => {
        data.solver = user.displayName;
        data.solveMoment = solveMoment;
        const url = `https://safe-mountain-18279.herokuapp.com/doubt/${doubtId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    toast.success("Answered Successfully");
                }

            })
    }

    return (
        <div className='container mt-5'>
            <h2>Solve Doubt : <span className='text-primary'><small>{doubt.title}</small></span></h2>
            <div className='solve-answer-container'>
                <div className='doubt-container'>
                    <div className='p-3'>
                        <h5>{doubt.title}</h5>
                        <h6 className='small-text fw-bold'>{doubt.details}</h6>
                        <p className='text-end small-text fw-bold text-secondary'><small>Asked By: {doubt.poster} On {doubt.postMoment}</small></p>
                    </div>
                    <hr className='custom-hr' />
                    <div className='p-3'>
                        {
                            comments?.length ? <p className='fw-bold'><small>{comments?.length} comments</small></p> : <p className='fw-bold'><small>0 comment</small></p>
                        }
                        {
                            comments.map(comment => <Comments
                                key={comment._id}
                                comment={comment}
                                comments={comments}
                            ></Comments>)
                        }
                    </div>
                </div>
                <div className='p-3 answer-container h-50'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="w-100" controlId="formBasicAnswer">
                            <Form.Label className='fw-bold mb-1'>Answer</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Answer"
                                {...register("solution", {
                                    required: {
                                        value: true,
                                        message: 'Plz add an answer'
                                    }
                                })}
                            />
                            {errors.solution?.type === 'required' && <Form.Text className="text-danger small-text fw-bold">
                                {errors.solution.message}
                            </Form.Text>}
                        </Form.Group>
                        <div className="text-end mt-3">
                            <input className='btn btn-primary' type="submit" value="Answer" />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SolveSingleDoubt;