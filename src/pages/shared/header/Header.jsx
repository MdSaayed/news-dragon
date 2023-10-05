import moment from 'moment';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center py-8 gap-2'>
                <div className='flex justify-center'>
                    <Link to={'/'} className='flex justify-center'>
                        <img className='w-2/3' src={logo} alt="" />
                    </Link>
                </div>
                <div className='flex justify-center flex-col gap-1'>
                    <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
                    <p className='text-[1rem] text-center text-[#706F6F]'>
                        <span style={{ fontWeight: 'bold' }}>{moment().format("dddd")},</span> {moment().format("MMMM D, YYYY")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;