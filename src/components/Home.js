import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
    return (
      <section class="backdrop" id="home">

        <div className="container z-11 mx-auto flex px-10 py-20 md:flex-row flex-col items-center md:h-screen h-max">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Konrad.
              <br className="hidden lg:inline-block" /> I love to build websites, design user interfaces and more.
            </h1>
            <p className="mb-8 leading-relaxed">
            I am a Jr Front-End Developer with 5+ years in design. 
            Experience in developing Responsive Web Applications using HTML5, CSS3, JavaScript, React.js and TailwindCSS, making them cross-browser compatible.
             Hands-on experience with CSS optimization using SASS, LESS, and Bootstrap.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="transform  hover:scale-110 transition duration-300 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
                Work With Me
              </Link>
              <Link
                to="/projects"
                className="transform  hover:scale-110 transition duration-300 ml-4 inline-flex text-gray-400 bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 hover:text-white rounded text-lg">
                See My Past Work
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full py-10 md:w-1/2 w-5/6">
         
          <img  className="object-cover object-center rounded-md scale-125 " src={require('./kk-mockup5.png')} />
            
          </div>
        </div>
      </section>
    );
  }
