// components/Cards.jsx
import React from "react";

const Cards = () => {
  return (
    <div className="">

        <div className="flex items-center justify-center">
        <p className="text-3xl text-white mb-4">
          Our <span className="font-bold text-teal-200">Protein</span> Packed
          Meals
        </p>
        </div>
      <div className="flex flex-wrap justify-center font-poppins">
        
        <div className="flex flex-wrap justify-center text-white">
          {/* Card 1 */}
          <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
            <img
              src="./landing/dosa.jpg"
              className="w-full object-cover h-[13rem]"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Healthy Oats Dosa</div>
              <p className="text-gray-300 text-base">
                Gives <span className="font-bold">344 calories.</span> Out of
                which Carbohydrates has 68grams, Protein 22grams, and rest fat
                56grams.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
            <img
              src="./landing/paranthe.jpg"
              className="w-full object-cover h-[13rem]"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Jowar Parantha</div>
              <p className="text-gray-300 text-base">
                Gives <span className="font-bold">66 calories.</span> Out of
                which Carbohydrates has 10.4grams, Protein 1.6grams, and rest
                Fat 2.2grams.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
            <img
              src="./landing/rajma.jpg"
              className="w-full object-cover h-[13rem]"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Rajma Rice</div>
              <p className="text-gray-300 text-base">
                Gives <span className="font-bold">385 calories.</span> Out of
                which Carbohydrates has 60.2grams, Protein 8.6grams, and rest
                Fat 9.2grams.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Read More
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
            <img
              src="./landing/lentils.jpg"
              className="w-full object-cover h-[13rem]"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Lentils Salad</div>
              <p className="text-gray-300 text-base">
                Gives <span className="font-bold">66 calories.</span> Out of
                which Carbohydrates has 34grams, Protein 12grams, and rest
                Fat 10grams.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-wrap justify-center font-poppins">
    //   <p className="text-3xl text-white mb-4">
    //     Our <span className="font-bold text-teal-200">Protein</span> Packed
    //     Meals
    //   </p>
    //   <div className="flex flex-wrap justify-center text-white">
    //     {/* Card 1 */}
    //     <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
    //       <img
    //         src="./landing/dosa.jpg"
    //         className="w-full object-cover h-[13rem]"
    //         alt=""
    //       />
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">Healthy Oats Dosa</div>
    //         <p className="text-gray-300 text-base">
    //           Gives <span className="font-bold">344 calories.</span> Out of
    //           which Carbohydrates has 68grams, Protein 22grams, and rest fat
    //           56grams.
    //         </p>
    //       </div>
    //       <div className="px-6 py-4">
    //         <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    //           Read More
    //         </button>
    //       </div>
    //     </div>

    //     {/* Card 2 */}
    //     <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
    //       <img
    //         src="./landing/paranthe.jpg"
    //         className="w-full object-cover h-[13rem]"
    //         alt=""
    //       />
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">Jowar Parantha</div>
    //         <p className="text-gray-300 text-base">
    //           Gives <span className="font-bold">66 calories.</span> Out of which
    //           Carbohydrates has 10.4grams, Protein 1.6grams, and rest fat
    //           2.2grams.
    //         </p>
    //       </div>
    //       <div className="px-6 py-4">
    //         <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    //           Read More
    //         </button>
    //       </div>
    //     </div>

    //     {/* Card 3 */}
    //     <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
    //       <img
    //         src="./landing/paranthe.jpg"
    //         className="w-full object-cover h-[13rem]"
    //         alt=""
    //       />
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">Jowar Parantha</div>
    //         <p className="text-gray-300 text-base">
    //           Gives <span className="font-bold">66 calories.</span> Out of which
    //           Carbohydrates has 10.4grams, Protein 1.6grams, and rest fat
    //           2.2grams.
    //         </p>
    //       </div>
    //       <div className="px-6 py-4">
    //         <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    //           Read More
    //         </button>
    //       </div>
    //     </div>

    //     {/* Card 4 */}
    //     <div className="max-w-xs mx-4 my-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden">
    //         <img src="./landing/paranthe.jpg" className="w-full object-cover h-[13rem]"alt="" />
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">Jowar Parantha</div>
    //         <p className="text-gray-300 text-base">
    //         Gives <span className="font-bold">66 calories.</span> Out of which Carbohydrates has 10.4grams, Protein 1.6grams, and rest fat 2.2grams.
    //         </p>
    //       </div>
    //       <div className="px-6 py-4">
    //         <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    //           Read More
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cards;