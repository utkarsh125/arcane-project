"use client";

import { FaAngleRight } from "react-icons/fa";
import React, { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/navigation";



const UserDetails = ({ gender, selectedOption, setGender, setSelectedOption, setSignup }) => {
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

            <div className="flex flex-col items-center justify-center">
                <div className='flex items-center justify-center'>
                    <div onClick={() => setGender("male")} className={`${gender === 'male' ? "bg-white" : ""} border-2 border-white border-r-0 px-14 py-4 rounded-xl rounded-r-none cursor-pointer`}>
                        <span className={`text-2xl ${gender === 'male' ? "text-primary" : "text-white "}`}>Male</span>
                    </div>
                    <div onClick={() => setGender("female")} className={` ${gender === 'female' ? "bg-white" : ""} border-2 border-white  px-10 py-4 rounded-xl rounded-l-none cursor-pointer`}>
                        <span className={` text-2xl ${gender === 'female' ? "text-primary " : "text-white"}`}>Female</span>
                    </div>
                </div>
                <div>
                    <div className='bg-white rounded-xl flex items-center justify-center mt-10'>
                        {/* <h1 className='text-black text-2xl  py-4 px-14 border-r border-black'>Age</h1> */}
                        <select
                            value={selectedOption}
                            onChange={handleChange}
                            className=" appearance-none w-[21rem] py-4 text-center border border-white bg-primary text-white rounded-lg text-lg focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                            <option value="">Select your age</option>
                            <option value="0-11">0-11</option>
                            <option value="11-18">11-18</option>
                            <option value="19-24">19-24</option>
                            <option value="25-30">25-30</option>
                            <option value="30+">30+</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                selectedOption && gender && (

                    <div div className="absolute bottom-0 right-44 flex items-end justify-end mt-10 pb-14">
                        <div onClick={()=> setSignup(true)} className="flex cursor-pointer bg-white text-2xl px-4 gap-4 py-3 rounded-xl items-center justify-center">
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