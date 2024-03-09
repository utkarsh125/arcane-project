"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get('/api/me');
        console.log("res.data is ", res.data);
        setUserData(res.data.data); // Set user data received from the API response
      } catch (error) {
        console.log(error.message);
        toast.error('Failed to fetch user details');
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
          <h1 className="text-5xl mb-4 text-center font-bold tracking-wide">Your Profile</h1>
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
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
