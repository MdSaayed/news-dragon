import { Link, NavLink } from "react-router-dom";
import userImg from '../../../assets/user.png'
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, userSignout } = useContext(AuthContext);

    const handleSignout = () => {
        userSignout()
            .then(res => toast.success('Logout successfull.'))
            .catch(err => console.log(err));
    }

    return (
        <div className="grid grid-cols-3 gap-6 items-center justify-center py-2">
            <div></div>
            <nav className="flex gap-6 items-center justify-center">
                <li className="list-none"><NavLink to={'/'}>Home</NavLink></li>
                <li className="list-none"><NavLink to={'/about'}>About</NavLink></li>
                <li className="list-none"><NavLink to={'/career'}>Career</NavLink></li>
            </nav>
            <div className="flex gap-4 items-center justify-end">
                <li className="list-none"><Link><img className="w-[30px] h-[30px] rounded-full" src={userImg} alt="" /></Link></li>
                {
                    user ? <>
                        <li onClick={handleSignout} className="list-none"><button className="rounded bg-[#403F3F] py-[6px] px-8 text-white" to={"/signin"}>Logout</button></li>
                    </> :
                        <>
                            <li className="list-none"><Link className="rounded bg-[#403F3F] py-[6px] px-8 text-white" to={"/signin"}>Login</Link></li>
                        </>
                }


            </div>
        </div>
    );
};

export default Navbar;