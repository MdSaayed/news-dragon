import PopupLogin from "../../../components/popupLogin/PopupLogin";
import Qzone from "../../../components/qZone/Qzone";
import SocialMedia from "../../../components/socialMedia/SocialMedia";

const RightSidebar = () => {
    return (
        <div>
            <div>
                <h1 className='font-semibold text-[#403F3F] text-xl'>Login With</h1>
                <PopupLogin />
            </div>
            <div className="mt-7">
                <h2 className='font-semibold text-[#403F3F] text-xl'>Find Us On</h2>
                <SocialMedia />
            </div>
            <div className="mt-7 bg-[#F3F3F3] px-2 py-4 rounded">
                <h2 className='font-semibold text-[#403F3F] text-xl'>Q-Zone</h2>
                <Qzone />
            </div>
        </div>
    );
};

export default RightSidebar;