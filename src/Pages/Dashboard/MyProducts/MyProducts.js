import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';


const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const url = `https://furniture-server-gamma.vercel.app/dashboard/myProducts?email=${user?.email}`;

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })

    //Advertise
    const handleAdvertise = (product) => {
        fetch('https://furniture-server-gamma.vercel.app/myProducts/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('successfully advertised');

                    // toast.success('Successfully toasted!');


                }
            })
    }

    //function for delete product
    const handleDeleteProduct = id => {
        fetch(`https://furniture-server-gamma.vercel.app/dashboard/myProducts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(deleteData => {
                console.log(deleteData);
                if (deleteData.deletedCount > 0) {
                    alert('successfully deleted');
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className=" w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Location</th>


                        </tr>
                    </thead>


                    {
                        myProducts.map((product, i) => <tr key={product._id}>
                            <td>{i + 1}</td>
                            <td>


                                <div className="font-bold">{product.productName}</div>


                            </td>
                            <td></td>
                            <td>{product.resalePrice}</td>
                            <td>{product.location}</td>
                            <td>
                                <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-primary btn-xs">delete</button>
                                <button onClick={() => handleAdvertise(product)} className="btn btn-secondary btn-xs ml-4">advertise</button>
                            </td>

                        </tr>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyProducts;