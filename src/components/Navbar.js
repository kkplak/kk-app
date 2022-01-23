import React, {useState } from "react";
import {NavLink} from 'react-router-dom'
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span
                  className="h-8 w-8 text-white ">kkplak</span>
                  
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to='/' activeClassName="active"
                    className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Home</NavLink>

                  <NavLink to='/about' activeClassName="active"
                    className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>

                  <NavLink to='/skills' activeClassName="active"
                    className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Skills</NavLink>

                  <NavLink to='/projects' activeClassName="active"
                    className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</NavLink>

                  <NavLink to='/dance' activeClassName="active"
                    className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dance</NavLink>
                                      
                  <NavLink to='/contact' activeClassName="active"
                    className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to='/'
                  className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>

                <NavLink to='/about'
                  className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</NavLink>

                <NavLink to='/skills'  
                  className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</NavLink>

                <NavLink to='/projects'
                  className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</NavLink>

                <NavLink to='/dance'
                  className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dance</NavLink>
                  
                <NavLink to='/contact'
                  className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>

    
    </div>
  );
}

export default Nav;

