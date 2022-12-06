import React from "react";
import addvertise from "../images/advertise.png";
import view from "../images/view.png";
import register from "../images/register.png";
const analytics = () => {
  return (
    <>
      <div className="mx-2 sm:mx-0">
        <section className="p-3 container sm:mx-auto w-full rounded-2xl  bg-gray-200 h-100 mb-5">
          <div className="flex justify-center text-blue-700 text-lg font-semibold rounded-t-2xl sm:py-3 py-2 mx-1 bg-gray-300  md:text-xl">
            JobsPool by the numbers
          </div>
          <div className="flex justify-center mt-2 flex-col sm:flex-row sm:py-3 py-2">
            <div
              className="
            container
            text-2xl md:text-xl mb-2
            rounded"
            >
              <div class="rounded-md shadow-xl border-l-8 border-blue-300 bg-gray-50 text-center hover:shadow-lg hover:shadow-gray-800    mx-1 py-3 ">
                <img
                  src={addvertise}
                  className="w-16 h-16 mb-3 inline-block"
                  alt="Logo"
                />
                <h2 class="title-font font-medium text-lg md:text-xl  text-gray-900">
                  84.5 K
                </h2>
                <p class="leading-relaxed text-base md:text-lg">
                  Job advertised (monthly average)
                </p>
              </div>
            </div>
            <div
              className="
            container
            text-2xl md:text-xl mb-2
            rounded"
            >
              <div class="rounded-md shadow-xl border-l-8 border-rose-300 bg-gray-50 text-center hover:shadow-lg hover:shadow-gray-800    mx-1 py-3 ">
                <img
                  src={view}
                  className="w-16 h-16 mb-3 inline-block"
                  alt="Logo"
                />
                <h2 class="title-font font-medium text-lg md:text-xl  text-gray-900">
                  8.2 M
                </h2>
                <p class="leading-relaxed text-base md:text-lg">
                  Job posting views (monthly average)
                </p>
              </div>
            </div>
            <div
              className="
          container
          text-2xl md:text-xl mb-2
          rounded"
            >
              <div class="rounded-md shadow-xl border-l-8 border-green-300 bg-gray-50 text-center hover:shadow-lg hover:shadow-gray-800    mx-1 py-3">
                <img
                  src={register}
                  className="w-16 h-16 mb-3 inline-block"
                  alt="Logo"
                />
                <h2 class="title-font font-medium text-lg md:text-xl text-gray-900">
                  23.1 K
                </h2>
                <p class="leading-relaxed text-base md:text-lg">
                  Employers (already registered)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default analytics;
