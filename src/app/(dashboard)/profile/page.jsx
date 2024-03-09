"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const UserActivityMessage = ({ userData }) => {
  let proteinIntakeMessage;

  if (userData.activityLevel === "low") {
    proteinIntakeMessage = (
      <div className="font-normal">
        <p>Your activity level is <span className="font-bold">{userData.activityLevel}</span> (Daily Protein intake must be 0.8 grams per kilogram of body weight)</p>
      </div>
    );
  } else if (userData.activityLevel === "medium") {
    proteinIntakeMessage = (
      <div className="font-normal">
        <p>Your activity level is <span className="font-bold">{userData.activityLevel}</span> (Daily Protein intake must be 1.0 grams per kilogram of body weight)</p>
      </div>
    );
  } else if (userData.activityLevel === "high") {
    proteinIntakeMessage = (
      <div className="font-normal">
        <p>Your activity level is <span className="font-bold">{userData.activityLevel}</span> (Daily Protein intake must be 1.2 grams per kilogram of body weight)</p>
      </div>
    );
  } else {
    proteinIntakeMessage = (
      <div className="font-normal">
        <p>Your activity level is <span className="font-bold">{userData.activityLevel}</span> (Please consult with a nutritionist for personalized advice)</p>
      </div>
    );
  }

  return proteinIntakeMessage;
};

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  // BMI Calc starts
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const updateUserDetails = async (bmiValue) => {
    try {
      const response = await axios.patch('/api/me', {
        bmi: bmiValue,
      });
      console.log("user bmi saved in db");
      getUserDetails();
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // Convert height from cm to meters
    if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters === 0) {
      toast.error("Please enter valid weight and height.");
      return;
    }
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(1));
    updateUserDetails(bmiValue.toFixed(1));
  };

  // BMI Calc ends

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/me");
      console.log("res.data is ", res.data);
      setUserData(res.data.data); // Set user data received from the API response
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to fetch user details");
    } finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    console.log("userdata is :", userData);
  }, [userData]);

  return (
    <div className="bg-primary text-white flex flex-col p-5 md:p-10 font-poppins ">
      {userData !== null && (
        <>
          {/* <h1 className="text-5xl mb-4 text-center font-bold tracking-wide">Your Profile</h1>
          <div className="w-full flex flex-col items-center justify-center mt-10 space-y-10" >
            <div className="flex items-start justify-start gap-44 ">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold tracking-wider">Name:</h1>
                <span className="text-xl font-light tracking-wider ">{userData.username || "Unknown"}</span>
              </div>
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold tracking-wider">Email:</h1>
                <span className="text-xl font-light tracking-wider">{userData.email || "Unknown"}</span>
              </div>
            </div>
            <div>
              <button onClick={logout} className="bg-blue-700 text-white text-xl px-4 py-3 rounded-full">Logout</button>
            </div>
          </div> */}

          <div className="flex justify-center">
            <div className="font-poppins bg-gradient-to-t w-full p-8 from-gray-900 to-gray-700 rounded-3xl h-full">
              <div className="flex max-sm:justify-center justify-between">
                <h1 className="font-bold text-gray-100 font-poppins text-4xl">
                  Dashboard
                </h1>
                <div className="flex gap-5 text-4xl">
                  {/* <IoSettingsSharp className="cursor-pointer" /> */}
                  <IoIosLogOut onClick={logout} className="cursor-pointer" />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row">
                <div className="w-full flex flex-col">
                  <div className="">
                    <div className="flex w-full ">
                      <div className="bg-gradient-to-r from-violet-600 to-blue-900 shadow-2xl my-5 mx-2 mb-0 p-6 w-full rounded-2xl">
                        <div className="">
                          <h1 className="text-base font-bold text-gray-100 max-sm:w-[50%] w-[90%]">
                            User Detail
                          </h1>
                          <div className="text-gray-200 text-base">
                            <p className="mt-2">
                              <span className="font-normal">
                                {userData.username || "Unknown"}
                              </span>{" "}
                            </p>
                            <p>
                              <span></span>
                            </p>
                            <p>
                              <span className="text-gray-200 font-normal">
                                {userData.email || "NA"}
                              </span>
                            </p>
                            <p className="mt-3">
                              <span className="text-gray-200 font-medium">
                                BMI Index:{" "}
                              </span>
                              <span>{userData.bmi || "NA"}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-teal-700 to-green-900 shadow-2xl my-5 mx-2  mb-0 p-6 w-full rounded-2xl">
                        <div className="">
                          <h1 className="text-base font-bold text-gray-100">
                            Allergens
                          </h1>
                          <div className="font-normal text-gray-200 mt-3">
                            <p>
                              <span className="font-semibold">{userData.allergens} </span>allergies? No problem. Our suggestions are {userData.allergens}-free.
                            </p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="flex font-bold bg-gradient-to-r from-red-700 to-red-500 shadow-2xl max-sm:w-[90%] m-5 mb-0 max-sm:mt-3 p-5 md:flex-col flex-col rounded-2xl">
                    <h1 className="mb-4 text-base">Activity Level</h1>
                    <UserActivityMessage userData={userData} />
                  </div>
                </div>

                {/* BMI Calculator */}
                <div className="w-full flex justify-center">
                  <div className="font-bold bg-black  w-[80%] max-sm:w-[90%] m-5 max-sm:mt-3 p-5 rounded-2xl shadow-2xl">
                    <h1 className="text-2xl">Calculate Your BMI</h1>
                    <div>
                      <div className="flex items-center lg:flex-row md:flex-col justify-center font-normal p-6 gap-5">
                        <label htmlFor="" className="text-xl">Weight</label>
                        <input
                          type="number"
                          className="opacity-90 pl-2 text-black py-2 md:px-3 rounded-full font-normal"
                          placeholder="Enter your weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                      <div className="flex font-normal items-center lg:flex-row md:flex-col justify-center p-6 pt-0 gap-5">
                        <label htmlFor="" className="text-xl">Height</label>
                        <input
                          type="text"
                          className="opacity-90 pl-2 py-2 text-black md:px-3 rounded-full font-normal"
                          placeholder="Enter your height"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>

                      <div>
                        <div onClick={calculateBMI} className="bg-white text-primary p-3 hover:bg-yellow-500 bg:text-black hover:cursor-pointer rounded-full flex justify-center items-center">
                          <h3 className="">Calculate</h3>
                        </div>
                      </div>

                      {bmi !== null && (
                        <div className="mt-4 flex justify-center items-center flex-col">
                          <h3>Your BMI: {bmi}</h3>
                          {bmi < 18.5 && <p className="text-red-600">Your are underweight.</p>}
                          {bmi > 24.5 && <p className="text-red-600">Your are overweight.</p>}
                          {bmi >= 18.5 && bmi <= 24.5 && <p className="text-green-600">Healthy weight</p>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
