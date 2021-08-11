import Head from "next/head";
import { useState } from "react";

function sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>Sidebar</title>
      </Head>
      <div className="relative min-h-screen md:flex">
        {/* mobile menu bar */}
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          <a href="#home" className="block p-4 text-white font-bold">
            Nick Dev
          </a>

          {/* mobile menu button */}
          <button
            className="p-4 focus:outline-none focus:bg-gray-700"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* sidebar */}
        <div
          className={`
          bg-blue-600 text-blue-100 
        w-64 px-2 py-7 
        absolute inset-y-0 left-0 
        transform ${!toggleSidebar && '-translate-x-full'} transition 
        md:translate-x-0 md:relative
        duration-200 ease-in-out
          `}
        >
          {/* logo */}
          <a
            href="#home"
            className="text-white flex items-center px-4 space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <span className="font-extrabold text-2xl">Nick Dev</span>
          </a>
          {/* nav */}
          <nav className="py-2">
            <a
              href="#home"
              className="block py-2.5 px-4 rounded hover:bg-blue-400 hover-text-white transition duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2.5 px-4 rounded hover:bg-blue-400 hover-text-white transition duration-200"
            >
              About
            </a>
            <a
              href="#feature"
              className="block py-2.5 px-4 rounded hover:bg-blue-400 hover-text-white transition duration-200"
            >
              Feature
            </a>
            <a
              href="#pricing"
              className="block py-2.5 px-4 rounded hover:bg-blue-400 hover-text-white transition duration-200"
            >
              Pricing
            </a>
          </nav>
        </div>

        {/* content */}
        <div className="flex-1 p-10 text-2xl">content goes here</div>
      </div>
    </>
  );
}

export default sidebar;
