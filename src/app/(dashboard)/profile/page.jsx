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
    <div className="bg-primary text-white h-screen flex flex-col p-12 font-poppins">
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

          <div className="font-poppins">
            <div className="flex max-sm:justify-center justify-start">
              <h1 className="font-bold font-poppins text-4xl">Dashboard</h1>
            </div>

            <div className="flex sm:flex-row flex-col bg-primary">
              <div className="bg-[#F6F6F6] m-5 p-6 rounded-2xl">
                <div className="">
                  <h1 className="text-2xl font-bold text-gray-900 max-sm:w-[50%] w-[90%]">
                    User Detail
                  </h1>
                  <div className="text-xl text-gray-600">
                    <p>
                      <span className="text-gray-400 font-normal">
                        {userData.username || "Unknown"}
                      </span>{" "}
                    </p>
                    <p>
                      <span></span>
                    </p>
                    <p>
                      <span className="text-gray-400 font-normal">
                        {userData.age || "Unknown"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="font-bold bg-teal-600 sm:w-[30%] max-sm:w-[90%] m-5 max-sm:mt-3 p-5 rounded-2xl">
                <h1 className="mb-4">Allergens</h1>
                <div className="font-normal">
                  <li>List1</li>
                  <li>List1</li>
                  <li>List1</li>
                </div>
              </div>

              {/* ICONS */}
              <div className="flex flex-row gap-5 m-5 mt-6 text-3xl text-gray-200">
                <IoSettingsSharp className="cursor-pointer" />
                <IoIosLogOut className="cursor-pointer" />
              </div>
            </div>

            <div className="flex max-sm:justify-center ">
            <div className="font-bold bg-red-400 w-[60%] max-sm:w-[90%] m-5 max-sm:mt-3 p-5 rounded-2xl">
              <h1>Recommended Food</h1>
              <div>
                <p>
                  <li>
                    Item 1
                  </li>
                  <li>
                    Item 1
                  </li>
                  <li>
                    Item 1
                  </li>
                </p>
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
