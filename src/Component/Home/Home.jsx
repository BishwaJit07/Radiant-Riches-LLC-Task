import React from 'react';
import AllNavigations from './HomeComponent/AllNavigations';
import BlogCard from './HomeComponent/BlogCard';
import RealtedDeals from './HomeComponent/RealtedDeals';

const Home = () => {
    return (
        <div className='max-w-screen-xl md:mx-auto'>
            <AllNavigations/>
            <BlogCard/>
            <RealtedDeals/>
        </div>
    );
};

export default Home;