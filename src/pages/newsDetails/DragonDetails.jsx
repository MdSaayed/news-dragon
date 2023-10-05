import { useEffect } from "react";
import NewaDetails from "../../components/newsDetails/NewaDetails";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSidebar from "../shared/rightSidebar/RightSidebar";

const DragonDetails = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    } ,[])

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <Header />
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <h2 className='font-semibold text-[#403F3F] text-xl mb-4'>Dragon News</h2>
                    <NewaDetails />
                </div>
                <div>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default DragonDetails;