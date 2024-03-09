import Link from "next/link";
import React from "react";
import { LiaStarSolid } from "react-icons/lia";

import { recipeData } from '../../../lib/data'

const recipePage = () => {
 
  return (
    <div className="bg-primary font-poppins h-full pt-0">
      <h1 className="text-white text-3xl font-bold flex justify-center items-center">Handpicked Collection of Recipes</h1>
      <div className="flex flex-wrap  items-center justify-center">
        {recipeData.map((item, index) => (
          <Link key={index} href={`/recipe/${item.id}`}>
            <div className="hover:scale-105 duration-300 transition ease-in-out cursor-pointer">
              <Card img={item.img} title={item.title} des={item.des} price={item.price} rating={item.rating} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Card = ({ img, title, des, price, rating }) => {
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(<LiaStarSolid className="text-yellow-500" key={i} />);
      } else {
        stars.push(<LiaStarSolid key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };
  return (
    <div className="flex items-center p-10">
      <div className="flex rounded-md shadow-md bg-white w-80 h-auto">
        <div className="w-full">
          <img
            src={`${img}`}
            alt="Placeholder"
            className="w-full h-[16rem] rounded-t-lg object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{des}</p>
            <div className="flex mt-3">
              {renderStars()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default recipePage;
