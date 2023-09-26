import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Categories", href: "#" },
  { name: "Forum", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact Us", href: "#contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-950  inset-x-0 top-0 z-50 sticky">
      <nav
        className="flex  items-center justify-between py-1 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex mt-2  lg:flex-1 ">
          <a href="/" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Your Company</span>
            <img
              className="h-14 w-auto ml-4"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAdgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EADcQAAEEAQIEAgYIBwEAAAAAAAABAgMEEQUGEhMxQSFRByIycYGRFEJSYaHB0fBEYnKDoqOzI//EABkBAQEAAwEAAAAAAAAAAAAAAAACAQQFA//EACgRAAIBAgQFBAMAAAAAAAAAAAABAgMREiExUQQFQWGREyLB0TJxsf/aAAwDAQACEQMRAD8A4eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE8QZK0azTxxJ1e5EAM7dMvvZxx053t+0yNXJ+Bqq1UVUVMKnVFPuCaWB6PgkfG5OjmOwqfEnau55JWtg1yrDqtfoqzJwzN/pkTxz78kttaIpJMr+DzBa9Q21WuadJq+2LElunEmbNaRE59X73IntN+9CvafSn1G9FTqsV8srsMT99hGcWr7DC72PilUsXbMdepC+aaRcNjYmVU6fono0p6dQk1Xds6uZE3jWpWX5Iruqqq4TCd+6li2btqptyJqRf8AtbmbiWXuvVVx5N6fgVr0wbjcssGhVJFRI8TWFauPW+q34e18UOTLjKnE11RoZR6vsbcuHVKGKepQdbgsS257i6YtCB78shSPgaxvRETPXwx71ypFGevE6zM5qqqu5b3qvf1Wq78jAp11lkaQABkAAAAAAAkNvx83WqbPOVCPJnZzOPctFP5lX5NVSZ5RZdNXmkQ3YAFEEhoer3NE1GK/p0vLnjXv7L07tcndF8jqe1dMoPmk1ypSbUS6/mxQIvFyWK3HC33qqr7sJ2OQ14+bPHHnHG9G/NcHcHJ9DociD1Vc5IYsduJ2EX4Iqr8DmcylaKjHV/w6fLaablN9CTbcjgpW9TsPVsEcblRU68De6e9cr7uE4BqNua/clt2XK6WZ6vcrlyuV951L0nai7T9vw6bA6NjbTkZwIiq7lt8VXPbx4U6HJV6mOWUcMHU30/SPPj53nh2JfaUKWNcZCqe1BY/4vIcs3o3j5286MS/Xjnb/AKXla7IdFP3tdl8mieAAswAAAAAACw7Bj49z11+wyR3+Kp+ZXjc0rUrOlW0tU3NbKjVblzc+CkVIuUGkelGShUUn0NV6cLlRyKi57nmPItMW/tbb4S/RJ2/ZlgRU/DBtM1rbGs+prekLp0zv4vT18EXzVmP1I9Sovyj4d/oqUabftl5VvsprHK12UXDk6L5HU5d20Iq+k6ja5nC5kkvLY3KrIicGPLq53yKhr2zrOn1E1LTrEep6S7pbr+PB9z2/VUhZ7U1yGpXf4trR8uJrU65crvnlxE6dPiLPWxdGvOiml1NncWtWdd1N9yfwTCNjjTxSNqdkItehaae2atOuy7ui4tKFyZZVjTM8ie7t++hspvDTdKw3b23Kcap4JYupzZF/T5lKaSw043S8ESg74qjzfkx+iViv3/pa4XhTm5X+08qtqLkWJYV6xvc35LguKelTdTXIsVitG1OjG124KbZnfZsSzy445Xq92EwmVXKikqnqOc1bJdb79luRLDayMYAPcgAAAAAAAAAHuTwAEvtvceobdufSKEnqO8JYH+MczfJzfz6m0mu0Kms39R0zTGxc1c043+KVlX2seffBXgQ6cW27alRm4u6M1u1NcsPnsyvlleuXPeuVUxKeAvQw3fUAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"
              alt=""
            />
          </a>
        </div>

        {/* FOR MOBILE  */}
        <div className="flex mt-2 mb-1 lg:hidden">
          <div className="relative flex items-center w-full mr-12 h-12 rounded-lg focus-within:shadow-lg bg-slate-800 overflow-hidden  ">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="inline-block w-96   px-4 py-3 text-slate-100 bg-slate-800  focus:border-gray-300   focus:outline-none h-8 mt-1 "
              placeholder="Search..."
            />
            {/* <button className="px-4 h-8 mt-1 ml-2 text-white bg-green-700  rounded ">
                    Search 
                    🔍&#128269;&#x1F50D;
                </button> */}
          </div>

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 mr-7 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex mt-2 lg:gap-x-12 ">
          <a
            href="#home"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Home
          </a>

          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md  text-sm font-medium"
          >
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2  font-semibold  shadow-sm  ">
                  Categories
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-300"
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block  text-sm  left-1"
                          )}
                        >
                          <Menu
                            as="div"
                            className="relative block"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="hover"
                          >
                            <div className="w-full">
                              <Menu.Button className="inline-flex w-full  gap-x-1.5 px-3 py-2  text-sm  shadow-sm  ">
                                School
                                <ChevronDownIcon
                                  className={classNames(
                                    active ? " text-gray-700" : "text-white","-mr-1 h-5 w-5 ")}
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
                              <Menu.Items
                                className="absolute left-52 top-0 z-10 mt-0 w-56 origin-top-right bg-slate-800 shadow-lg ring-1 ring-white ring-opacity-0 focus:outline-none"
                                id="dropdownHover"
                              >
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-white",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        High School
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-white",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Senior Secondary
                                      </a>
                                    )}
                                  </Menu.Item>                                    
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block  text-sm"
                          )}
                        >
                          <Menu
                            as="div"
                            className="relative block"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="hover"
                          >
                            <div className="w-full">
                              <Menu.Button className="inline-flex w-full  gap-x-1.5 px-3 py-2  text-sm  shadow-sm  ">
                                University
                                <ChevronDownIcon
                                  className={classNames(
                                    active ? " text-gray-700" : "text-white","-mr-1 h-5 w-5 ")}
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
                              <Menu.Items
                                className="absolute left-52 top-0 z-10 mt-0 w-56 origin-top-right bg-slate-800 shadow-lg ring-1 ring-white ring-opacity-0 focus:outline-none"
                                id="dropdownHover"
                              >
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-white",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Under Graduate (UG)
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-white",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Post Graduate (PG)
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block  text-sm"
                          )}
                        >
                          <Menu
                            as="div"
                            className="relative block"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="hover"
                          >
                            <div className="w-full">
                              <Menu.Button className="inline-flex w-full  gap-x-1.5 px-3 py-2  text-sm  shadow-sm  ">
                                Novel
                                <ChevronDownIcon
                                  className={classNames(
                                    active ? " text-gray-700" : "text-white","-mr-1 h-5 w-5 ")}
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
                              <Menu.Items
                                className="absolute left-52 top-0 z-10 mt-0 w-56 origin-top-right bg-slate-800 shadow-lg ring-1 ring-white ring-opacity-0 focus:outline-none"
                                id="dropdownHover"
                              >
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-white",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Fiction
                                      </a>
                                    )}
                                  </Menu.Item>
                                   <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="/"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-white",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Non-Fiction
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-3 py-2 text-sm"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </a>

          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Forum
          </a>
          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Blog
          </a>
          <a
            href="#contact"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Contact Us
          </a>
          <div className="relative flex items-center  mr-2 h-10 rounded-lg focus-within:shadow-lg bg-slate-800 overflow-hidden  ">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="inline-block w-52   px-2 text-slate-100 bg-slate-800  focus:border-gray-300   focus:outline-none h-8  "
              placeholder="Search..."
            />
            {/* <button className="px-4 h-8 mt-1 ml-2 text-white bg-green-700  rounded ">
                    Search 
                    🔍&#128269;&#x1F50D;
                </button> */}
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 -ml-6 mb-2 mt-4 lg:justify-end">
          <button
            type="button"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Log In <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-72  bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-300">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-14 w-auto"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAdgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EADcQAAEEAQIEAgYIBwEAAAAAAAABAgMEEQUGEhMxQSFRByIycYGRFEJSYaHB0fBEYnKDoqOzI//EABkBAQEAAwEAAAAAAAAAAAAAAAACAQQFA//EACgRAAIBAgQFBAMAAAAAAAAAAAABAgMREiExUQQFQWGREyLB0TJxsf/aAAwDAQACEQMRAD8A4eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE8QZK0azTxxJ1e5EAM7dMvvZxx053t+0yNXJ+Bqq1UVUVMKnVFPuCaWB6PgkfG5OjmOwqfEnau55JWtg1yrDqtfoqzJwzN/pkTxz78kttaIpJMr+DzBa9Q21WuadJq+2LElunEmbNaRE59X73IntN+9CvafSn1G9FTqsV8srsMT99hGcWr7DC72PilUsXbMdepC+aaRcNjYmVU6fono0p6dQk1Xds6uZE3jWpWX5Iruqqq4TCd+6li2btqptyJqRf8AtbmbiWXuvVVx5N6fgVr0wbjcssGhVJFRI8TWFauPW+q34e18UOTLjKnE11RoZR6vsbcuHVKGKepQdbgsS257i6YtCB78shSPgaxvRETPXwx71ypFGevE6zM5qqqu5b3qvf1Wq78jAp11lkaQABkAAAAAAAkNvx83WqbPOVCPJnZzOPctFP5lX5NVSZ5RZdNXmkQ3YAFEEhoer3NE1GK/p0vLnjXv7L07tcndF8jqe1dMoPmk1ypSbUS6/mxQIvFyWK3HC33qqr7sJ2OQ14+bPHHnHG9G/NcHcHJ9DociD1Vc5IYsduJ2EX4Iqr8DmcylaKjHV/w6fLaablN9CTbcjgpW9TsPVsEcblRU68De6e9cr7uE4BqNua/clt2XK6WZ6vcrlyuV951L0nai7T9vw6bA6NjbTkZwIiq7lt8VXPbx4U6HJV6mOWUcMHU30/SPPj53nh2JfaUKWNcZCqe1BY/4vIcs3o3j5286MS/Xjnb/AKXla7IdFP3tdl8mieAAswAAAAAACw7Bj49z11+wyR3+Kp+ZXjc0rUrOlW0tU3NbKjVblzc+CkVIuUGkelGShUUn0NV6cLlRyKi57nmPItMW/tbb4S/RJ2/ZlgRU/DBtM1rbGs+prekLp0zv4vT18EXzVmP1I9Sovyj4d/oqUabftl5VvsprHK12UXDk6L5HU5d20Iq+k6ja5nC5kkvLY3KrIicGPLq53yKhr2zrOn1E1LTrEep6S7pbr+PB9z2/VUhZ7U1yGpXf4trR8uJrU65crvnlxE6dPiLPWxdGvOiml1NncWtWdd1N9yfwTCNjjTxSNqdkItehaae2atOuy7ui4tKFyZZVjTM8ie7t++hspvDTdKw3b23Kcap4JYupzZF/T5lKaSw043S8ESg74qjzfkx+iViv3/pa4XhTm5X+08qtqLkWJYV6xvc35LguKelTdTXIsVitG1OjG124KbZnfZsSzy445Xq92EwmVXKikqnqOc1bJdb79luRLDayMYAPcgAAAAAAAAAHuTwAEvtvceobdufSKEnqO8JYH+MczfJzfz6m0mu0Kms39R0zTGxc1c043+KVlX2seffBXgQ6cW27alRm4u6M1u1NcsPnsyvlleuXPeuVUxKeAvQw3fUAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 ">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-700"
                >
                  Log In<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
