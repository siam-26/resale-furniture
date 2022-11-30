import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.')

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imgHost = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleSubmitForm = data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        //expiration=600
        const url = `https://api.imgbb.com/1/upload?key=${imgHost}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const products = {
                        photo: imgData.data.url,
                        productName: data.productName,
                        productCategoryName: data.productCategoryName,
                        sellerName: data.sellerName,
                        email: data.email,
                        select: data.select,
                        phone: data.phone,
                        location: data.location,
                        description: data.description,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        yearOfPurchase: data.yearOfPurchase,
                        yearOfUse: data.yearOfUse,
                        postedTime: data.postedTime,
                    }
                    fetch('https://furniture-server-gamma.vercel.app/addProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                alert('successfully added');

                                // toast.success('Successfully toasted!');
                                navigate('/dashboard/myProducts');

                            }
                        })
                }
            });




    }
    return (
        <div className='ml-12 md:ml-32 lg:ml-12'>

            <h1 className='text-3xl text-primary font-semibold ml-0 md:ml-24 lg:ml-24 mt-12 mb-8'><i>Add Your Products</i></h1>
            <form onSubmit={handleSubmit(handleSubmitForm)} className=''>
                <div className=''>
                    <label className="label">
                        <span className="label-text text-black font-semibold">Add A Photo Product</span>
                    </label>
                    <input {...register("photo")} type="file" placeholder="Type here" className="p-8 h-24 cursor-pointer input input-bordered w-72 md:w-1/2 lg:w-1/2 mb-5" />
                </div>


                <div className='pb-16'>
                    <label className="label">
                        <span className="label-text text-black font-semibold">Product Name</span>
                    </label>
                    <input {...register("productName", { required: true, maxLength: 20 })} type="text" placeholder="Product Name" className="input input-bordered w-72 md:w-1/2 lg:w-1/2 mb-5" aria-invalid={errors.firstName ? "true" : "false"} />
                    {errors.productName?.type === 'required' && <p role="alert">Product name is required</p>}

                    <label className="label">
                        <span className="label-text text-black font-semibold">Product Category Name</span>
                    </label>
                    <input {...register("productCategoryName")} type="text" placeholder="Product Category Name" className="input input-bordered w-72 md:w-1/2 lg:w-1/2 mb-5" />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Seller Name</span>
                    </label>
                    <input {...register("sellerName")} value={user?.displayName} type="text" placeholder="Seller Name" className="input input-bordered w-72 md:w-1/2 lg:w-1/2 mb-5 " />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Seller Email</span>
                    </label>
                    <input {...register("email")} value={user?.email} type="text" placeholder="Seller Name" className="input input-bordered w-72 md:w-1/2 lg:w-1/2 mb-5 " />


                    <label className="label">
                        <span className="label-text text-black font-semibold">Condition Type</span>
                    </label>
                    <select  {...register("select")} className="select w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered">
                        <option disabled selected>Excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>

                    <label className="label">
                        <span className="label-text text-black font-semibold">Mobile Number</span>
                    </label>
                    <input  {...register("phone")} type="tel" placeholder="Phone Number" className="input w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered" />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Location</span>
                    </label>
                    <input  {...register("location")} type="text" placeholder="Location" className="input w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered" />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Description</span>
                    </label>
                    <textarea  {...register("description")} className="textarea input-bordered w-72 md:w-1/2 lg:w-1/2 mb-5" placeholder="Description"></textarea>

                    <label className="label">
                        <span className="label-text text-black font-semibold">Original Price</span>
                    </label>
                    <input  {...register("originalPrice")} type="text" placeholder="Original Price" className="input w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered" />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Resale Price</span>
                    </label>
                    <input  {...register("resalePrice")} type="text" placeholder="Resale Price" className="input w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered" />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Year Of Purchase</span>
                    </label>
                    <input  {...register("yearOfPurchase")} type="text" placeholder="Year Of Purchase" className="input w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered" />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Year Of Use</span>
                    </label>
                    <input  {...register("yearOfUse")} type="text" placeholder="Year Of Use" className="input w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered" />

                    <label className="label">
                        <span className="label-text text-black font-semibold">Posted Time</span>
                    </label>
                    <input  {...register("postedTime")} type="datetime-local" placeholder="Posted Time" className="input w-72 md:w-1/2 lg:w-1/2 mb-5 input-bordered" />
                    <br /><br />
                    <button className="btn btn-primary w-72 md:w-72 lg:w-72 mb-8 ml-0 md:ml-12 lg:ml-12">Submit</button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;