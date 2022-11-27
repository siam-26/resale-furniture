import React, { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const RoleRegister = () => {

    return (
        <div className='border w-full lg:w-[900px] mb-48 ml-0 lg:ml-60 mt-24'>
            <div>
                <h1 className='font-bold text-center text-3xl mt-12 mb-6'>Join Us With</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

                    <div className='font-bold text-2xl border-2 border-primary rounded p-8 m-16'>
                        <input type="radio" name="radio-1" className="radio radio-primary" />
                        <h1>Join as a User</h1>

                        <Link to='/register/user'><CgArrowLongRight className='text-primary mt-3 cursor-pointer' /></Link>

                    </div>

                    <div className='font-bold text-2xl border-2 border-primary rounded p-8 m-16'>
                        <input type="radio" name="radio-1" className="radio radio-primary" />
                        <h1>Join as a Seller</h1>
                        <Link to='/register/seller'><CgArrowLongRight className='text-primary mt-3 cursor-pointer' /></Link>
                    </div>


                </div>

                <p className='text-center mb-12'>Already have an account? <Link to='/login'><span className='link link-hover text-blue-600'>Login</span></Link></p>

            </div>
        </div>
    );
};

export default RoleRegister;