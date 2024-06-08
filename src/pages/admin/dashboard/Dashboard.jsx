import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
  const context = useContext(myContext);
  const { mode, countOrder, countProduct, countUser } = context;

  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const productCount = await countProduct();
      const orderCount = await countOrder();
      const userCount = await countUser();
      setProductCount(productCount);
      setOrderCount(orderCount);
      setUserCount(userCount);
    };
    fetchCounts();
  }, [countProduct, countOrder, countUser]);

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-3 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div 
                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] px-4 py-3 rounded-xl" 
                style={{ 
                  background: mode === 'dark' ? 'rgb(46 49 55)' : 'linear-gradient(to right, #F8BBD0, #E1BEE7)', 
                  color: mode === 'dark' ? 'white' : 'black' 
                }}
              >
                <div className="text-pink-400 w-12 h-12 mb-3 inline-block">
                  <MdOutlineProductionQuantityLimits size={50} />
                </div>
                <h2 
                  className="title-font font-medium text-3xl fonts1" 
                  style={{ color: mode === 'dark' ? 'white' : 'black' }}
                >
                  {productCount}
                </h2>
                <p 
                  className="text-purple-500 font-bold" 
                  style={{ color: mode === 'dark' ? 'white' : 'purple-500' }}
                >
                  Total Products
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div 
                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] px-4 py-3 rounded-xl" 
                style={{ 
                  background: mode === 'dark' ? 'rgb(46 49 55)' : 'linear-gradient(to right, #F8BBD0, #E1BEE7)', 
                  color: mode === 'dark' ? 'white' : 'black' 
                }}
              >
                <div className="text-pink-500 w-12 h-12 mb-3 inline-block">
                  <AiFillShopping size={50} />
                </div>
                <h2 
                  className="title-font font-medium text-3xl fonts1" 
                  style={{ color: mode === 'dark' ? 'white' : 'black' }}
                >
                  {orderCount}
                </h2>
                <p 
                  className="text-pink-500 font-bold" 
                  style={{ color: mode === 'dark' ? 'white' : 'pink-500' }}
                >
                  Total Orders
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div 
                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] px-4 py-3 rounded-xl" 
                style={{ 
                  background: mode === 'dark' ? 'rgb(46 49 55)' : 'linear-gradient(to right, #F8BBD0, #E1BEE7)', 
                  color: mode === 'dark' ? 'white' : 'black' 
                }}
              >
                <div className="text-pink-400 w-12 h-12 mb-3 inline-block">
                  <FaUserTie size={50} />
                </div>
                <h2 
                  className="title-font font-medium text-3xl fonts1" 
                  style={{ color: mode === 'dark' ? 'white' : 'black' }}
                >
                  {userCount}
                </h2>
                <p 
                  className="text-purple-500 font-bold" 
                  style={{ color: mode === 'dark' ? 'white' : 'purple-400' }}
                >
                  Total Users
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
