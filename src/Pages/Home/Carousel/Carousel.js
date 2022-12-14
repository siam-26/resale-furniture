import React from 'react';
import sofa1 from '../../../Assets/sofa1.jpg';
import sofa2 from '../../../Assets/sofa2.jpg'
const Carousel = () => {
    return (
        <div className="carousel w-full h-[200px] md:h-[400px] lg:h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={sofa1} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide1" className="btn btn-circle bg-primary border-0 text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-primary border-0 text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={sofa2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide2" className="btn btn-circle bg-primary border-0 text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-primary border-0 text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;