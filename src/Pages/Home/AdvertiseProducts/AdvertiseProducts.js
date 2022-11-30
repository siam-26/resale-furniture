import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import Advertise from './Advertise';

const AdvertiseProducts = () => {
    const { data: advertiseProducts, isLoading, refetch } = useQuery({
        queryKey: ['advertise',],
        queryFn: async () => {
            const res = await fetch('https://furniture-server-gamma.vercel.app/myProducts/advertise');
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-16 lg:pl-36 pr-16 lg:pr-36 mb-24'>
            {
                advertiseProducts &&
                advertiseProducts.map(advertised => <Advertise key={advertised._id}
                    advertised={advertised}
                ></Advertise>)
            }
        </div>
    );
};

export default AdvertiseProducts;