import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../Hooks/useToken/useToken';
// import useTitle from '../../Hooks/useTitle';

const SellerRegister = () => {

    const [registerToken, setRegisterToken] = useState('');
    const [token] = useToken(registerToken);
    // useTitle('SellerRegister');

    //error log in
    const [error, setError] = useState('');

    const { createUser, userUpdate } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    //creater user account
    const handleCreateUser = data => {

        createUser(data.email, data.password)

            .then(result => {

                const user = result.user;
                console.log(user);
                updateUserProfileHandler(data.name);
                setRegisterToken(data.email);
                userInfoDb(data.name, data.role, data.email);


            })
            .catch(error => {
                const err = setError(error.message);
            })
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

    //save new seller user information on database
    const userInfoDb = (name, role, email) => {
        const userNew = { name, role, email };
        fetch('https://furniture-server-gamma.vercel.app/users', {
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
                alert('succefull Registered...');
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse w-full mt-12 mb-24">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-accent">
                    <form onSubmit={handleSubmit(handleCreateUser)} className="card-body">
                        <h1 className='text-3xl font-bold text-center'>Register Now</h1>

                        <div className="form-control mt-3 mb-5">
                            <label className="label">
                                <span className="font-bold label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="your name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className='font-bold' role="alert">Name is required</p>}
                        </div>

                        <div className="form-control mt-3 mb-5">
                            <label className="label">
                                <span className="font-bold label-text">Role</span>
                            </label>

                            <select {...register("role", { required: true })} className="select w-full max-w-xs input-bordered">
                                <option selected>seller</option>


                            </select>
                            {errors.role?.type === 'required' && <p className='font-bold' role="alert">Role is required</p>}


                        </div>

                        <div className="form-control mt-3 mb-5">
                            <label className="label">
                                <span className="font-bold label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='font-bold' role="alert">Email is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='font-bold' role="alert">Password is required</p>}
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

                        <p className="label-text-alt font-semibold text-center mt-4">Already have an account? <Link className='link link-hover' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SellerRegister;