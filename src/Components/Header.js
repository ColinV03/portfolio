import React from 'react';
export default Headers = () => {
  return (
    <div id="header">
      <header class="sticky top-0 text-gray-400 bg-gray-900 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Colin Varney</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center content-">
            <a class="mr-5 hover:text-white" href="#home" rel="noreferrer">
              Home
            </a>
            <a class="mr-5 hover:text-white" href="#about" rel="noreferrer">
              About
            </a>
            <a class="mr-5 hover:text-white" href="#projects" rel="noreferrer">
              Projects
            </a>
            <a
              class="mr-5 hover:text-white"
              href="mailto:cvcolinv@gmail.com?subject=Colin,+I+would+love+to+chat!"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
            {/* <div class=" flex justify-end items-center mb-12">
              <label for="toogleA" class="flex items-center cursor-pointer">
                <div class="relative">
                  <input id="toogleA" type="checkbox" class="sr-only" />

                  <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                  <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>


              </label>
            </div> */}
          </nav>
        </div>
      </header>
    </div>
  );
}
