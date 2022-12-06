import React from "react";
import icon from "../images/icons.png";

const Navbar1 = () => {
  return (
    <>
      <nav className="p-3 bg-slate-300 rounded border-gray-200">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a
            href="#icon"
            className="flex items-center bg-gray-50 px-3 py-1 rounded-lg"
          >
            <img src={icon} className="mr-3 h-6 sm:h-10" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              JobsPool
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-black rounded md:hidden focus:outline-none focus:ring-2 focus:ring-blue-800"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#find"
                  className="block py-2 pr-2 pl-1"
                  aria-current="page"
                >
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#reviews" className="block py-2 pr-2 pl-1">
                  Companies Reviews
                </a>
              </li>
              <li>
                <a
                  href="#post"
                  className="block py-2 pr-4 pl-1 border-r-2 border-white"
                >
                  Employers / Post Job
                </a>
              </li>
              <li>
                <a href="#notification" className="block py-2 -ml-2">
                  <svg
                    className="h-6 w-6 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />{" "}
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#profile" className="block py-2">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav
        className="relative w-100 bg-gray-100
      text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg"
      >
        <div className="container p-3 display-inline-block flex  justify-between al">
          <div className=" text-black text-2xl">JobsPool</div>
          <div className="menubar inline display-inline-block">
            <a
              className="text-md text-black mx-2 hidden lg:inline-block"
              href="#a"
            >
              Find Jobs
            </a>
            <a
              className="text-md text-black mx-2 hidden lg:inline-block"
              href="#a"
            >
              Companies review
            </a>
            <div className="inline text-md text-black ">
              <svg
                className="h-8 w-8 text-black mx-2 inline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                <line x1="8" y1="9" x2="16" y2="9" />{" "}
                <line x1="8" y1="13" x2="14" y2="13" />
              </svg>
              <svg
                className="h-8 w-8 text-black mx-2 inline"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />{" "}
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <svg
                className="h-8 w-8 text-black mx-2 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="hidden lg:inline-block">|</span>{" "}
              <p className="hidden lg:inline-block"> Employers / Post Job</p>
              <a href="#a">
                <svg
                  className="h-8 w-8  text-black  lg:hidden inline-block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <line x1="3" y1="12" x2="21" y2="12" />{" "}
                  <line x1="3" y1="6" x2="21" y2="6" />{" "}
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar1;
