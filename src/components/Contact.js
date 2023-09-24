import React from "react";

function Contact() {
  return (
  
        <div  class="  bg-slate-900 pb-20 ">
          <div id="contact" class=" transition-opacity z-0 opacity-30   md:w-auto" style={{height:'550px'}}>
            <img
              class="object-cover w-full   h-full"
              src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="img"
            />
          </div>
          <div  class="flex items-center bg-black  justify-center  sm:px-16  " style={{marginTop:'-550px',height:'520px'}}>
            <div class="w-80   z-10">
              
              <h1 class="mb-4 text-4xl font-bold text-center text-gray-200">
                Contact Us
              </h1>
              <div>
                <label class="block text-sm pb-2">Name :-</label>
                <input
                  type="text"
                  class="w-80 px-4 py-2 bg-transparent rounded-sm text-sm border-b-2 border-transparent focus:border-b-2  focus:border-white focus:outline-none  "
                  placeholder="Enter your Name" 
                />
              </div>
              <div class="mt-4">
                <label class="block text-sm pb-2">Email :-</label>
                <input
                  type="email"
                  class="w-80 px-4 py-2  bg-transparent  rounded-sm  text-sm border-b-2 border-transparent focus:border-b-2  focus:border-white focus:outline-none "
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <label class="block  mt-4 text-sm pb-2">Message :- </label>
                <input
                  class="w-80 h-12 px-4 py-2 bg-transparent  rounded-sm  text-sm border-b-2 border-transparent focus:border-b-2  focus:border-white focus:outline-none"
                  placeholder="Your Message goes here......"
                  type="text"
                />
              </div>
              <button
                class="block w-80 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-800 border border-transparent  active:bg-blue-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
                href="#"
              >
                Send
              </button>

             
            </div>
          </div>
        </div>
      
  );
}

export default Contact;
