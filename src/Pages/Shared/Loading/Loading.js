import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;