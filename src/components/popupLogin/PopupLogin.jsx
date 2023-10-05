import { FaGoogle } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const PopupLogin = () => {
    const {googleSignin} = useContext(AuthContext);

    const handleGoogleSignin = ()=>{
        googleSignin()
            .then(res => console.log(res))
            .then(err => console.error(err));
    }

    return (
        <div className='mt-4'>
            <div onClick={handleGoogleSignin} className='border p-1 items-center gap-4 justify-center rounded flex text-blue-600 mb-2'>
                <FaGoogle />
                <button>Login With Google</button>
            </div>
            <div className='border p-1 items-center gap-4 justify-center rounded flex text-black mb-2'>
                <AiOutlineGithub />
                <button>Login With Github</button>
            </div>
        </div>
    );
};

export default PopupLogin;