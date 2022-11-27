import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Assets/notfound.jpg'
import notFound from '../../Assets/notFound.webp'

const NotFound = () => {
    return (
        <div>
            <img className=' border-0 m-auto w-[900px]' src={notFound} alt="" />
            <div className='text-center pb-8 relative bottom-12'>
                <Link to='/'><button className='btn btn-primary'>return to the home page</button></Link>
            </div>

        </div>
    );
};

export default NotFound;