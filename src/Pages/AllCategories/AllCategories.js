import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCategories = ({ category }) => {
    const allcategories = useLoaderData();
    console.log(allcategories.products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                allcategories.products.map(product => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.picture} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.location}</p>
                        <p>{product.resalePrice}</p>
                        <p>{product.originalPprice}</p>
                        <p>{product.yearsOfUse}</p>
                        <p>{product.postedTime}</p>
                        <p>{product.sellersName}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AllCategories;