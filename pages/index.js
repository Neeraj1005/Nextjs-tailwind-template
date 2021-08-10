import Head from "next/head";
import { useState } from "react";
export default function Home() {
  const [menuButton, setMenuButton] = useState(false);
  return (
    <>
      <Head>
        <title>Nick Dev</title>
      </Head>
      {/* navbar goes here */}
      <nav className="bg-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              {/* logo  */}
              <div>
                <a
                  href="#home"
                  className="flex items-center py-5 px-3 text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span className="font-bold">Nick Dev</span>
                </a>
              </div>

              {/* primary nav  */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#feature"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Pricing
                </a>
              </div>
            </div>

            {/* secondary nav  */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#login"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Login
              </a>
              <a
                href="#signup"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded hover:text-yellow-800 transition duration-300"
              >
                Signup
              </a>
            </div>

            {/* mobile logo goes here */}
            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => setMenuButton(!menuButton)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile nav  */}
        {menuButton && (
          <div className="md:hidden mobile-menu">
            <a
              href="#feature"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              Feature
            </a>
            <a
              href="#pricing"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              Pricing
            </a>
          </div>
        )}
      </nav>
      {/* content goes here */}
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind</h2>
      </div>
    </>
  );
}
