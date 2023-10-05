import { BiBookmark } from 'react-icons/bi';
import { CiShare2 } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNews }) => {
    const { title, author, details, image_url, _id } = aNews;
    return (
        <Link to={`/newsdetails/${_id}`}>
            <div className='border-[#E7E7E7] border rounded'>
                <div className="bg-[#F3F3F3] flex justify-between items-center p-3 rounded">
                    <div className="flex gap-4 items-center">
                        <img className="w-[40px] h-[40px] rounded-full" src={author.img} alt="" />
                        <div>
                            <h2 className='text-[#403F3F] text-[1rem] font-semibold'>{author.name}</h2>
                            <p className='text-[10px] text-[#706F6F]'>{author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <BiBookmark />
                        <CiShare2 />
                    </div>
                </div>
                <div className='p-4 space-y-4'>
                    <h2 className='text-[#403F3F] text-xl font-bold'>{title}</h2>
                    <div>
                        <img className='w-full h-[260px] object-fill' src={image_url} alt="" />
                    </div>
                    <p className='text-[#706F6F] text-[1rem]'>{details.length >= 200 ? (<>{details.slice(0, 200)} <p className='text-[1rem] text-yellow-400 font-semibold'> Read more</p></>) : details}</p>
                </div>
            </div >
        </Link>
    );
};

export default NewsCard;