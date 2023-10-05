import React, { useContext } from 'react';
import Navbar from './../shared/navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { userSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // create user
    const handleSigninUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userSignin(email, password)
            .then(res => {
                toast.success('Login successfully.');
                navigate(location?.state ? location.state : '/');
            }
            )
            .catch(err => toast.warning('Failed to login'));
    }
    return (
        <div className='bg-[#F3F3F3]'>
            <div >
                <div className='max-w-6xl mx-auto'>
                    <Navbar />
                </div>
                <div className='flex flex-col items-center justify-center h-[100vh]'>
                    <div className=' bg-[#FFF] w-2/5 mx-auto p-12 rounded'>
                        <div className='pb-10 mb-6 border-b'>
                            <h1 className='text-center text-3xl text-[#403F3F] font-semibold'>Login your account</h1>
                        </div>
                        <form onSubmit={handleSigninUser}>
                            <label className='text-[#403F3F] font-semibold text-[1.1rem]' htmlFor="email">Email address</label>
                            <input className='w-full border p-2 my-2 rounded bg-[#F3F3F3]' placeholder='Enter your email address' type="email" name='email' /><br></br>
                            <label className='text-[#403F3F] font-semibold text-[1.1rem]' htmlFor="password">Password</label>
                            <input className='w-full border p-2 my-2 rounded bg-[#F3F3F3]' placeholder='Enter your password' type="password" name='password' /><br></br>
                            <input className='text-white bg-[#403F3F] text-xl font-semibold rounded w-full py-2 mt-4' type="submit" value="Login" />
                        </form>
                        <div className='text-center pt-6 text-[1rem] font-semibold'>
                            <p>Dont’t Have An Account ? <Link className='text-red-600' to={'/register'}>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;