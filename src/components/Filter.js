import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Filter = () => {
  return (
    <>
      <div className="container sm:mx-auto md:my-5 mx-2">
        {/* <div className="text-blue-700 md:text-xl text-lg font-semibold">
            Filters
          </div> */}
        <div className="my-2 sm:my-0">
          {/* Salary */}
          <Menu as="div" className="relative inline-block mr-2 mt-1">
            <div>
              <Menu.Button className="inline-flex w-full bg-gray-600 border-2 border-gray-600 text-white hover:bg-gray-50 hover:text-gray-800  justify-center rounded-md  px-4 py-2 text-base font-medium  shadow-sm ">
                Salary
                <ChevronDownIcon
                  className="-mr-2 ml-1 h-7 w-7 text-cyan-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Rs/- below - 50k
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Rs/- 100k - 150k
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Rs/- 150k - 200k
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Rs/- 200k - above
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Date */}
          <Menu as="div" className="relative inline-block mr-2 mt-1">
            <div>
              <Menu.Button className="inline-flex w-full bg-gray-600 border-2 border-gray-600 text-white hover:bg-gray-50 hover:text-gray-800  justify-center rounded-md  px-4 py-2 text-base font-medium  shadow-sm ">
                Date Posted
                <ChevronDownIcon
                  className="-mr-2 ml-1 h-7 w-7 text-cyan-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 border-2 border-gary-800">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Last 24 hours
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Last 3 days
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Last 7 days
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Last 14 days
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-base"
                        )}
                      >
                        Show all
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Job Type */}
          <Menu as="div" className="relative inline-block mr-2 mt-1">
            <div>
              <Menu.Button className="inline-flex w-full bg-gray-600 border-2 border-gray-600 text-white hover:bg-gray-50 hover:text-gray-800  justify-center rounded-md  px-4 py-2 text-base font-medium  shadow-sm ">
                Job Type
                <ChevronDownIcon
                  className="-mr-2 ml-1 h-7 w-7 text-cyan-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Full-time{" "}
                        {/* <span class="bg-gray-600 text-gray-50 text-sm font-medium mr-2 px-2 py-1 rounded-full ">
                          12
                        </span> */}
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Contract
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Part-time
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-base"
                        )}
                      >
                        Internship
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-base"
                        )}
                      >
                        Temporary
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Location */}
          <Menu as="div" className="relative inline-block mr-2 mt-1">
            <div>
              <Menu.Button className="inline-flex w-full bg-gray-600 border-2 border-gray-600 text-white hover:bg-gray-50 hover:text-gray-800  justify-center rounded-md  px-4 py-2 text-base font-medium  shadow-sm ">
                Location
                <ChevronDownIcon
                  className="-mr-2 ml-1 h-7 w-7 text-cyan-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Islamabad / Rawalpindi
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Lahore
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Karachi
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        All cities
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Experience Level */}
          <Menu as="div" className="relative inline-block mr-2 mt-1">
            <div>
              <Menu.Button className="inline-flex w-full bg-gray-600 border-2 border-gray-600 text-white hover:bg-gray-50 hover:text-gray-800  justify-center rounded-md  px-4 py-2 text-base font-medium  shadow-sm ">
                Experience Level
                <ChevronDownIcon
                  className="-mr-2 ml-1 h-7 w-7 text-cyan-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        No Experience
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Less than 1 year
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        1 year to less than 3 year
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        3 year or more <span className="">123</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Company */}
          <Menu as="div" className="relative inline-block mr-2 mt-1">
            <div>
              <Menu.Button className="inline-flex w-full bg-gray-600 border-2 border-gray-600 text-white hover:bg-gray-50 hover:text-gray-800  justify-center rounded-md  px-4 py-2 text-base font-medium  shadow-sm ">
                Company
                <ChevronDownIcon
                  className="-mr-2 ml-1 h-7 w-7 text-cyan-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Systems Limited
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        NETSOL Technologies
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        United Sol
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        10Pearls
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Search all
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Education / Training */}
          <Menu as="div" className="relative inline-block mr-2 mt-1">
            <div>
              <Menu.Button className="inline-flex w-full bg-gray-600 border-2 border-gray-600 text-white hover:bg-gray-50 hover:text-gray-800  justify-center rounded-md  px-4 py-2 text-base font-medium  shadow-sm ">
                Education / Training
                <ChevronDownIcon
                  className="-mr-2 ml-1 h-7 w-7 text-cyan-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        University
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        College or apprenticeship
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        Secondry School or job specific training
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="."
                        className={classNames(
                          active ? "bg-gray-600 text-gray-50" : "text-gray-700",
                          "block px-4 py-2 text-base"
                        )}
                      >
                        No education required
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Filter;
