import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-300 font-bold">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/" legacyBehavior>
            <div className=" flex items-center justify-center bg-green-300">
            <div className=" flex items-center justify-center bg-green-300">
              <div className="group relative cursor-pointer py-2">
                <div className="flex items-center justify-between space-x-2 bg-green-300">
                  <a
                    class="menu-hover my-2 py-2 text-base font-bold text-black lg:mx-4"
                    onClick=""
                  >
                  Language
                  </a>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <div className="invisible absolute z-50 flex flex-col bg-green-200 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                  <Link
                    href={"/Political"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    English
                  </Link>
                  <Link
                    href={"/Political"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    Urdu
                  </Link>

                </div>
              </div>
            </div>
              <div className="group relative cursor-pointer py-2">
                <div className="flex items-center justify-between space-x-2 bg-green-300 px-4">
                  <a
                    class="menu-hover my-2 py-2 text-base font-bold text-black lg:mx-4"
                    onClick=""
                  >
                    News Category
                  </a>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <div className="invisible absolute z-50 flex flex-col bg-green-200 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                  <Link
                    href={"/Political"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    Political
                  </Link>

                  <Link
                    href={"/Social"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    Social
                  </Link>
                  <Link
                    href={"/Religious"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    Religious
                  </Link>
                  <Link
                    href={"/Local"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    Local
                  </Link>
                  <Link
                    href={"/Sports"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    Sports
                  </Link>
                  <Link
                    href={"/Fashion"}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    Fashion
                  </Link>
                </div>
              </div>
            </div>
            
          </Link>
          {/* <Link href="/About" legacyBehavior>
            <a className="mr-5 hover:text-gray-900">About</a>
          </Link> */}
          <Link href="/Contact" legacyBehavior>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </Link>
        </nav>
        <Link href="/" legacyBehavior>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-16 h-16 text-Green-900 p-2 bg-Green-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">Echo-Of-Nations</span>
          </a>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <Link href={"/Login"}>Login</Link>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
