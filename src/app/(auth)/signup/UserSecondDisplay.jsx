"use client";

import { FaAngleRight } from "react-icons/fa";
import React, { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/navigation";



const UserDetails = ({ activityLevel, setActivityLevel, setStage }) => {
    const router = useRouter();

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const updateUserDetails = async () => {
        // try {
        //     const response = await axios.patch('/api/me', {
        //         gender: gender,
        //         age: selectedOption
        //     });
        //     router.push("/recipe");

        //     // console.log(response.data); // Log the response from the server
        // } catch (error) {
        //     console.error('Error updating user details:', error);
        // }
        // setSignup(true);
    };


    return (
        <div className="bg-primary w-full h-screen flex relative justify-center pb-14">

            <div className="flex flex-col items-center justify-center tracking-wider">
            <h1 className="text-white font-poppins text-2xl mb-14">Enter your physical Activity Level</h1>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div onClick={() => setActivityLevel("low")} className={`${activityLevel === 'low' ? "bg-white" : ""} border-2 border-white w-[20rem] text-center py-4 rounded-xl cursor-pointer`}>
                        <span className={`text-2xl ${activityLevel === 'low' ? "text-primary" : "text-white "}`}>Lightly Active</span>
                    </div>
                    <div onClick={() => setActivityLevel("medium")} className={` ${activityLevel === 'medium' ? "bg-white" : ""} border-2 border-white w-[20rem] text-center py-4  rounded-xl  cursor-pointer`}>
                        <span className={` text-2xl ${activityLevel === 'medium' ? "text-primary " : "text-white"}`}>Moderately Active</span>
                    </div>
                    <div onClick={() => setActivityLevel("high")} className={` ${activityLevel === 'high' ? "bg-white" : ""} border-2 border-white w-[20rem] text-center py-4  rounded-xl cursor-pointer`}>
                        <span className={` text-2xl ${activityLevel === 'high' ? "text-primary " : "text-white"}`}>Very Active</span>
                    </div>
                </div>

            </div>
            {
                activityLevel && (

                    <div div className="absolute bottom-0 right-44 flex items-end justify-end mt-10 pb-14">
                        <div onClick={() => setStage("third")} className="flex cursor-pointer bg-white text-2xl px-4 gap-4 py-3 rounded-xl items-center justify-center">
                            <span className="text-black ">Next</span>
                            <FaAngleRight />
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default UserDetails