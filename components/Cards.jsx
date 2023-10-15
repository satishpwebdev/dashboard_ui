import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbFileInvoice, TbShoppingBag } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div className="bg-white p-2 flex items-center justify-between w-full gap-2 rounded-lg py-4">
        <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center">
          <AiOutlineDollarCircle fontSize={50} className=" text-green-500" />
        </div>
        <div className="flex flex-col justify-center items-start ">
          <h2 className="text-sm text-gray-400">Earning</h2>
          <h3 className="text-lg font-semibold">$198K</h3>
          <div className="text-xs flex items-center ">
            <span className="flex items-center text-green-500">
              <BsArrowUpShort className="" size={19}></BsArrowUpShort>23%
            </span>
            <h3 className="text-xs px-1">this month</h3>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 flex items-center justify-between w-full gap-3 rounded-lg py-4">
        <div className="bg-purple-100 w-24 h-24  rounded-full flex items-center justify-center">
          <TbFileInvoice size={40} className=" text-purple-500" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm text-gray-400">Orders</h2>
          <h3 className="text-lg font-semibold">$2.4K</h3>
          <div className="text-xs flex items-center ">
            <span className="flex items-center text-green-500">
              <BsArrowUpShort className="" size={20}></BsArrowUpShort>23%
            </span>
            <h3 className="text-xs px-1"> this month</h3>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 flex items-center justify-between w-full gap-3 rounded-lg py-4">
        <div className="bg-sky-100 w-24 h-24  rounded-full flex items-center justify-center">
          <LuWallet size={40} className=" text-sky-500" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm text-gray-400">Balance</h2>
          <h3 className="text-lg font-semibold">$2.4K</h3>
          <div className="text-xs flex items-center ">
            <span className="flex items-center text-green-500">
              <BsArrowUpShort className="" size={19}></BsArrowUpShort>23%
            </span>
            <h3 className="text-xs px-1">this month</h3>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 flex items-center justify-between w-full gap-3 rounded-lg py-4">
        <div className="bg-red-100 w-24 h-24  rounded-full flex items-center justify-center">
          <TbShoppingBag size={40} className=" text-red-400" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm text-gray-400">Sales</h2>
          <h3 className="text-lg font-semibold">$89K</h3>
          <div className="text-xs flex items-center ">
            <span className="flex items-center text-green-500">
              <BsArrowUpShort className="" size={19}></BsArrowUpShort>23%
            </span>
            <h3 className="text-xs px-1">this month</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
