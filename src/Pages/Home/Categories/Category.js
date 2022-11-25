import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { img, name, _id } = category;


    return (
        <div className=''>
            <div className="card">
                <figure><img className='h-72 w-72' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl m-auto font-bold">{name}</h2>

                    <div className="card-actions justify-center mt-5 relative bottom-44">
                        <Link to={`/categories/${_id}`}><button className="btn btn-primary">See All</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;