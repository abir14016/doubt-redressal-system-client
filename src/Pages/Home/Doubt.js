import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UseComments from '../../Hooks/UseComments';
import Loading from '../Shared/Loading/Loading';
import Comments from './Comments';
import './Doubt.css';

const Doubt = ({ doubt }) => {
    // const [comments, setComments] = UseComments(doubt._id);


    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        data.commenter = user.displayName;
        data.postId = doubt._id;
        axios.post(`http://localhost:5000/comment`, data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success("comment successfull");
                    refetch();
                }
            })
    }

    const { data: comments, isLoading, refetch } = useQuery(['postId', doubt._id], () => fetch(`http://localhost:5000/comment/${doubt._id}`, {
        method: 'GET',
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='doubt-container'>
            <div className='p-3'>
                <div className='d-flex justify-content-between mb-3'>
                    <h5>{doubt.title}</h5>
                    {
                        doubt.solver && <div className='px-5 resolved-button'>Resolved</div>
                    }
                </div>
                <h6>{doubt.details}</h6>
                <p className='text-end small-text fw-bold'><small>Asked By: {doubt.poster} On {doubt.postMoment}</small></p>
            </div>

            <hr className='custom-hr' />

            <div>
                {
                    doubt.solver && <div className='px-3'>
                        <p>Answer: {doubt.solution} <br />
                            <span className='small-text fw-bold'>Answered By {doubt.solver} on {doubt.solveMoment}</span></p>
                    </div>
                }
            </div>

            <div className='px-3'>
                {
                    comments?.length > 1 ? <p className='fw-bold'><small>{comments?.length} comments</small></p> : <p className='fw-bold'><small>{comments?.length} comment</small></p>
                }
                {
                    comments.map(comment => <Comments
                        key={comment._id}
                        comment={comment}
                        comments={comments}
                    ></Comments>)
                }
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


//62b863c315b17205141c8764