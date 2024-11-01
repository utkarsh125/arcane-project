"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import UserDetails from "./UserDetails";
import UserSecondDisplay from "./UserSecondDisplay";


const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    activityLevel: "",
    allergens: "",
  });
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("first");

  // Age Gender
  const [gender, setGender] = useState("")
  const [selectedOption, setSelectedOption] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [selectedAllergens, setSelectedAllergens] = useState("");

  const updateUserDetails = async () => {
    try {
      const response = await axios.patch('/api/me', {
        gender: gender,
        age: selectedOption
      });
      router.push("/recipe");

      // console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const onSignup = async () => {
    try {
      setLoading(true);
      const userData = {
        ...user,
        gender: gender,
        age: selectedOption,
        activityLevel: activityLevel,
        allergens: selectedAllergens,
      };
      const response = await axios.post("/api/signup", userData);
      toast.success("User registration successfull!");
      console.log("---> Signup success", response.data);

      setTimeout(() => {
        router.push("/login");
      }, 1000);

    } catch (error) {
      toast.error("Unable to register user");
      console.log("--->Signup failed", error.message);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      {
        stage === "first" && (
          <UserDetails setStage={setStage} gender={gender} setGender={setGender} selectedAllergens={selectedAllergens} setSelectedAllergens={setSelectedAllergens} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        )
      }
      {
        stage === "second" && (
          <UserSecondDisplay setStage={setStage} activityLevel={activityLevel} setActivityLevel={setActivityLevel} />
        )
      }
      {
        stage === "third" && (
          <section className="bg-primary h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  className="w-8 h-8 mr-2"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                />
                LOGO
              </a>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-8 sm:p-8">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-7" action="#">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                      >
                        Your name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <button
                      onClick={onSignup}
                      type="button"
                      className="w-full text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800"
                    >
                      {loading === true ? "signing..." : "Sign Up"}
                    </button>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      Already a user?{" "}
                      <Link
                        href="/login"
                        className="font-medium text-secondary-600 hover:underline dark:text-secondary-500"
                      >
                        Login
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )
      }
    </>

  );
};

export default SignupPage;
