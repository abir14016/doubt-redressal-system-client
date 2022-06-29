import React from 'react';
import UseDoubts from '../../Hooks/UseDoubts';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SolveDoubt from '../SolveDoubt/SolveDoubt';

const SolveDoubts = () => {
    const [doubts] = UseDoubts();
    const unsolvedDoubts = doubts.filter(doubt => doubt.solution === '');
    return (
        <div className='container mt-5'>
            <PageTitle title="solve-doubts"></PageTitle>
            <h2 className='mb-4'>Solve Doubts</h2>
            {
                unsolvedDoubts.length > 1 ? <p className='fw-bold small-text'>{unsolvedDoubts.length} unsolved doubts</p> :
                    <p className='fw-bold small-text'>{unsolvedDoubts.length} unsolved doubt</p>
            }
            {
                unsolvedDoubts.map(unsolveDoubt => <SolveDoubt
                    key={unsolveDoubt._id}
                    unsolveDoubt={unsolveDoubt}
                ></SolveDoubt>)
            }
        </div>
    );
};

export default SolveDoubts;