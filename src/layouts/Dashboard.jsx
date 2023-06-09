import React from "react";
import {
  FaBars,
  FaCalendarAlt,
  FaCalendarCheck,
  FaComments,
  FaEnvelope,
  FaHome,
  FaRegComments,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { AiOutlineBars, AiTwotoneBook } from "react-icons/ai";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 text-base-content">
          <Link to="/">
            <li className="uppercase mb-[10px]">
              <span className="block pb-0 text-2xl font-black">
                bistro boss
              </span>
              <span className="text-lg pt-0 font-bold tracking-[0.25em]">
                restaurant
              </span>
            </li>
          </Link>

          {isAdmin ? (
            <>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink
                  to="/dashboard/adminhome"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FaHome className="mr-3"></FaHome>
                  admin home
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/additem">
                  <FaUtensils className="mr-3"></FaUtensils>
                  add items
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/manageitems">
                  <AiOutlineBars className="mr-3"></AiOutlineBars>
                  manage items
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/bookings">
                  <AiTwotoneBook className="mr-3"></AiTwotoneBook>
                  manage bookings
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/allusers">
                  <FaUsers className="mr-3"></FaUsers>
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink
                  to="/dashboard/userhome"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FaHome className="mr-3"></FaHome>
                  user home
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt className="mr-3"></FaCalendarAlt>
                  reservation
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/history">
                  <FaWallet className="mr-3"></FaWallet>
                  payment history
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart className="mr-3"></FaShoppingCart>
                  my cart
                  <div className="badge badge-error">+{cart?.length || 0}</div>
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/review">
                  <FaComments className="mr-3"></FaComments>
                  add review
                </NavLink>
              </li>
              <li className="mb-2 text-base uppercase font-medium">
                <NavLink to="/dashboard/mybooking">
                  <FaCalendarCheck className="mr-3"></FaCalendarCheck>
                  my booking
                </NavLink>
              </li>
            </>
          )}

          <hr className="text-white mb-2" />
          <li className="mb-2 text-base uppercase font-medium">
            <NavLink to="/">
              <FaHome className="mr-3"></FaHome>
              home
            </NavLink>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <NavLink to="/menu">
              <FaBars className="mr-3"></FaBars>
              menu
            </NavLink>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <NavLink to="/orderPage/salad">
              <FaShoppingBag className="mr-3"></FaShoppingBag>
              shop
            </NavLink>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <NavLink to="/contact">
              <FaEnvelope className="mr-3"></FaEnvelope>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
