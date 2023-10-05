import { useLoaderData, useParams } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';

const NewaDetails = () => {
    const news = useLoaderData();
    const { id } = useParams();

    const newItem = news?.find(newsDetail => newsDetail._id == id);


    return (
        <div>
            {
                newItem ? <>
                    <div className="border p-4 rounded">
                        <div className="space-y-4">
                            <img className="w-full" src={newItem.image_url} alt="" />
                            <h2 className="font-bold text-xl text-[#403F3F]">{newItem?.title}</h2>
                        </div>
                        <div className="my-4">
                            <p className="text-[#706F6F] text-[1rem]">{newItem.details}</p>
                            <button className="mt-6 bg-[#D72050] py-1 text-white px-6 rounded-sm flex items-center gap-4"><BsArrowLeft /> All news in this category</button>
                        </div>
                    </div>
                </> : 'Something is wrong.'
            }
        </div>
    );
};

export default NewaDetails;