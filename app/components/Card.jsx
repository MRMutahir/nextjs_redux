"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../lib/features/Card/Card";
import Image from "next/image";

const Card = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const fetchedData = await res.json();
        setData(fetchedData);
        // console.log(fetchedData.length, ">>>>>>>>>>>>>data");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const item = useSelector((state) => state);
  // console.log(item, ">>>>>>>>>");
  return (
    <>
      {" "}
      <div className="flex justify-between w-full flex-wrap gap-4  my-10 px-5">
        {data.map((item, index) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={index}>
            <figure className="h-44 text-center">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.title}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title line-clamp-1">
                {item.title}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p className="line-clamp-2">{item.description}</p>
              <h1 className="line-clamp-1 font-extrabold text-gray-900">
                {item.category}
              </h1>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.price}$</div>
                <button
                  className="btn btn-xs bg-green-400"
                  onClick={() => {
                    dispatch(addItem(item));
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
