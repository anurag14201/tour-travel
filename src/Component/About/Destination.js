import React from 'react';

const Destination = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/99/54/30/swimming-pool.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Royel Tulip Cox's Bazar</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Book Now!</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/1-intercontinental-london-park-lane-and-wellington-arch-1577553042.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">The Intercontinental Hotel london</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Book Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;