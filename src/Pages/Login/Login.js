import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    //error log in
    const [error, setError] = useState('');

    const { logIn, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    //google Provider
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    //user login

    const handleLogIn = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    alert('successu');
                    navigate('/');
                }

            })
            .catch(error => {
                const err = setError(error.message);
            })
    }

    //google login
    const handleGoogleLogin = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse w-full mt-12 mb-24">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-accent">
                    <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
                        <h1 className='text-3xl font-bold text-center'>Login</h1>
                        <div className="form-control mt-3 mb-5">
                            <label className="label">
                                <span className="font-bold label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                            <label className="label mt-4">
                                <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                            </label>
                        </div>
                        {
                            error &&
                            <p className='text-red-600'>{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='mt-3'>
                            <p className='text-center text-secondary font-semibold'>or login with</p>
                            <FcGoogle onClick={handleGoogleLogin} className='text-4xl m-auto mt-2 cursor-pointer' />
                        </div>
                        <p className="label-text-alt text-center mt-4">New in HMAS-Furniture? <Link className='link link-hover' to='/register'>register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;