import { FaClock } from "react-icons/fa";
import { recipeData } from "../../../../lib/data";
import { LiaStarSolid } from "react-icons/lia";
import { GiCook } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const DetailedPage = ({ params }) => {
  const recipeDetailData = recipeData.find((recipe) => recipe.id === params.id);
  console.log("recipeDetailData : ", recipeDetailData.img);

  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars; i++) {
      if (i < recipeDetailData.rating) {
        stars.push(<LiaStarSolid className="text-yellow-500" key={i} />);
      } else {
        stars.push(<LiaStarSolid key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="text-white px-20 mt-6">
      {/* Navigator */}
      <div className="flex items-center mb-3 gap-2">
        <Link href="/recipe">
          <p className="text-xs font-medium cursor-pointer">Recipes</p>
        </Link>
        <FaAngleRight className="text-xs" />
        <p className="text-xs font-medium cursor-pointer">{recipeDetailData.title}</p>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <img src={recipeDetailData.img} alt="recipe image" className="w-[90%] h-[30rem] object-cover rounded-xl" />
        </div>
        <div className="w-1/2 space-y-6">
          <h1 className="text-3xl font-poppins font-light">{recipeDetailData.title}</h1>
          <div className="flex">
            {renderStars()}
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2">
              <FaClock className="text-2xl text-[#72AEB2]" />
              <span>Prep: {recipeDetailData.prepTime}</span>
            </div>
            <div className="flex gap-2">
              <GiCook className="text-2xl text-[#72AEB2]" />
              <span>{recipeDetailData.difficulty}</span>
            </div>
          </div>
          <div>
            <h1 className="text-gray-300 font-poppins tracking-wide font-light ">{recipeDetailData.des}</h1>
          </div>
          <div className="space-y-3">
            <h1 className="text-base font-poppins tracking-wide">
              Nutrition: Per serving
            </h1>
            <div className="flex gap-3 flex-wrap">
              {
                recipeDetailData.nutrition.map((item, index) => (
                  <div key={index} className="text-xs text-gray-100 w-[5rem] h-[3rem] bg-[#72AEB2] flex flex-col items-center justify-center">
                    <p className="font-medium tracking-wide">{item.name}</p>
                    <p className="font-bold">{item.size}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <RecipeMethod />
    </div>
  );
};

const RecipeMethod = () => {
  return (
    <div className="mt-12">
      <h1 className="text-3xl font-poppins font-light mb-4">Method</h1>
      <div className="max-w-xl space-y-1">
        <h3 className="text-base font-semibold">STEP 1</h3>
        <p className="leading-relaxed text-gray-200">Heat 2 tbsp of oil in a frying pan over a medium heat. Add the onion and pepper, along with a pinch of salt and fry for 10 mins or until softened. Add the garlic, pesto and ground coriander, and cook for 1 min. Tip in the beans and tomatoes along with ½ can of water, then bring to a simmer and cook uncovered for 10 mins.</p>
      </div>
    </div>
  )
}

export default DetailedPage;
