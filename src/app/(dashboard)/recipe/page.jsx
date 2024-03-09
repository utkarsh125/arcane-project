import React from "react";
import { LiaStarSolid } from "react-icons/lia";


const recipePage = () => {
  const data = [
    {
      img: "./cardsub/tofu.jpg",
      title: "Tofu Raw Boiled",
      des: "Tofu is a soy-based protein made by coagulating soy milk.",
      price: "1000"
    },
    {
      img: "./cardsub/oatmeal.jpg",
      title: "Oats with Milk",
      des: "Oats are whole grains consumed as oatmeal or rolled oats.",
      price: "1000"
    },
    {
      img: "./cardsub/chia.jpg",
      title: "Chia Seeds",
      des: "Chia seeds are small, nutrient-dense seeds that are protein-rich.",
      price: "1000"
    },
    {
      img: "./cardsub/soyabean.png",
      title: "Soyabean",
      des: "Soybeans are legumes that are used as staples for protein.",
      price: "1000"
    },
    {
      img: "./cardsub/brown.jpg",
      title: "Brown Rice",
      des: "Brown rice is a whole grain rice with the outer hull removed.",
      price: "1000"
    },
    {
      img: "./landing/lentils.jpg",
      title: "Lentils with Salt",
      des: " Lentils are legumes that come in various colors.",
      price: "1000"

    },
    {
      img: "./cardsub/blackbean.jpg",
      title: "Black Beans",
      des: " Black beans are a type of legume, rich in protein and antioxidants.",
      price: "1000"
    },
    {
      img: "./cardsub/barley.jpg",
      title: "Barley",
      des: "Barley is a cereal grain that is rich in fiber, vitamins, and minerals. ",
      price: "1000"
    },
  ]
  return (
    <div className="bg-primary font-poppins h-full pt-10">
      <h1 className="text-white text-3xl font-bold flex justify-center items-center">Handpicked Collection of Recipes</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {data.map((item, index) => (
          <div className="hover:scale-105 duration-300 transition ease-in-out cursor-pointer" key={index}>
            <Card img={item.img} title={item.title} des={item.des} price={item.price}/>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({img, title, des, price}) => {
  return (
    <div className="flex items-center p-10">
      <div className="flex rounded-lg shadow-md bg-white w-80 h-auto">
        <div className="w-full">
          <img
            src={`${img}`}
            alt="Placeholder"
            className="w-full h-[16rem] rounded-t-lg object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{des}</p>
            <div className="flex flex-col">
              <p className="text-gray-900 font-bold flex justify-right rounded-lg pt-4">₹{price}</p>
              <div className="flex flex-row">
                <p><LiaStarSolid /></p>
                <p><LiaStarSolid /></p>
                <p><LiaStarSolid /></p>
                <p><LiaStarSolid /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default recipePage;
