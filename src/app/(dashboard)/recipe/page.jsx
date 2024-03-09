"use client";

import Link from "next/link";
import { LiaStarSolid } from "react-icons/lia";
import axios from "axios";
import { recipeData } from '../../../lib/data'
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


const getRecommendedProducts = (userActivityLevel) => {
  // Filter products with high protein content
  const highProteinProducts = recipeData.filter(product => {
    const protein = product.nutrition.find(item => item.name === 'Protein');
    return protein && parseFloat(protein.size) >= 10; // Assuming protein size is a string representing grams
  });

  // Filter products based on the user's activity level
  if (userActivityLevel === 'high') {
    // Apply additional filtering logic for high activity level
    // Example: Add more conditions or apply specific filters
    // For now, returning all high protein products
    return highProteinProducts;
  } else {
    // For other activity levels, return only high protein products
    return highProteinProducts;
  }
};

// const getNonAllergicProducts = (userAllergen) => {
//   return recipeData.filter(product => {
//     // Check if product description contains the allergen
//     return !product.des.toLowerCase().includes(userAllergen.toLowerCase());
//   });
// };

const RecipePage = () => {
  // const [userData, setUserData] = useState(null);
  // const [recommendedProducts, setRecommendedProducts] = useState([]);
  // const [filteredRecipe, setFilteredRecipe] = useState([]);
  // console.log("userData ", userData);

  // const getUserDetails = async () => {
  //   try {
  //     const res = await axios.get("/api/me");
  //     console.log("res.data is ", res.data);
  //     setUserData(res.data.data); // Set user data received from the API response

  //   } catch (error) {
  //     console.log(error.message);
  //     toast.error("Failed to fetch user details");
  //   }
  // };

  // useEffect(() => { 
  //   getUserDetails();
  // }, []);

  // useEffect(() => {
  //   if (userData) {
  //     const products = getNonAllergicProducts(userData.allergen);
  //     console.log('Recommended products:', products);
  //     setFilteredRecipe(products);
  //   }
  // }, [userData]);


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

export default RecipePage;
