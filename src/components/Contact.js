import React, {useRef} from "react";
import emailjs from "emailjs-com";



  export default function Contact () {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jcfouwl', 'template_p3lwp22', form.current, 'user_v0euPlaZgQtUNrePYidlP')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative h-screen">
      <div className="h-screencontainer px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">

        <form ref={form} onSubmit={sendEmail}
          
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto md:mr-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
          I am available to hire for full-time positions and freelance projects. Want to talk? Please submit the form below or reach me through social medias.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name" 
              className="w-full bg-zinc-800 rounded border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full bg-zinc-800 rounded border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-zinc-800 rounded border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
           
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}