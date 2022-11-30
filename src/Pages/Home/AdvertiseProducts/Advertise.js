import React from 'react';

const Advertise = ({ advertised }) => {
    const { photo, productName, resalePrice } = advertised;
    console.log(advertised);
    return (
        <div>
            <h1 className='text-center text-2xl mb-4'>Advertised</h1>
            <div className="card">
                <figure><img className='h-72 w-72' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-1xl m-auto font-extrabold">{productName}</h2>
                    <p className="card-title m-auto text-sm font-extrabold"><i>{resalePrice} TK</i></p>

                </div>
            </div>
        </div>
    );
};

export default Advertise;