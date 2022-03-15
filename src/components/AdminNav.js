import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/authReducer";

const AdminNav = ({ openSidebar }) => {
  const dispatch = useDispatch();
  const adminLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="fixed left-0 sm:left-64 right-0 top-4 mx-4">
      <div className="bg-gray-800 flex justify-between sm:justify-end items-center w-full p-4">
        <i
          className="bi bi-filter-left text-white text-2xl cursor-pointer sm:hidden"
          onClick={openSidebar}
        ></i>
        <button
          onClick={adminLogout}
          className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default AdminNav;
