import React from 'react';
import UseDoubts from '../../Hooks/UseDoubts';
import Doubt from './Doubt';

const Doubts = () => {
    const [doubts, setDoubts] = UseDoubts();
    return (
        <div>
            <p className='text-end fw-bold'><small>doubts: {doubts.length}</small></p>
            <>
                {
                    doubts.map(doubt => <Doubt
                        key={doubt._id}
                        doubt={doubt}
                    ></Doubt>)
                }
            </>
        </div>
    );
};

export default Doubts;