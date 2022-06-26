// import React from 'react';
// import google from '../../../images/social/google-logo.png';
// import github from '../../../images/social/github-logo.png';
// import './SocialLogin.css';
// import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';

// const SocialLogin = () => {
//     const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
//     const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
//     if (googleUser || githubUser) {
//         console.log(googleUser || githubUser);
//     }
//     if (googleError || githubError) {
//         console.log(googleError || githubError)
//     }
//     return (
//         <div>
//             <div className="row">
//                 <div className="col"><hr /></div>
//                 <div className="col-auto">or</div>
//                 <div className="col"><hr /></div>
//             </div>
//             <p className='text-center fw-bold'>continue with</p>
//             <div className='social-logo-container py-2 bg-light'>
//                 <div className='d-flex justify-content-center'>
//                     <button
//                         onClick={() => signInWithGoogle()}
//                         className='border-0 bg-transparent social-button'>
//                         <img src={google} alt="google" />
//                     </button>
//                     <button
//                         onClick={() => signInWithGithub()}
//                         className='border-0 bg-transparent social-button'>
//                         <img src={github} alt="google" />
//                     </button>
//                 </div>
//                 {
//                     (googleLoading || githubLoading) && <h6 className='text-center text-warning fw-bold small-text pt-1'>Loading...</h6>
//                 }
//             </div>
//             {
//                 (googleError || githubError) && <h6 className='text-danger small-text text-center fw-bold'>Error: {googleError?.message || githubError?.message}</h6>
//             }
//         </div>
//     );
// };

// export default SocialLogin;