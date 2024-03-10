import React from "react";

const Features = () => {
  return (
    <div className="flex justify-center items-center font-poppins p-10 m-20">
      <div className="bg-sky-blue p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-violet-600 shadow-2xl to-blue-900 text-white  rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Optimal Diet</h3>
              <p>We provide an optimal diet and guidance on achieving an optimal
                diet tailored to individual needs and goals.
              </p>
            </div>
            <div className="bg-gradient-to-r from-red-900 shadow-2xl to-red-700 rounded-lg text-white p-6">
              <h3 className="text-xl font-semibold mb-4">Allergy Based Diet</h3>
              <p>Have an allergy? No problem, our personalized Allergy filters will
                help you to be selective with your diet and still be healthy.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Food Suggestions</h3>
              <p>Want to gain muscles or burn some fat? Our BMI Based Food Suggestion
                System has got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
