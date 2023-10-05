import React from 'react';
import Header from '../shared/header/Header';
import Navbar from '../shared/navbar/Navbar';
import RightSidebar from '../shared/rightSidebar/RightSidebar';
import LeftSidebar from '../shared/leftSidebar/LeftSidebar';
import BrekingNews from '../../components/brekingNews/BrekingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../components/newsCard/NewsCard'; 


// home components 
const Home = () => {
    const news = useLoaderData();

    return (
        <div className='max-w-6xl mx-auto'>
            <Header />
            <BrekingNews />
            <Navbar />
            <div className='grid grid-cols-4 gap-6 py-8'>
                <div>
                    <LeftSidebar />
                </div>
                <div className='col-span-2'>
                    <h1 className='font-semibold text-[#403F3F] text-xl'>Dragon News Home</h1>
                    <div className='flex flex-col gap-4 mt-4'>
                        {
                            news?.map((aNews) => <NewsCard key={aNews._id} aNews={aNews} />)
                        }
                    </div>
                </div>
                <div>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default Home;