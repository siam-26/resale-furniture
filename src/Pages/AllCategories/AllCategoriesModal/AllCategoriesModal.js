import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AllCategoriesModal = ({ categoryModal }) => {

    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div>

            {
                categoryModal.products.map(product => <div>
                    <input type="checkbox" id="HMAS-Furniture-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="HMAS-Furniture-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                            <input type="text" value={product.name} placeholder="Item name" className="font-bold text-center input w-full max-w-xs border border-accent mb-5 " disabled />

                            <input type="text" value={user?.displayName} placeholder="Your name" className="input w-full max-w-xs border border-accent mb-5" disabled />

                            <input type="email" value={user?.email} placeholder="email" className="input w-full max-w-xs border border-accent mb-5" disabled />

                            <input type="text" value={product.resalePrice} placeholder="price" className="input w-full max-w-xs border border-accent mb-5" />

                            <input type="number" placeholder="phone" className="input w-full max-w-xs border border-accent mb-5" />

                            <input type="text" placeholder="your location" className="input w-full max-w-xs border border-accent mb-5" />


                            <label className="btn btn-primary w-full">Submit</label>

                        </div>
                    </div>
                </div>)
            }
            {/* <div>
            <input type="checkbox" id="HMAS-Furniture-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="HMAS-Furniture-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <input type="text" placeholder="Item name" className="input w-full max-w-xs border border-accent mb-5" />

                    <input type="text" placeholder="Your name" className="input w-full max-w-xs border border-accent mb-5" />

                    <input type="email" placeholder="email" className="input w-full max-w-xs border border-accent mb-5" />

                    <input type="number" placeholder="price" className="input w-full max-w-xs border border-accent mb-5" />

                    <input type="number" placeholder="phone" className="input w-full max-w-xs border border-accent mb-5" />

                    <input type="text" placeholder="location" className="input w-full max-w-xs border border-accent mb-5" />

                    <input type="number" placeholder="price" className="input w-full max-w-xs border border-accent mb-5" />

                    <label className="btn btn-primary w-full">Submit</label>

                </div>
                </div>
            </div> */}
        </div>
    );
};

export default AllCategoriesModal;