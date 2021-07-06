export default function ProjectPage(){
    return (
        <div id="projects"
        data-aos="zoom"
        data-aos-duration="700"
            
        >
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Projects:</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">Javascript Projects</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3" data-aos="zoom"
        data-aos-duration="700">
                    <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        </div>
                        <h2 class="text-white text-lg title-font font-medium">BookShelf</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">A React based project to store books, along with marking ones that have been read.</p>
                        <a class="mt-3 text-indigo-400 inline-flex items-center" href="https://github.com/ColinV03/odin-react-library" target="_blank">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3"data-aos="zoom"
        data-aos-duration="700">
                    <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        </div>
                        <h2 class="text-white text-lg title-font font-medium">ToDo List</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">React based ToDo List. Featuring Adding Items to a list, and seeing them once completed.</p>
                        <a class="mt-3 text-indigo-400 inline-flex items-center" href="https://github.com/ColinV03/ToDo-List" target="_blank">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3"data-aos="zoom"
        data-aos-duration="700">
                    <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                        </div>
                        <h2 class="text-white text-lg title-font font-medium">Etch-A-Sketch</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">Vanilla Javascript and HTML Project making an etch-a-sketch off of a user-defined grid size. </p>
                        <a class="mt-3 text-indigo-400 inline-flex items-center" href="https://github.com/ColinV03/Etch-a-Sketch" target="_blank">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </section>        
    </div>

    )
}
