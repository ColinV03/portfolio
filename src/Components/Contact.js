import React, { Component } from 'react';
import emailjs from "emailjs-com";




class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false, 
    };
  }
 

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w2nhjni",
        "template_f6gkakb",
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
    console.log(this.state)
   
  }
      

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

 

  render() {

    //storing form as a variable for boolean check in Ln: 129
    let form = (
      <div id="formJSX">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <form class="flex flex-wrap -m-2" onSubmit={this.sendEmail}>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.name}
                  onChange={(e) => this.handleChange(e)}
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.email}
                  onChange={(e) => this.handleChange(e)}
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={this.message}
                  onChange={(e) => this.handleChange(e)}
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={this.sendEmail}
                  type="submit"
              >
                Submit
              </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    );

    let thankYouMessage = (
      <div>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Thank You! I'll get back to you shortly!
        </h1>
      </div>
    );

    
    return (
      <div id="contact" data-aos="zoom"
        data-aos-duration="700">
        <section class="text-gray-400 bg-gray-900 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Contact Me
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Click on the email below, and I'd love to chat!
              </p>
            </div>
             <div id="form-visibility">
              {this.state.submitted ? thankYouMessage : form}
            </div>
            <div id="email-contact">
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a
                  class="text-indigo-400"
                  href="mailto:cvcolinv@gmail.com?subject=Colin,+I+would+love+to+chat!"
                  target="_blank"
                >
                  cvcolinv@gmail.com
                </a>
                <p class="leading-normal my-5">Ashland, KY</p>
              </div>
            </div>
           
          </div>
        </section>
      </div>
    );
  }
}


export default ContactForm