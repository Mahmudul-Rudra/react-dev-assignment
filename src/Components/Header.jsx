import React from "react";
import img1 from "../Assets/1-image.png";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <nav class=" bg-white w-full h-20  flex justify-between sticky lg:top-0 top-0 items-center lg:px-4">
        <div class="flex font-semibold items-center">
          <Link to={"/"}>
            <svg
              width="91"
              height="32"
              viewBox="0 0 91 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer lg:ml-0 ml-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.5113 0.918836C38.2772 2.1019 38.2772 4.12974 39.5113 5.35423C40.7454 6.57935 42.7882 6.57935 44.0223 5.35423C45.2558 4.12974 45.2558 2.1019 44.0223 0.918836C42.7882 -0.306279 40.7454 -0.306279 39.5113 0.918836ZM64.3065 9.2083L61.4128 9.67274C55.8926 10.9214 52.3061 12.7105 52.3061 18.7254V30.7947L57.3279 31.8083V19.4792C57.3279 16.6684 58.9265 15.3988 61.4128 14.9294L64.3065 14.4031V9.2083ZM26.0854 30.8442L31.1073 31.8578V18.2133C31.1073 11.6653 26.0007 9.29983 22.4684 9.29983C20.0855 9.29983 18.2135 9.89105 16.5109 11.5386C14.7665 9.89105 12.6814 9.25778 10.9788 9.25778C8.55352 9.25778 6.42542 10.3134 5.02122 12.0036V9.72222L0 10.6938V30.8442L5.02122 31.8578V18.0018C5.02122 15.8051 6.63848 14.2423 9.06437 14.2423C11.4473 14.2423 13.0645 15.8051 13.0645 18.0018V30.8442L18.0857 31.8578V18.0018C18.0857 15.8051 19.7024 14.2423 22.0859 14.2423C24.4688 14.2423 26.0854 15.8051 26.0854 18.0018V30.8442ZM91 20.6079C91 26.8905 85.8529 32 79.5664 32C73.2376 32 68.0905 26.8905 68.0905 20.6079C68.0905 14.3673 73.2376 9.25778 79.5664 9.25778C85.8529 9.25778 91 14.3673 91 20.6079ZM79.5664 27.2671C75.8958 27.2671 72.8999 24.2937 72.8999 20.6079C72.8999 16.9641 75.8958 14.0321 79.5664 14.0321C83.237 14.0321 86.19 16.9641 86.19 20.6079C86.19 24.2937 83.237 27.2671 79.5664 27.2671ZM44.2347 32L39.2135 30.8442V10.5503L44.2347 9.53669V32Z"
                fill="#050038"
              />
            </svg>
          </Link>
          <Link class="lg:flex hidden ml-8 mt-[10px] mx-[0.5px] cursor-pointer items-center">
            Product{" "}
            <svg
              class="hs-dropdown-open:rotate-180 size-4 mt-1.5 mx-2"
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
          <Link class="lg:flex hidden mt-[10px] mx-[0.5px] cursor-pointer items-center">
            Solution{" "}
            <svg
              class="hs-dropdown-open:rotate-180 size-4 mt-1.5 mx-2"
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
          <Link class="lg:flex hidden mt-[10px] mx-[0.5px] cursor-pointer items-center">
            Resources{" "}
            <svg
              class="hs-dropdown-open:rotate-180 size-4 mt-1.5 mx-2"
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
          <Link class="lg:flex hidden mt-[10px] mx-[0.5px] cursor-pointer items-center">
            Enterprise
          </Link>
          <Link class="lg:flex hidden mt-[10px] mx-[10px] cursor-pointer items-center">
            Pricing{" "}
          </Link>
        </div>

        <div class="lg:flex hidden items-center font-semibold">
          <TbWorld class="size-6 mt-[10px]" />
          <h4 class="mt-[10px] ml-1.5">EN</h4>
          <Link class="mt-[10px] mx-[10px] cursor-pointer">Contact Sales</Link>
          <Link class="mt-[10px] mx-[10px] cursor-pointer">Login</Link>
          <button class="lg:flex items-center mt-[10px] px-2.5 py-2.5 bg-blue-500 text-white rounded-3xl">
            Sign up free <FaArrowRightLong class="mt-[4px] mx-[10px]" />{" "}
          </button>
        </div>
        <div class="lg:hidden mr-2">
          <Link class="text-4xl" to={"/"}>
            &#8801;
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
