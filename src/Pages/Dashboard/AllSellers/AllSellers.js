import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Loading/Loading';

const AllSellers = () => {

    const [verify, setVerify] = useState(false);

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/admin/allSellers');
            const data = await res.json();
            return data;
        },
    })

    //function for delete a buyer
    const handleDeleteSeller = id => {
        fetch(`http://localhost:5000/dashboard/admin/allBuyers/${id}`, {
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
                            {/* <th>Favorite Color</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td> <button onClick={() => handleDeleteSeller(seller._id)} className="btn btn-primary btn-xs">delete</button></td>
                                {
                                    verify ?
                                        <td><button onClick={() => setVerify(false)} className="btn btn-secondary mr-24 btn-xs">verified</button></td>
                                        :
                                        <td><button onClick={() => setVerify(true)} className="btn btn-secondary mr-24 btn-xs">unverified</button></td>
                                }

                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;