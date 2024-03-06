"use client";

import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const item = useSelector((state) => state);
  console.log(item.card.length, "item>>>>>>>>>>>>>>>>>");
  let totalPrice = item.card.map((ele, index) => {
    return ele;
  });

  console.log(totalPrice, "totalPrice>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  return (
    <>
      {" "}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-1">
          {/* <a className="btn btn-ghost text-xl">Total item 1 and Price 20 $</a> */}
          <a className="btn btn-ghost text-xl">
            items : {item.card.length}
            {/* {item.card} */}
            {/* {item.card.map((ele) => {
         return ele.price;
       })} */}
          </a>

          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn btn-primary"
          >
            Total
          </button>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
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
            <h1 class="text-4xl my-4 font-bold font-mono">Here your item</h1>
          <div className="flex justify-between h-96">
            <div className="h-full overflow-y-scroll w-96 pl-10 p-10 bg-slate-700">
              {" "}
              {totalPrice.map((item, index) => (
                <div
                  className="card w-56 bg-base-100 shadow-xl my-10 "
                  key={totalPrice.id}
                >
                  <figure className="h-20">
                    <img
                      src={item.image}
                      width={50}
                      height={50}
                      alt={item.title}
                      className="object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title line-clamp-1">{item.title}</h2>
                    <p className="line-clamp-2">{item.description}</p>
                    <h1 className="line-clamp-1 font-extrabold text-gray-900">
                      {item.category}
                    </h1>
                    <div className="card-actions justify-start">
                      <div className="badge badge-outline">{item.price}$</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="max-w-sm h-44 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-20">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Your bill total is 20$.
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Thank you for shopping with us. Please visit again!
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                download your bill{" "}
                {/* <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg> */}
              </a>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
