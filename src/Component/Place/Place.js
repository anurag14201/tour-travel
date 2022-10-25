import React from 'react';

const Place = () => {
    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className="card w-96 glass">
                    <figure><img src="https://img2.10bestmedia.com/Images/Photos/378847/GettyImages-1085317916_54_990x660.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Barcelona</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src="https://static.dw.com/image/60208705_605.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Paris</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src="https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/master/pass/GettyImages-539105384.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kedarnath</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src="https://a.cdn-hotels.com/gdcs/production105/d283/fe692f6d-a1b6-47c6-b2c0-39056ed2d7b7.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Saint Martin</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;