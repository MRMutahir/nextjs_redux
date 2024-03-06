"use client";

import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const Navbar = () => {
  const item = useSelector((state) => state);
  // console.log(item.card.length, "item>>>>>>>>>>>>>>>>>");

  // Check if item.card is defined before mapping
  let totalPrice = item.card ? item.card.map((ele, index) => ele.price) : [];

  // console.log(totalPrice, "totalPrice>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  const totalValue = totalPrice.reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  // console.log("Total Value:", totalValue);

  return (
    <>
      {" "}
      <div className="navbar bg-base-100 pt-5">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">MR store</a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            items : {item.card ? item.card.length : 0}
          </a>

          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn btn-primary"
          >
            Total
          </button>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  width={200}
                  height={200}
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {item.card.length === 0 ? (
            <h1 className="text-4xl font-serif font-semibold text-cyan-400">
              There is 0 item right now{" "}
            </h1>
          ) : (
            <>
              {" "}
              <h1 className="text-4xl my-4 font-bold font-mono">
                Here your item
              </h1>
              <div className="flex justify-between h-96">
                <div className="h-full overflow-y-scroll w-96 pl-10 p-10 bg-slate-700">
                  {item.card &&
                    item.card.map((item, index) => (
                      <div
                        className="card w-56 bg-base-100 shadow-xl my-10 "
                        key={index}
                      >
                        <figure className="h-20">
                          <Image
                            src={item.image}
                            width={50}
                            height={50}
                            alt={item.title}
                            className="object-cover"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title line-clamp-1">
                            {item.title}
                          </h2>
                          <p className="line-clamp-2">{item.description}</p>
                          <h1 className="line-clamp-1 font-extrabold text-gray-900">
                            {item.category}
                          </h1>
                          <div className="card-actions justify-start">
                            <div className="badge badge-outline">
                              {item.price}$
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="max-w-sm h-44 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-20">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Your bill total is {totalValue}$.
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Thank you for shopping with us. Please visit again!
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  uppercase"
                  >
                    download your bill{" "}
                  </a>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
