import React, { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from "react-icons/hi";
import { useRouter } from "next/router";
import classNames from "classnames";
import {PiHandWavingBold} from 'react-icons/pi'

export default function Topbar() {
  const router = useRouter();

  return (
    <div className="bg-white md:bg-transparent h-16 px-4 mt-4 flex flex-row-reverse items-center border-b border-gray-200 justify-between">
      <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm rounded-lg focus:outline-none active:outline-none w-full h-10 pl-11 pr-4"
        />
      </div>
      <div className="flex items-center gap-2 ml-2 bg-white px-4 py-1">
		<h2 className="font-md font-semibold">Hello Satish,</h2>
		<PiHandWavingBold size={23} className="text-orange-200"></PiHandWavingBold>
      </div>
    </div>
  );
}
