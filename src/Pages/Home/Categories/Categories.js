import React from 'react';
import Category from './Category';

const Categories = () => {
    return (
        <div>

            {/* fetch */}
            <div>
                <h1 className='text-3xl font-bold text-center mt-20 mb-8'>Top Categories</h1>
            </div>

            <div>
                <Category></Category>
            </div>

        </div>
    );
};

export default Categories;