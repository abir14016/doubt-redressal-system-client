import React from 'react';
import './NotFound.css';
import notFoundImage from '../../../images/utilities/not-found-pag.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='container d-flex align-items-center justify-content-center'>
                <div className='notfound-img d-block ml-5'>
                    <img src={notFoundImage} alt="" />
                </div>
                <div className='mx-auto text-center not-found-title'>
                    <h1 className='text-white font-size text-center'>404</h1>
                    <h5 className='text-center'>Sorry, we can't find that page! Don't worry though, everything is STILL AWESOME!</h5>
                    <Link to='/'>
                        <button className='back-btn mt-2'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;