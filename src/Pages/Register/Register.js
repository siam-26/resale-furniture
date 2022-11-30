import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
import useToken from '../../Hooks/useToken/useToken';

const notify = () => toast('Here is your toast.');


const Register = () => {
    useTitle('Register');

    const [registerToken, setRegisterToken] = useState('');
    const [token] = useToken(registerToken);
    //error log in
    const [error, setError] = useState('');

    const { createUser, googleSignIn, userUpdate } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    //google Provider
    const provider = new GoogleAuthProvider();

    //google login
    const handleGoogleLogin = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                if (user) {
                    toast.success('Successfully toasted!')
                }
            })
            .catch(error => console.error(error));
    }

    //creater user account
    const handleCreateUser = data => {

        createUser(data.email, data.password)

            .then(result => {

                const user = result.user;
                console.log(user);
                updateUserProfileHandler(data.name);
                userInfoDb(data.name, data.email);


            })
            .catch(error => {
                const err = setError(error.message);
            })
    }

    //save new user information on database
    const userInfoDb = (name, email) => {
        const userNew = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userNew),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRegisterToken(email);
                // toast.success('Successfully toasted!')
                alert('succefully Registered...');
            })
            .catch(error => console.log(error));
    }

    //update user
    const updateUserProfileHandler = (name) => {
        const info = {
            displayName: name,

        }
        userUpdate(info)
            .then(() => {

            })
            .catch(error => {

            })
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="hero-content flex-col lg:flex-row-reverse w-full mt-12 mb-24">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-accent">
                    <form onSubmit={handleSubmit(handleCreateUser)} className="card-body">
                        <h1 className='text-3xl font-bold text-center'>Register Now</h1>

                        <div className="form-control mt-3 mb-5">
                            <label className="label">
                                <span className="font-bold label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="your name" className="input input-bordered" />
                        </div>

                        {/* <div className="form-control mt-3 mb-5">
                            <label className="label">
                                <span className="font-bold label-text">Role</span>
                            </label>
                            <input {...register("role")} type="text" placeholder="user" className="input input-bordered" />
                        </div> */}

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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            error &&
                            <p className='text-red-600'>{error}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <div className='mt-3'>
                            <p className='text-center text-secondary font-semibold'>or login with</p>
                            <FcGoogle onClick={handleGoogleLogin} className='text-4xl m-auto mt-2 cursor-pointer' />
                        </div>

                        <p className="label-text-alt font-semibold text-center mt-4">Already have an account? <Link className='link link-hover' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;