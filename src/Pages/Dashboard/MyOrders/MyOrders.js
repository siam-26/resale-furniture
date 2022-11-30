import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Title</th>
                            <th>Price</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>

                            <th>
                                <td> <button className="btn btn-primary btn-xs">pay</button></td>
                            </th>
                        </tr>


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyOrders;