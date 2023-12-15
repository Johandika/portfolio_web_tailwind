import { Menu, Transition,Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.svg";
import { motion, useScroll } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineFontSize } from 'react-icons/ai';
import { PiBirdBold } from 'react-icons/pi';
import { FaReact } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';


const navigation = [
  { name: "Home", href: "/", current: location.pathname === "/", multi:false },
  { name: "Products", multi:true, items:[
    {name: "Logo", href: "/products/logo", icon:<PiBirdBold /> ,  current: location.pathname === "/"},
    {name: "Fonts", href: "/products/fonts",icon: <AiOutlineFontSize />, current: location.pathname === "/"},
    {name: "Code", href: "/products/code",icon: <FaReact />, current: location.pathname === "/"},
    {name: "UI Design", href: "/products/uidesign",icon: <MdOutlineDesignServices />, current: location.pathname === "/"},
  ]},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > scrollYProgress.getPrevious() && latest > 0.03) {
        setShowNavbar(false); // Sembunyikan navbar ketika scroll ke bawah
      } else {
        setShowNavbar(true); // Tampilkan navbar ketika scroll ke atas
      }
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={`sm:h-1 h-[2px] fixed top-0 right-0 left-0 bg-RedDarkest origin-bottom-left z-50`}
      ></motion.div>
      <Disclosure
        as="nav"
        className={`bg-Black/70 backdrop-blur-sm border-b-[0.5px] border-b-Red/20 text-white fixed top-0 left-0 right-0 z-40 ${
          showNavbar ? "transition" : "-translate-y-full transition"
        }`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-fit">
              <div className="relative flex h-16 sm:h-16 items-center justify-between ">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5 " />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between overflow-visible">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-14 sm:h-[70px] w-auto"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  {/* auto */}
                  <div className="hidden sm:ml-6 sm:flex flex-row items-center justify-center ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        item.multi === false ? (
                          <a
                            key={item.name}
                            onClick={()=>navigate(item.href)}
                            className={classNames(
                              item.current
                                ? "bg-RedDarkest/20 text-white"
                                : "text-gray-300 hover:bg-RedDarkest hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Menu as="div" className="relative inline-block text-left" key={item.name}>
                            <div>
                              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                Options
                                <ChevronDownIcon
                                  className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
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
                              // className='absolute'
                            >
                              <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                {item.items.map((submenu) => (
                                    <Menu.Item key={submenu.name}>
                                      {({ active }) => (
                                        <button
                                          className={`${
                                            active ? 'bg-RedDarkest text-white' : 'text-Black'
                                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          onClick={()=> navigate(submenu.href)}
                                        >
                                          {active ? (
                                            <span
                                              className="flex justify-center items-center mr-2 h-5 w-5 "
                                              aria-hidden="true"
                                            >
                                              {submenu.icon}
                                            </span>
                                          ) : (
                                            <span className="flex justify-center items-center mr-2 h-5 w-5 text-RedDarkest" aria-hidden="true">
                                              {submenu.icon}
                                            </span>
                                          )}
                                          {submenu.name}
                                        </button>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        )
                      )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 text-right">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
