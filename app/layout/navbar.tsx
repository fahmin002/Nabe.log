import { FaBookOpen } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { TbPinFilled } from "react-icons/tb";
import { MdContacts, MdLibraryMusic } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function Navbar({ onToggleNav, navOpen}: any) {
  function navOpenHandler() {
    onToggleNav();
  }
  const [scrolled, setScrolled] = useState(false);

  const currentUrl = useLocation();
  const navItems = [
    { title: "Home", href: "/", icon: HiHome },
    { title: "Posts", href: "/posts", icon: FaBookOpen },
    { title: "Projects", href: "/projects", icon: TbPinFilled },
    { title: "About", href: "/about", icon: MdLibraryMusic },
    { title: "Contact", href: "/contact", icon: MdContacts },
  ];
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`w-full fixed top-0 z-50 transition-all duration-200 ${
        scrolled || navOpen ? "bg-slate-950 text-white" : "bg-transparent text-white"
      }`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {
              !navOpen ?
              (
              <button
                type="button"
                className="transition-all ease-in-out relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={navOpenHandler}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              ) 
              :
              (
                <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                aria-controls="mobile-menu"
                onClick={navOpenHandler}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
          
          
                {/* Icon ketika menu terbuka */}
                <svg
                  className={`size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                </svg>
              </button>
              ) 
              }
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h1 className="font-mono bg-gradient-to-tl from-slate-800 via-white to-zinc-400 bg-clip-text text-transparent font-bold text-2xl">
                  {"{ Nabe.l }"}
                </h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className={
                        currentUrl.pathname === item.href
                          ? "rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-white flex flex-row items-center gap-1"
                          : "rounded-md px-3 py-2 text-sm font-medium text-white flex flex-row items-center gap-1"
                      }
                      aria-current="page"
                    >
                      <item.icon />
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button
                type="button"
                className="relative rounded-full bg-slate-800 p-1 text-slate-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button> */}

              <div className="relative ml-3">
                {/* <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-slate-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 focus:outline-hidden"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="size-8 rounded-full"
                      src="public/fahmi.jpg"
                      alt=""
                    />
                  </button>
                </div> */}
                {/* Open Settings bar under my photo */}
                {/* <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {navOpen ? (
          <div
            className="transition-all ease-in-out sm:hidden bg-slate-950"
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pt-2 pb-3 bg-slate-950">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={
                    currentUrl.pathname === item.href
                      ? "rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-white flex flex-row items-center gap-1"
                      : "rounded-md px-3 py-2 text-sm font-medium text-white flex flex-row items-center gap-1"
                  }
                  aria-current="page"
                >
                  <item.icon />
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="translate-x-[-10rem] absolute transition-all ease-in-out sm:hidden"
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={
                    currentUrl.pathname === item.href
                      ? "rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-white flex flex-row items-center gap-1"
                      : "rounded-md px-3 py-2 text-sm font-medium text-white flex flex-row items-center gap-1"
                  }
                  aria-current="page"
                >
                  <item.icon />
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
