import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen background">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Cox' Bazar</h1>
                    <p className="mb-5">Longest Sea beach in the World</p>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from:blue-300 p-4 rounded-full font-bold "><a href='/book'>Booking</a></button>
                </div>
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img src="https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/master/pass/GettyImages-539105384.jpg" alt='' />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/05/11/rangamati_sajek-01.jpg?itok=gCRdo7BU" alt='' />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1645070582_9_2.jpg" alt='' />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;