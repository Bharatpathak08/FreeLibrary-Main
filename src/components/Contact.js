import React from "react";

function Contact() {
  return (
  
        <div class="flex flex-col justify-center md:flex-row py-32 bg-slate-900 ">
          <div class="h-32 ml-6 md:h-96 md:w-auto">
            <img
              class="object-cover w-full h-full"
              src="https://source.unsplash.com/user/erondu/1600x900"
              alt="img"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:px-16 sm:py-0 ">
            <div class="w-80">
              
              <h1 class="mb-4 text-4xl font-bold text-center text-gray-200">
                Contact Us
              </h1>
              <div>
                <label class="block text-sm pb-2">Name :-</label>
                <input
                  type="text"
                  class="w-96 px-4 py-2 text-sm border  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Name"
                />
              </div>
              <div class="mt-4">
                <label class="block text-sm pb-2">Email :-</label>
                <input
                  type="email"
                  class="w-96 px-4 py-2 text-sm border  focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label class="block  mt-4 text-sm pb-2">Message :- </label>
                <input
                  class="w-96 h-12 px-4 text-black py-2  text-sm border focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Your Message goes here......"
                  type="text"
                />
              </div>
              <button
                class="block w-96 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent  active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                href="#"
              >
                Sign up
              </button>

             
            </div>
          </div>
        </div>
      
  );
}

export default Contact;
