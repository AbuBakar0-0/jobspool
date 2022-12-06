import React from "react";
import Filter from "./Filter";

const search = () => {
  return (
    <>
      <div className="container mx-auto md:my-10">
        <form className="flex items-center flex-col sm:flex-row my-2 mx-2 sm:mx-0">
          <div className="relative w-full ">
            <div
              className="flex absolute inset-y-0 left-0 items-center
            pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5  text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg sm:text-md p-4
              focus:ring-blue-500 focus:border-blue-500
              block w-full pl-10 "
              placeholder="Job title, keywords, or company"
              required
            />
          </div>

          <div className="relative w-full sm:ml-5 mt-2 sm:mt-0">
            <div
              className="flex absolute inset-y-0 left-0 items-center
            pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 sm:text-md p-4
              text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-700 block w-full pl-10"
              placeholder="city, province, or region"
              required
            />
          </div>
          <button
            type="submit"
            className="p-4 ml-5 text-sm font-medium text-white
            bg-blue-700 rounded-lg border border-blue-700
            hover:bg-blue-800 focus:ring-4 focus:outline-none
            focus:ring-blue-300 mt-2 sm:mt-0 flex justify-center "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sm:hidden mx-3">Search</span>
          </button>
        </form>
        {/* Filters */}
        <Filter />
        <div className="items-center text-center  text-lg  sm:my-5 my-2">
          <a
            href="#postCv"
            className="text-blue-700 md:font-medium font-normal md:text-3xl text-lg"
          >
            Post your CV
          </a>
          - It only takes a few seconds
        </div>
        <div className="items-center text-center text-lg sm:my-5 my-2">
          <a
            href="#postJob"
            className="text-blue-700 md:font-medium font-normal md:text-3xl text-lg"
          >
            Employers: Post a job
          </a>
          - Your next hire is here
        </div>
        <div className="my-1  mx-2 sm:mx-0">
          <div className="text-blue-700 md:text-xl text-lg font-semibold">
            Popular Searches
          </div>
          <div className="py-2">
            <a href="#work">
              <span
                class="bg-gray-600 border-2 border-gray-600 text-lg font-medium
            inline-flex items-center text-white px-3 py-1 rounded mr-2 mt-1
            hover:bg-gray-50 hover:text-gray-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-cyan-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Work From Home
              </span>
            </a>
            <a href="#part">
              <span
                class="bg-gray-600 border-2 border-gray-600 text-lg font-medium
            inline-flex items-center text-white px-3 py-1 rounded mr-2 mt-1
            hover:bg-gray-50 hover:text-gray-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-cyan-400 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Part-time
              </span>
            </a>
            <a href="#admin">
              <span
                class="bg-gray-600 border-2 border-gray-600 text-lg font-medium
            inline-flex items-center text-white px-3 py-1 rounded mr-2 mt-1
            hover:bg-gray-50 hover:text-gray-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-cyan-400 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Administration
              </span>
            </a>
            <a href="#finance">
              <span
                class="bg-gray-600 border-2 border-gray-600 text-lg font-medium
            inline-flex items-center text-white px-3 py-1 rounded mr-2 mt-1
            hover:bg-gray-50 hover:text-gray-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-cyan-400 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Finance
              </span>
            </a>
            <a href="#it">
              <span
                class="bg-gray-600 border-2 border-gray-600 text-lg font-medium
            inline-flex items-center text-white px-3 py-1 rounded mr-2 mt-1
            hover:bg-gray-50 hover:text-gray-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-cyan-400 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                IT
              </span>
            </a>
            <a href="#retail">
              <span
                class="bg-gray-600 border-2 border-gray-600 text-lg font-medium
            inline-flex items-center text-white px-3 py-1 rounded mr-2 mt-1
            hover:bg-gray-50 hover:text-gray-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-cyan-400 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Retail
              </span>
            </a>
            <a href="#engineering">
              <span
                class="bg-gray-600 border-2 border-gray-600 text-lg font-medium
            inline-flex items-center text-white px-3 py-1 rounded mr-2 mt-1
            hover:bg-gray-50 hover:text-gray-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-cyan-400 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Engineering
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default search;
