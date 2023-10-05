import { useContext } from 'react';
import Navbar from '../shared/navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    // create user
    const handleCreateUder = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.url.value;
        const password = e.target.password.value;

        createUser(email,password)
            .then(res => {
                toast.success('Account created successfully.');
                navigate('/signin');
            })
            .catch(err => console.log(err));
        
    }
    return (
        <div className='bg-[#F3F3F3]'>
            <div >
                <div className='max-w-6xl mx-auto'>
                    <Navbar />
                </div>
                <div className='flex flex-col items-center justify-center  mt-8 h-[100vh]'>
                    <div className=' bg-[#FFF] w-2/5 mx-auto p-12 rounded'>
                        <div className='pb-10 mb-6 border-b'>
                            <h1 className='text-center text-3xl text-[#403F3F] font-semibold'>Register your account</h1>
                        </div>
                        <form onSubmit={handleCreateUder}>
                            <label className='text-[#403F3F] font-semibold text-[1.1rem]' htmlFor="name">Your Name</label>
                            <input className='w-full border p-2 my-2 rounded bg-[#F3F3F3]' placeholder='Enter your name' type="text" name='name' /><br></br>
                            <label className='text-[#403F3F] font-semibold text-[1.1rem]' htmlFor="url">Photo URL</label>
                            <input className='w-full border p-2 my-2 rounded bg-[#F3F3F3]' placeholder='Enter your email address' type="text" name='url' /><br></br>
                            <label className='text-[#403F3F] font-semibold text-[1.1rem]' htmlFor="email">Email address</label>
                            <input className='w-full border p-2 my-2 rounded bg-[#F3F3F3]' placeholder='Enter your email address' type="email" name='email' /><br></br>
                            <label className='text-[#403F3F] font-semibold text-[1.1rem]' htmlFor="password">Password</label>
                            <input className='w-full border p-2 my-2 rounded bg-[#F3F3F3]' placeholder='Enter your password' type="password" name='password' /><br></br>
                            <input className='text-white bg-[#403F3F] text-xl font-semibold rounded w-full py-2 mt-4' type="submit" value="Login" />
                        </form>
                        <div className='text-center pt-6 text-[1rem] font-semibold'>
                            <p>Already Have An Account ? <Link className='text-red-600' to={'/signin'}>Signin</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;