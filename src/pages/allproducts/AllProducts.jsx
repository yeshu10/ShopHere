import React, { useContext, useEffect } from 'react'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { addToWishlist } from '../../redux/wishlistSlice'
import { toast } from 'react-toastify';

function Allproducts() {
  const context = useContext(myContext)
  const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
      filterPrice,setFilterPrice} = context

  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart);
  const wishlistItems = useSelector((state) => state.wishlist)
  console.log(cartItems)

  const addCart = (product)=> {
      dispatch(addToCart(product));
      toast.success('add to cart');
  }
  const addWishlist = (products) => {
    dispatch(addToWishlist(products))
    toast.success('Added to wishlist');
    console.log(products)
}

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
}, [wishlistItems])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Filter/>
      <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
                     .filter((obj) => obj.category.toLowerCase().includes(filterType))
                     .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
                        const { title, price, description, imageUrl,id } = item;
                        const isItemInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === id);

                        return (
                            <div  key={index} className="p-4 md:w-1/4  drop-shadow-lg " >
                                <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                    <div className="flex justify-center cursor-pointer" >
                                        <img onClick={()=> window.location.href = `/productinfo/${id}`}  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                    </div>
                                    <div className="p-5 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>SarvHaat</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                        <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                                        <div className=" flex justify-between">
                                            <button type="button" 
                                            onClick={()=> addCart(item)}
                                            className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>
                                            <button onClick={()=>addWishlist(item)} className={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 ${isItemInWishlist ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}>
                                            <svg
                                                    fill="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                                </svg>
    </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}




                </div>

            </div>
        </section >
    </Layout>
  )
}

export default Allproducts