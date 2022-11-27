import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/NavBar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="hmas-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                    {/* <label htmlFor="hmas-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="hmas-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/myOrders'> My orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>

                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                        <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;