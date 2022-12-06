import React from "react";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";

const company = () => {
  return (
    <>
      <div className="mx-2 sm:mx-0">
        <div className="p-3 container sm:mx-auto rounded-2xl my-3  bg-gray-200">
          <div
            className="flex justify-center text-blue-700 sm:py-3 py-2
        rounded-t-2xl bg-gray-300  md:text-xl mx-1 text-lg font-semibold"
          >
            Popular companies
          </div>
          <div className="flex justify-center mt-2 flex-col sm:flex-row sm:py-3 py-2">
            <div
              className="
            container
            text-2xl md:text-xl mb-2
            rounded"
            >
              <div class="rounded-md shadow-xl border-l-8 border-blue-300 bg-gray-50 text-center hover:shadow-lg hover:shadow-gray-800  mx-1  py-3 ">
                <img
                  src={logo1}
                  className="w-16 h-16 mb-3 inline-block"
                  alt="Logo"
                />
                <h2 class="title-font font-medium text-lg md:text-xl  text-gray-900">
                  VMware
                </h2>
                <p class="leading-relaxed text-base md:text-lg">
                  <a href="#vmware">Description...</a>
                </p>
              </div>
            </div>
            <div
              className="
            container
            text-2xl md:text-xl mb-2
            rounded"
            >
              <div class="rounded-md shadow-xl border-l-8 border-purple-300 bg-gray-50 text-center hover:shadow-lg hover:shadow-gray-800   mx-1  py-3">
                <img
                  src={logo2}
                  className="w-16 h-16 mb-3 inline-block"
                  alt="Logo"
                />
                <h2 class="title-font font-medium text-lg md:text-xl  text-gray-900">
                  Logic Pro X
                </h2>
                <p class="leading-relaxed text-base md:text-lg">
                  <a href="#logicProX">Description...</a>
                </p>
              </div>
            </div>
            <div
              className="
            container
            text-2xl md:text-xl mb-2
            rounded"
            >
              <div class="rounded-md shadow-xl border-l-8 border-red-300 bg-gray-50 text-center hover:shadow-lg hover:shadow-gray-800  mx-1  py-3">
                <img
                  src={logo3}
                  className="w-16 h-16 mb-3 inline-block"
                  alt="Logo"
                />
                <h2 class="title-font font-medium text-lg md:text-xl  text-gray-900">
                  A2Z
                </h2>
                <p class="leading-relaxed text-base md:text-lg">
                  <a href="#atoz">Description...</a>
                </p>
              </div>
            </div>
            <div
              className="
          container
          text-2xl md:text-xl mb-2
          rounded"
            >
              <div class="rounded-md shadow-xl border-l-8 border-green-300 bg-gray-50 text-center hover:shadow-lg hover:shadow-gray-800   mx-1 py-3">
                <img
                  src={logo4}
                  className="w-16 h-16 mb-3 inline-block"
                  alt="Logo"
                />
                <h2 class="title-font font-medium text-lg md:text-xl text-gray-900">
                  Dynamic 365
                </h2>
                <p class="leading-relaxed text-base md:text-lg">
                  <a href="#dynamic">Description...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default company;
