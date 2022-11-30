import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Pages/Loading/Loading';

const Navbar = () => {
    const { logOut, user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }
    //logOut
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 ">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>

                        {
                            user?.email &&
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        {
                            user?.email ?
                                <Link onClick={handleLogOut} className="btn btn-outline btn-primary mr-16">Logout</Link>
                                :
                                <Link to='/login' className="btn btn-outline btn-primary mr-16">Login</Link>

                        }
                        <Link to='/RoleRegister' className="btn btn-outline btn-primary mr-16">Register</Link>


                    </ul>


                </div>

                <Link className="btn btn-ghost normal-case text-xl ml-16" to='/'>HMAS-Furniture</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>

                    {
                        user?.email &&
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    }

                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden lg:block'>
                    {
                        user?.email ?
                            <Link onClick={handleLogOut} className="btn btn-outline btn-primary mr-16">Logout</Link>
                            :
                            <Link to='/login' className="btn btn-outline btn-primary mr-16">Login</Link>

                    }

                    <Link to='/RoleRegister' className="btn btn-outline btn-primary mr-16">Register</Link>

                </div>
                <label htmlFor="hmas-drawer" tabIndex={0} className="btn btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;