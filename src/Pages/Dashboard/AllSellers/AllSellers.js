import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Loading/Loading';
import { MdVerified } from 'react-icons/md';


const AllSellers = () => {

    const [verify, setVerify] = useState(false);

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('https://furniture-server-gamma.vercel.app/dashboard/admin/allSellers');
            const data = await res.json();
            return data;
        },
    })

    //function for delete a buyer
    const handleDeleteSeller = id => {
        fetch(`https://furniture-server-gamma.vercel.app/dashboard/admin/allBuyers/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(deleteData => {
                console.log(deleteData);
                if (deleteData.deletedCount > 0) {
                    alert('successfully deleted');
                    refetch();
                }
            })
    }

    //Make verify
    const handleMakeVerify = id => {
        fetch(`https://furniture-server-gamma.vercel.app/dashboard/admin/allSellers/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount === 1) {
                    alert('successfully verified');
                    setVerify(true);
                    <MdVerified />
                }
                refetch();
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>

                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td> <button onClick={() => handleDeleteSeller(seller._id)} className="btn btn-primary btn-xs">delete</button></td>

                                <td><button onClick={() => handleMakeVerify(seller._id)} className="btn btn-outline btn-sky-400 mr-24 btn-xs">verify <MdVerified className='text-blue-400' /></button></td>

                            </tr>)

                        }


                        {/* 
                        onClick={() => handleMakeVerify(seller._id)} className="btn btn-outline btn-sky-400 mr-24 btn-xs" */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;