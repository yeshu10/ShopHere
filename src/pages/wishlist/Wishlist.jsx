import React, { useContext,useEffect } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { clearFromWishlist, deleteFromWishlist } from '../../redux/wishlistSlice';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';

function Wishlist() {
  const context = useContext(myContext);
  const { mode } = context;

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist);

  const deleteItemFromWishlist = (item) => {
    dispatch(deleteFromWishlist(item));
    toast.success('Item removed from wishlist');
  };

  const clearWishlist = () => {    
  
    dispatch(clearFromWishlist());
    toast.success('Cleared Wishlist');
  };

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
        <div className="flex justify-between items-center mb-10 px-6">
        <h1 className=" text-2xl font-bold text-center flex-grow text-pink-600">Wishlist</h1>
        <button  type="button"  onClick={clearWishlist}   className="focus:outline-none  text-white bg-gradient-to-r from-pink-300 to-purple-400  hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">
          Clear Wishlist
        </button>
      </div>
      <div className="mx-auto max-w-6xl px-6 xl:px-0 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item, index) => (
            <div
              key={index}
              className="mb-6 rounded-lg border drop-shadow-xl bg-white p-6"
              style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <div className="p-4 drop-shadow-lg cursor-pointer"  style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                  <div className="flex justify-center">
                    <img onClick={()=> window.location.href = `/productinfo/${item.id}`} className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out" src={item.imageUrl} alt="product" />
                    
                  </div>
                  <div className="p-5 border-t-2">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>SarvHaat</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h1>
                    <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => addCart(item)}
                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                      >
                        Add To Cart
                      </button>
                      <div
                        onClick={() => deleteItemFromWishlist(item)}
                        className="cursor-pointer ml-2 flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Wishlist;
