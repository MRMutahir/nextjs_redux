"use client";

import React from "react";

const BillComponent = ({ totalValue }) => {
  const downloadBill = () => {
    // Creating a blob with bill content
    const billContent = `Your bill total is ${totalValue}$. Thank you for shopping with us. Please visit again!`;
    const billBlob = new Blob([billContent], { type: "text/plain" });

    // Creating a link element to trigger the download
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(billBlob);
    link.setAttribute("download", "bill.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-sm h-44 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-20">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Your bill total is {totalValue}$.
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Thank you for shopping with us. Please visit again!
      </p>
      <button
        onClick={downloadBill}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  uppercase"
      >
        Download your bill
      </button>
    </div>
  );
};

export default BillComponent;
