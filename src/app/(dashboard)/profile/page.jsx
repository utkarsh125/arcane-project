"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

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

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/me");
        console.log("res.data is ", res.data);
        setUserData(res.data.data); // Set user data received from the API response
      } catch (error) {
        console.log(error.message);
        toast.error("Failed to fetch user details");
      }
    };
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
                          <h1 className="text-xl font-semibold text-gray-100 max-sm:w-[50%] w-[90%]">
                            User Detail
                          </h1>
                          <div className="text-xl text-gray-200">
                            <p>
                              <span className="font-normal">
                                {userData.username || "Unknown"}
                              </span>{" "}
                            </p>
                            <p>
                              <span></span>
                            </p>
                            <p>
                              <span className="text-gray-200 font-normal">
                                {userData.age || "NA"}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-teal-700 to-green-900 shadow-2xl my-5 mx-2  mb-0 p-6 w-full rounded-2xl">
                        <div className="">
                          <h1 className="text-xl font-semibold text-gray-100 max-sm:w-[50%] w-[90%]">
                            Allergens
                          </h1>
                          <div className="text-xl text-gray-200 mt-3">
                            <p>
                              <li>
                                Item1
                              </li>
                              <li>
                                Item1
                              </li>
                              <li>
                                Item1
                              </li>
                              <li>
                                Item1
                              </li>
                            </p>
                            <p>
                              <span></span>
                            </p>
                          </div>
                        </div>
                      </div>

                      
                    </div>
                  </div>

                  <div className="flex font-bold bg-gradient-to-r from-red-700 to-red-500 shadow-2xl max-sm:w-[90%] m-5 mb-0 max-sm:mt-3 p-5 md:flex-col flex-col rounded-2xl">
                    <h1 className="mb-4">Activity Level</h1>
                    <div className="font-normal">
                      <p>ACTIVITY_LEVEL</p>
                    </div>
                  </div>
                </div>

                {/* <div className="flex max-sm:justify-center ">
                <div className="font-bold bg-gradient-to-r from-red-700 to-red-500 shadow-2xl m-5 p-5 rounded-2xl">
                  <h1>Recommended Food</h1>
                  <div>
                    <p>
                      <li>Item 1</li>
                      <li>Item 1</li>
                      <li>Item 1</li>
                    </p>
                  </div>
                </div>
              </div> */}

                {/* BMI Calculator */}
                <div className="w-full flex justify-center">
                  <div className="font-bold bg-black  w-[80%] max-sm:w-[90%] m-5 max-sm:mt-3 p-5 rounded-2xl shadow-2xl">
                    <h1 className="text-2xl">Calculate Your BMI</h1>
                    <div>
                      <div className="flex items-center lg:flex-row md:flex-col justify-center font-normal p-6 gap-5">
                        <label htmlFor="" className="text-xl">Weight</label>
                        <input
                          type="text"
                          className="opacity-90 pl-2 py-2 md:px-3 rounded-full font-normal"
                          placeholder="Enter your weight"
                        />
                      </div>
                      <div className="flex font-normal items-center lg:flex-row md:flex-col justify-center p-6 pt-0 gap-5">
                        <label htmlFor="" className="text-xl">Height</label>
                        <input
                          type="text"
                          className="opacity-90 pl-2 py-2 md:px-3 rounded-full font-normal"
                          placeholder="Enter your height"
                        />
                      </div>

                      <div>
                        <div className="bg-white text-primary p-3 hover:bg-yellow-500 bg:text-black hover:cursor-pointer rounded-full flex justify-center items-center">
                          <h3 className="">Calculate</h3>
                        </div>
                      </div>
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
