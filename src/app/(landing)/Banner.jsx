import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary mx-4 lg:mx-56 xl:mx-72 font-poppins flex lg:flex-row flex-col items-center justify-center ">

      <div className="w-full flex justify-center mt-[75px] ">
        <div className="w-full max-lg:flex items-center justify-center flex-col">
          <h1 className="text-white text-4xl">
            Have a <span className="font-bold text-teal-200">DELICIOUS</span> meal with us.
          </h1>
          <div>
            <p className="text-gray-300 mt-2">
              Your Health, Your Way - Nourish, Thrive and Connect.
            </p>

            <div className="flex mt-5 max-lg:items-center justify-center flex-col">
              <Link href="/recipe">
                <div className="px-5 py-3 hover:cursor-pointer flex justify-center items-center lg:w-[45%] bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-gray-200 rounded-lg">
                  Let&apos;s Clock You In!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <img src="./landing/banner-food.png" className="lg:w-[55%] md:w-[50%] w-[70%] object-contain mt-11" alt="" />

      <div>

      </div>
    </div>
  );
};

export default Banner;