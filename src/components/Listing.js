import React from "react";
import Pagination from "./Pagination";

function Listing() {
  return (
    <>
      <div className="container sm:mx-auto md:my-5 ">
        <div className="my-2 sm:my-0">
          <div class="flex flex-wrap py-4 mx-2 sm:mx-0">
            <div class="md:w-2/4 w-full flex flex-col">
              {/* Search title */}
              <div className="text-blue-700 md:text-xl text-lg font-semibold px-4">
                Job Search Results
              </div>
              {/* No of Pages and Jobs */}
              <span class="text-primary mb-2 block text-base  md:text-lg md:font-semibold font-medium px-4">
                1 to 30 of 20,000
              </span>
              {/* Listing 30 */}
              <div className="border-2 border-gray-300 p-4 my-1 bg-slate-300 rounded-lg">
                <a class="inline-flex items-center" href=".">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-lg text-gray-900">
                      GRAPHICS DESIGNER
                    </span>
                    <span class="text-gray-600 text-base tracking-widest mt-0.5">
                      SolTech Solutions
                    </span>
                  </span>
                </a>
                <div className="mt-3 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Rs /- 30K to 50K
                    </span>
                  </div>
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Part Time
                    </span>
                  </div>
                </div>
                <div className="my-1 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed font-semibold text-blue-700 text-lg  rounded ">
                      Islamabad
                    </span>
                  </div>
                </div>

                <li class="leading-relaxed mb-2 flex">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                </li>

                <div class="flex items-center flex-wrap py-2 w-full">
                  <a
                    class="text-blue-700 text-base inline-flex font-semibold items-center"
                    href="."
                  >
                    Learn More
                    <svg
                      class="w-8 h-4 ml-1 mt-1 text-blue-700 font-semibold"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none sm:text-base text-sm pr-3 py-1 border-r-2 border-gray-200">
                    Apply now
                    <svg
                      class="h-6 w-6 ml-2 mt-1 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </span>
                  <span class="text-gray-600 inline-flex items-center leading-none sm:text-base text-sm">
                    6
                    <svg
                      class="w-6 h-6 ml-2 text-blue-500"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="border-2 border-gray-300 p-4 my-1 bg-slate-300 rounded-lg">
                <a class="inline-flex items-center" href=".">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-lg text-gray-900">
                      GRAPHICS DESIGNER
                    </span>
                    <span class="text-gray-600 text-base tracking-widest mt-0.5">
                      SolTech Solutions
                    </span>
                  </span>
                </a>
                <div className="mt-3 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Rs /- 30K to 50K
                    </span>
                  </div>
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Part Time
                    </span>
                  </div>
                </div>
                <div className="my-1 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed font-semibold text-blue-700 text-lg  rounded ">
                      Islamabad
                    </span>
                  </div>
                </div>

                <li class="leading-relaxed mb-2 flex">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                </li>

                <div class="flex items-center flex-wrap py-2 w-full">
                  <a
                    class="text-blue-700 text-base inline-flex font-semibold items-center"
                    href="."
                  >
                    Learn More
                    <svg
                      class="w-8 h-4 ml-1 mt-1 text-blue-700 font-semibold"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none sm:text-base text-sm pr-3 py-1 border-r-2 border-gray-200">
                    Apply now
                    <svg
                      class="h-6 w-6 ml-2 mt-1 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </span>
                  <span class="text-gray-600 inline-flex items-center leading-none sm:text-base text-sm">
                    6
                    <svg
                      class="w-6 h-6 ml-2 text-blue-500"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="border-2 border-gray-300 p-4 my-1 bg-slate-300 rounded-lg">
                <a class="inline-flex items-center" href=".">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-lg text-gray-900">
                      GRAPHICS DESIGNER
                    </span>
                    <span class="text-gray-600 text-base tracking-widest mt-0.5">
                      SolTech Solutions
                    </span>
                  </span>
                </a>
                <div className="mt-3 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Rs /- 30K to 50K
                    </span>
                  </div>
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Part Time
                    </span>
                  </div>
                </div>
                <div className="my-1 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed font-semibold text-blue-700 text-lg  rounded ">
                      Islamabad
                    </span>
                  </div>
                </div>

                <li class="leading-relaxed mb-2 flex">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                </li>

                <div class="flex items-center flex-wrap py-2 w-full">
                  <a
                    class="text-blue-700 text-base inline-flex font-semibold items-center"
                    href="."
                  >
                    Learn More
                    <svg
                      class="w-8 h-4 ml-1 mt-1 text-blue-700 font-semibold"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none sm:text-base text-sm pr-3 py-1 border-r-2 border-gray-200">
                    Apply now
                    <svg
                      class="h-6 w-6 ml-2 mt-1 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </span>
                  <span class="text-gray-600 inline-flex items-center leading-none sm:text-base text-sm">
                    6
                    <svg
                      class="w-6 h-6 ml-2 text-blue-500"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="border-2 border-gray-300 p-4 my-1 bg-slate-300 rounded-lg">
                <a class="inline-flex items-center" href=".">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-lg text-gray-900">
                      GRAPHICS DESIGNER
                    </span>
                    <span class="text-gray-600 text-base tracking-widest mt-0.5">
                      SolTech Solutions
                    </span>
                  </span>
                </a>
                <div className="mt-3 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Rs /- 30K to 50K
                    </span>
                  </div>
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed  text-gray-100 bg-gray-500 text-base font-semibold p-1 rounded px-2.5">
                      Part Time
                    </span>
                  </div>
                </div>
                <div className="my-1 flex">
                  <div className="mr-2">
                    <span class="flex-wrap w-auto leading-relaxed font-semibold text-blue-700 text-lg  rounded ">
                      Islamabad
                    </span>
                  </div>
                </div>

                <li class="leading-relaxed mb-2 flex">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                </li>

                <div class="flex items-center flex-wrap py-2 w-full">
                  <a
                    class="text-blue-700 text-base inline-flex font-semibold items-center"
                    href="."
                  >
                    Learn More
                    <svg
                      class="w-8 h-4 ml-1 mt-1 text-blue-700 font-semibold"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none sm:text-base text-sm pr-3 py-1 border-r-2 border-gray-200">
                    Apply now
                    <svg
                      class="h-6 w-6 ml-2 mt-1 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </span>
                  <span class="text-gray-600 inline-flex items-center leading-none sm:text-base text-sm">
                    6
                    <svg
                      class="w-6 h-6 ml-2 text-blue-500"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                </div>
              </div>
              {/* Pagination */}
              <Pagination />
            </div>
            {/* details */}
            <div class="md:w-2/4 flex flex-col sm:pl-4">
              <div className="border border-gray-50 p-4 my-1 bg-slate-300 rounded-lg sticky top-5">
                <a class="inline-flex items-center mb-4" href=".">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-2xl text-gray-900">
                      GRAPHICS DESIGNER
                    </span>
                    <span class="text-blue-700 text-base mt-0.5">
                      SolTech Solutions
                    </span>
                  </span>
                </a>
                <hr />
                <div class="flex mt-2 w-full mb-2">
                  <a
                    class="text-blue-700 inline-flex items-center md:mb-2 lg:mb-0 text-xl"
                    href="."
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <button class="items-end ml-auto text-white text-xl font-semibold bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full">
                    Apply
                  </button>
                </div>
                <hr />
                {/* location */}
                <h2 class="my-2 text-xl font-semibold text-gray-900">
                  Location
                </h2>
                <li class="leading-relaxed mb-2 text-lg">Islamabad</li>
                {/* location */}
                <h2 class="my-2 text-xl font-semibold text-gray-900">
                  No of Vacancies
                </h2>
                <li class="leading-relaxed mb-2 text-lg">3 Designer</li>
                {/* Requirements */}
                <h2 class="my-2 text-xl font-semibold text-gray-900">
                  Education
                </h2>
                <p class="ml-6">MSCS / MIT / BSCS / BIST</p>
                {/* Requirements */}
                <h2 class="my-2 text-xl font-semibold text-gray-900">
                  Requirement
                </h2>
                <ul class="list-none ml-6 list-inside ">
                  <li>At least 10 characters (and up to 100 characters)</li>
                  <li>At least one lowercase character</li>
                  <li>Inclusion of at least one special character</li>
                </ul>
                {/* Experience */}
                <h2 class="my-2 text-xl font-semibold text-gray-900">
                  Experience
                </h2>
                <p class="ml-6">MSCS / MIT / BSCS / BIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
