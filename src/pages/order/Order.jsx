import React, { useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(userid);
  console.log(order);

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <div className="h-full pt-10">
          {order
            .filter(obj => obj.userid === userid)
            .map((order) => (
              <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mb-6" key={order.id}>
                <div className={`rounded-lg p-6 shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  {order.cartItems.map((item) => (
                    <div className="rounded-lg md:w-2/3 mb-6" key={item.id}>
                      <div
                        className={`justify-between rounded-lg p-6 shadow-md sm:flex sm:justify-start ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                      >
                        <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="mt-1 text-xs">{item.description}</p>
                            <p className="mt-1 text-xs">₹{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">Order Details</h3>
                    <p className="mt-1 text-sm">Payment ID: {order.paymentId}</p>
                    <p className="mt-1 text-sm">Order Date: {order.date}</p>
                    <p className="mt-1 text-sm">Shipping Address:  {order.addressInfo.address}, {order.addressInfo.pincode}</p>
                    <p className="mt-1 text-sm">Mobile:{order.addressInfo.phoneNumber}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl text-white">No Order</h2>
      )}
    </Layout>
  );
}

export default Order;
