import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";



export default function ContactForm() {
    const [IsSubmitted, setIsSubmitted] = useState(false)
    // const buttonHandler =() => {
    //     setIsSubmitted(IsSubmitted => !IsSubmitted)
        
    // }

    useEffect(() => {
        console.log(IsSubmitted);
    }, [IsSubmitted]);
    
    
    function sendEmail(e) {
        e.preventDefault();
        setIsSubmitted(IsSubmitted => !IsSubmitted)

        emailjs
            .sendForm(
                "service_w2nhjni",
                "template_sl0bjqa",
                e.target,
                "user_CU3aYIx3DNi3AX52HpjEB"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    const contactForm = (
        <div id="formJSX" class="bg-gray-900">
        <div class="lg:w-1/2 md:w-2/3 mx-auto ">
          
            <form class="flex flex-wrap -m-2 " onSubmit={sendEmail}>
            <div class="p-2 w-1/2" data-aos="zoom"
        data-aos-duration="700">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                                 
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2" data-aos="zoom"
        data-aos-duration="700">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full" data-aos="zoom"
        data-aos-duration="700">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full" data-aos="zoom"
        data-aos-duration="700">
                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            type="submit"
                            
              >
                Submit
              </button>
              </div>
            </form>
            
          
        </div>
      </div>
    )


     const thankYouMessage = (
         <div>
            <section class="text-gray-400 bg-gray-900 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12"></div>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            Thank You! I'll get back to you shortly!
                        </h1>
                 </div>
                 
             </section>
         </div>
             
    )

    return (<div class="flex flex-col text-center w-full mb-12 text-gray-400 bg-gray-900 body-font" data-aos="zoom"
        data-aos-duration="700">
        
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Contact Me
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Click on the email below, and I'd love to chat!
        </p>
        <br></br>
            
            {IsSubmitted? thankYouMessage : contactForm}
        </div>
        )
}

