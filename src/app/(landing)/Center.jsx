import React from "react";

const Center = () => {
  return (
    <div className="flex items-center justify-center font-poppins mt-6 mx-16">
      <div className="flex w-full text-gray-900 bg-yellow-100 rounded-3xl">
        <img
          src="./about/fruits.png"
          alt="About Us Image"
          className="w-[30%] object-cover hidden sm:block rounded-t-3xl rounded-b-3xl"
        />
        <div className="p-4 max-md:px-6 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-700 max-md:text-sm">
            Our mission at OptiHealth Cuisine is to empower individuals on their path to optimal well-being by seamlessly merging healthcare and food technology. What sets us apart is our unique blend of cutting-edge technology and a profound understanding of healthcare and nutrition. We go beyond conventional approaches, bridging the gap between your health and your plate, offering personalized recommendations to help you reach your wellness goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Center;