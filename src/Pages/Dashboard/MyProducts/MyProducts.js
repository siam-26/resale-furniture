import { useQuery } from '@tanstack/react-query';


const MyProducts = () => {


    const { data: myProducts, isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/myProducts');
            const data = await res.json();
            return data;
        },
    })

    //function for delete product
    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/dashboard/myProducts/${id}`, {
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
        return <p>loading...</p>
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
                                <button className="btn btn-secondary btn-xs ml-4">advertise</button>
                            </td>

                        </tr>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyProducts;