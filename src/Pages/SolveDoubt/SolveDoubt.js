import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SolveDoubt.css';

const SolveDoubt = ({ unsolveDoubt }) => {
    const navigate = useNavigate();
    const handleAccept = id => {
        navigate(`/doubt/${id}`);
    }
    return (
        <div className='d-flex justify-content-between unsolve-doubt p-3 my-3'>
            <h5>{unsolveDoubt.title}</h5>
            <div className='me-5'>
                <Button
                    variant="outline-primary"
                    onClick={() => handleAccept(unsolveDoubt._id)}
                    className='fw-bold'>
                    Accept
                </Button>
            </div>
        </div>
    );
};

export default SolveDoubt;