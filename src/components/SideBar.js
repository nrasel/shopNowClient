import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 sm:left-0 ${side} w-64 h-screen transition-all bg-gray-800 z-10`}
    >
      <i
        className="bi bi-x-lg top-4 right-4 absolute sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      <div className="bg-white ">
        <img className="w-40" src="/logo.png" alt="logo" />
      </div>
      <ul className="mt-16">
        <li className="px-4 py-3 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-card-list mr-2 inline-block text-lg"></i>
          <Link className="text-base capitalize " to="/dashboard/products">
            Products
          </Link>
        </li>
        <li className="px-4 py-3 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bag-check mr-2 inline-block text-lg"></i>
          <Link className="text-base capitalize " to="/dashboard/products">
            Orders
          </Link>
        </li>
        <li className="px-4 py-3 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-people-fill mr-2 inline-block text-lg"></i>
          <Link className="text-base capitalize " to="/dashboard/products">
            Customers
          </Link>
        </li>
        <li className="px-4 py-3 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>
          <Link className="text-base capitalize " to="/dashboard/categories">
            Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
