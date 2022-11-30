import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Loading from '../Loading/Loading';
import AllCategoriesModal from './AllCategoriesModal/AllCategoriesModal';

const AllCategories = () => {
    useTitle('AllCategories');
    const [categoryModal, setCategoryModal] = useState(null);
    const { loading } = useContext(AuthContext);
    const allcategories = useLoaderData();
    console.log(allcategories);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-16 text-primary'>{allcategories.productNname}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mb-24 pl-4 pr-4 lg:pl-16 lg:pr-16 gap-6'>

                {
                    allcategories.products.map(product => <div className="card w-96 bg-base-100 shadow-xl">
                        <h2 className="card-title text-2xl ">{product.name}</h2>
                        <p className='text-secondary'><i>Posted on {product.postedTime} , {product.location}</i></p>
                        <figure><img className='w-full h-96' src={product.picture} alt="" /></figure>
                        <div className="card-body">


                            <p>Recale Price <span className='text-primary text-2xl'>{product.resalePrice}</span></p>
                            <p>Original Price: <span className='text-primary text-2xl'>{product.originalPprice}</span></p>
                            <p>Used: {product.yearsOfUse} years</p>
                            <p>Seller: {product.sellersName}</p>
                            <div className="card-actions justify-end">

                                {/* open modal */}
                                <label onClick={() => setCategoryModal(allcategories)} htmlFor="HMAS-Furniture-modal" className="btn btn-primary w-full">Book Now</label>
                            </div>

                        </div>

                        {
                            categoryModal &&
                            <AllCategoriesModal categoryModal={categoryModal}
                                setCategoryModal={setCategoryModal}
                            ></AllCategoriesModal>
                        }

                    </div>)
                }

            </div>
        </div>
    );
};

export default AllCategories;