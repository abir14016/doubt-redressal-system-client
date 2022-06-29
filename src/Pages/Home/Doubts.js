import React from 'react';
import UseDoubts from '../../Hooks/UseDoubts';
import Doubt from './Doubt';

const Doubts = () => {
    const [doubts, setDoubts] = UseDoubts();
    const reversedDoubt = [...doubts].reverse();

    return (
        <div>
            <p className='text-end fw-bold my-0'><small>{doubts.length} doubts</small></p>
            <>
                {
                    reversedDoubt.map(doubt => <Doubt
                        key={doubt._id}
                        doubt={doubt}
                    ></Doubt>)
                }
            </>
        </div>
    );
};

export default Doubts;