import { BiLogoFacebook } from 'react-icons/bi';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { AiOutlineTwitter } from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <div>
            <table className='border-collapse w-full mt-4'>
                <tr>
                    <td className='border rounded-t p-2 items-center gap-4 justify-start flex text-[#706F6F]'>
                        <BiLogoFacebook className='text-blue-500 text-xl' />
                        <button className='font-semibold'>Facebook</button>
                    </td>
                </tr>
                <tr>
                    <td className='border-x p-2 items-center gap-4 justify-start flex text-[#706F6F]'>
                        <AiOutlineTwitter className='text-blue-400 text-xl' />
                        <button className='font-semibold'>Twitter</button>
                    </td>
                </tr>
                <tr>
                    <td className='border rounded-b p-2 items-center gap-4 justify-start flex text-[#706F6F]'>
                        <PiInstagramLogoThin className='text-red-500 text-xl' />
                        <button className='font-semibold'>Instagram</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default SocialMedia;
