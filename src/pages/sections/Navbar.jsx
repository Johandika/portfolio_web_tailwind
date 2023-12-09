import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.svg";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: location.pathname === "/" },
  { name: "Contact", href: "/test", current: location.pathname === "/test" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [showNavbar, setShowNavbar] = useState(true);

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
                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between overflow-hidden">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-14 sm:h-[70px] w-auto"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:flex flex-row items-center justify-center">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
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
                      ))}
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
