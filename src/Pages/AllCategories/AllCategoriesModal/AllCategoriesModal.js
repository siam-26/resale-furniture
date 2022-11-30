import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';

const AllCategoriesModal = ({ categoryModal, setCategoryModal }) => {

    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    const handleUserBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const buyerName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const userBooking = {
            productName,
            buyerName,
            email,
            price,
            phone,
            location
        }

        fetch('http://localhost:5000/userBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userBooking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {


                    setCategoryModal(null);
                    toast.success('Successfully toasted!');
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <Toaster position="top-center"
                reverseOrder={false}
            />
            {
                categoryModal.products.map(product => <div>
                    <input type="checkbox" id="HMAS-Furniture-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="HMAS-Furniture-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                            <form className='' onSubmit={handleUserBooking}>
                                <input type="text" name='productName' value={product.name} placeholder="Item name" className="font-bold text-center input w-full max-w-xs border border-accent mb-5 ml-16" disabled />

                                <input type="text" name='userName' value={user?.displayName} placeholder="Your name" className="input w-full max-w-xs border border-accent mb-5 ml-16" disabled />

                                <input type="email" name='email' value={user?.email} placeholder="email" className="input w-full max-w-xs border border-accent mb-5 ml-16" disabled />

                                <input type="text" name='price' value={product.resalePrice} placeholder="price" className="input w-full max-w-xs border border-accent mb-5 ml-16" />

                                <input type="tel" name='phone' placeholder="phone" className="input w-full max-w-xs border border-accent mb-5 ml-16" />

                                <input type="text" name='location' placeholder="your location" className="input w-full max-w-xs border border-accent mb-5 ml-16" />

                                <input className='btn btn-primary w-full' type="submit" value="submit" />
                            </form>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllCategoriesModal;