import React from 'react';


export default function About() {
    
    return (

        <div id="home"
        data-aos="zoom"
        data-aos-duration="700">
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="bg-fixed object-cover object-center h-full w-full" src="https://www.staufenbiel.de/image/uploads/tx_templavoilaplus/Web_Developer_shutterstock_526821523_scyther5_w1200_ejpeg.jpg"/>
                </div>
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8" data-aos="zoom"
        data-aos-duration="700">
                    <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHYjKLUP9BrOg/profile-displayphoto-shrink_800_800/0/1592637024305?e=1627516800&v=beta&t=PdddmeG0sHwyChB6BWA0um4NuOXoeDaDJXeLXHUke9I" id="profile-picture" alt="Colin Varney" class="rounded-full	"/>
        
                    </div>
                    <div id="profile" class="flex flex-col items-center text-center justify-center">
                        <h2 class="font-medium title-font mt-4 text-white text-lg">Colin Varney</h2>
                        <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                        <p class="text-base text-gray-400">Web Developer from Ashland, Kentucky. </p>
                    </div>
                    </div>
                    <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" id="about" data-aos="zoom"
        data-aos-duration="700">
                    <p class="leading-relaxed text-lg mb-4">Hi, I'm Colin. <br/> <br/> I am a web developer from Kentucky. I am familiar with a variety of technologies including: Javascript, React, HTML, CSS, Jasmine, NPM, Git, Github, Test Driven Development, Adobe Photoshop, and Microsoft Suite products.  </p>
                    <a class="text-indigo-400 inline-flex items-center" href="#projects">See Projects
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
    </section>

    </div> 



    )


    
}
