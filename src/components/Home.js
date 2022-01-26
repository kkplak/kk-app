import React from 'react'

export default function About() {
    return (
      <section class="backdrop" id="home">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Konrad.
              <br className="hidden lg:inline-block" /> I love to build amazing
              apps.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="transform  hover:scale-110 transition duration-300 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
                Work With Me
              </a>
              <a
                href="/projects"
                className="transform  hover:scale-110 transition duration-300 ml-4 inline-flex text-gray-400 bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded "
              alt="mockup"
              src="\"
            />
          </div>
        </div>
      </section>
    );
  }
