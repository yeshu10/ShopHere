import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'
import Layout from '../../../components/layout/Layout';

function UpdateProduct() {
    const context = useContext(myContext);
    const { products, setProducts, updateProduct } = context;

    return (
        <Layout>
        <div>
            <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100'>
                <div className='bg-white px-8 py-8 rounded-xl shadow-lg'>
                    <div>
                        <h1 className='text-center text-pink-600 text-xl mb-4 font-bold'>Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                            name='title'
                            className='bg-pink-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                            className='bg-purple-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                            className='bg-blue-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                            className='bg-pink-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10"
                            name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className='bg-purple-200 mb-4 px-2 py-2 w-full lg:w-[20em]  h-20 rounded-lg text-gray-800 placeholder:text-gray-500 outline-none'
                            placeholder='Product description'>
                        </textarea>
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            onClick={updateProduct}
                            className='bg-gradient-to-r from-pink-300 to-purple-300 w-full text-white font-bold px-2 py-2 rounded-lg shadow-md'>
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default UpdateProduct;
