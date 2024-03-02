import React from "react";
import img1 from "../Assets/1-image.png";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <nav class="flex m-5 w-100% p-1rem sticky space-x-4">
        <Link to={"/#home"}>
          <img class="size-16 w-40 my-0.4" src={img1} alt="logo" />
        </Link>
        <main class="flex space-x-56">
          <div class="hs-dropdown relative inline-flex mt-7 ml-5">
            <Link class="flex">
              Product{" "}
              <svg
                class="hs-dropdown-open:rotate-180 size-4 justify-center align-middle my-1.5 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <Link class="flex">
              Solution{" "}
              <svg
                class="hs-dropdown-open:rotate-180 size-4 justify-center align-middle my-1.5 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <Link class="flex">
              Resources{" "}
              <svg
                class="hs-dropdown-open:rotate-180 size-4 justify-center align-middle my-1.5 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <Link class="mx-1">Enterprise</Link>
            <Link class="mx-4">Pricing </Link>
          </div>

          <div class="flex mt-7">
            <TbWorld class="size-7 w-14 mr-0.5" />
            <h4 class="mr-2">EN</h4>
            <Link class="mx-1 w-4/6 text-center">Contact Sales</Link>
            <Link class="mx-2">Login</Link>
            <button class="flex align-middle justify-center bg-blue-500 rounded-full w-9/12 h-9 text-sm p-1.5 mx-2">
              Sign up free <FaArrowRightLong class="text-white my-1 mx-2" />{" "}
            </button>
          </div>
        </main>
      </nav>
    </>
  );
};

export default Header;
