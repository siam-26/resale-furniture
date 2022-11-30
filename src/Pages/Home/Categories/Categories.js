import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import Category from './Category';
import axios from "axios";
import { AuthContext } from '../../../Context/AuthProvider';

const Categories = () => {
    const { loading } = useContext(AuthContext);
    // const { data: categories, isLoading } = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/categories');
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    //using axios
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(res => {
                setCategories(res.data);
            })
    }, []);

    if (!categories) return null;

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold text-center mt-20 mb-8'>Top Categories</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-16 lg:pl-36 pr-16 lg:pr-36'>

                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    >
                    </Category>)
                }

            </div>

        </div>
    );
};

export default Categories;