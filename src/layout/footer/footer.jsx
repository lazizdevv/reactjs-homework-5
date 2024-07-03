import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-bold">Contact Us</p>
          <p className="text-sm mt-2">123 Main Street</p>
          <p className="text-sm">City, State 12345</p>
          <p className="text-sm mt-2">info@example.com</p>
          <p className="text-sm">123-456-7890</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <svg classname="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillrule="evenodd"
                cliprule="evenodd"
                d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-4-4H5zm10 4v2h2V7h-2zm-3 0v2h2V7h-2zm-3 0v2h2V7H9zm-3 0v2h2V7H6zm-3 0v2h2V7H3zm1 4v8h10V11H4zm11-1.414L18.414 12H20v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9h2v8h12v-8h2z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <svg classname="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillrule="evenodd"
                cliprule="evenodd"
                d="M11.986 2C6.477 2 2 6.477 2 11.986c0 4.712 2.95 8.74 7.105 10.346-.097-.86-.183-2.18.037-3.12.197-.85 1.265-5.407 1.265-5.407s-.258-.52-.258-1.288c0-1.205.698-2.107 1.566-2.107.736 0 1.093.553 1.093 1.213 0 .738-.47 1.844-.715 2.866-.207.902.438 1.636 1.323 1.636 1.588 0 2.815-1.678 2.815-4.092 0-2.14-1.537-3.633-3.724-3.633-2.541 0-4.04 1.907-4.04 3.883 0 .61.24 1.262.542 1.63.06.07.068.132.046.21-.05.21-.162.66-.184.752-.03.133-.102.162-.24.12-1.01-.383-1.645-1.24-1.645-2.49 0-2.02 1.53-3.635 4.358-3.635 2.357 0 4.18 1.69 4.18 3.527 0 2.104-1.055 3.755-2.507 4.283.197.278.378.833.378 1.676 0 1.212-.015 2.191-.015 2.486 0 .24.16.517.614.429C19.75 21.97 22 18.486 22 11.986 22 6.477 17.523 2 11.986 2"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
