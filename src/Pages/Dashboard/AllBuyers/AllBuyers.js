import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';

const AllBuyers = () => {
    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('https://furniture-server-gamma.vercel.app/dashboard/admin/allBuyers');
            const data = await res.json();
            return data;
        },
    })

    //function for delete a buyer
    const handleDeleteBuyer = id => {
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
                            buyers.map((buyer, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td> <button onClick={() => handleDeleteBuyer(buyer._id)} className="btn btn-primary btn-xs">delete</button></td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;