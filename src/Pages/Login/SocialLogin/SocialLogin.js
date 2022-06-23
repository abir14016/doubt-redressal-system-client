import React from 'react';
import google from '../../../images/social/google-logo.png';
import github from '../../../images/social/github-logo.png';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className="row">
                <div className="col"><hr /></div>
                <div className="col-auto">or</div>
                <div className="col"><hr /></div>
            </div>
            <div className='social-logo-container d-flex justify-content-center py-2'>
                <button className='border-0 bg-transparent social-button'>
                    <img src={google} alt="google" />
                </button>
                <button className='border-0 bg-transparent social-button'>
                    <img src={github} alt="google" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;