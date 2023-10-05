import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div>
            <div className='my-4'>
                <img src={Qzone1} alt="" />
            </div>
            <div className='my-4'>
                <img src={Qzone2} alt="" />
            </div>
            <div className='my-4'>
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;