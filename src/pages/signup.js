import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access
        </div>

        <div className="mt-10">
          <form
            action="#"
            onSubmit={handleSubmit(async (data) => {
              try {
                setLoading(true);
                await axios.post("http://localhost:4040/user", data);
                toast.success("Account created successfully");
                setLoading(false);
                navigate("/signin");
              } catch (err) {
                setLoading(false);
                toast.error(err.response.data.error);
              }
            })}
          >
            <div className="flex flex-col mb-5">
              <label for="name" className="mb-1 text-xs text-gray-600">
                Names:
              </label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  id="name"
                  type="name"
                  {...register("name", {
                    required: "please enter your full names",
                  })}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-green-300
                  "
                  placeholder="Enter your full-Name"
                />
                <p className="text-red-700 text-xs">{errors.name?.message}</p>
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label
                for="name"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Contact:
              </label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  id="contact"
                  type="contact"
                  {...register("contact", {
                    required: "please enter your contact",
                  })}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-green-300
                  "
                  placeholder="Enter your Contact"
                />
                <p className="text-red-700 text-xs">
                  {errors.contact?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Email Address:
              </label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "please enter your email",
                  })}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-green-300
                  "
                  placeholder="Enter your email"
                />
                <p className="text-red-700 text-xs">{errors.email?.message}</p>
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "please enter your password",
                    minLength: {
                      value: 8,
                      message: "password must be at least 8 characters",
                    },
                  })}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-green-300
                  "
                  placeholder="Enter your password"
                />
                <p className="text-red-700 text-xs">
                  {errors.password?.message}
                </p>
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-emerald-900
                  hover:bg-green-800
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                 
                "

                // iyo ushaka gukoresha if idafite else ($$())
              >
                {loading && (
                  <>
                    <div className="grid-1 my-auto h-5 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-white border-4 "></div>
                    <div className="grid-2 my-auto -mx-1"> </div>
                  </>
                )}

                <span className="mr-2 uppercase ">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
          >
            <span className="ml-2">
              If have an account?
              <a
                href="signin"
                className="text-xs ml-2 text-blue-500 font-semibold"
              >
                Login here
              </a>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
