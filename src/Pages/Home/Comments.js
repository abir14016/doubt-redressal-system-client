import React from 'react';

const Comments = ({ comment, comments }) => {
    return (
        <div className='mb-3'>
            <div className='comment-container px-2 pt-3'>
                <p className='fw-bold'><small>{comment.commenter}: {comment.comment}</small></p>
            </div>
        </div>
    );
};

export default Comments;