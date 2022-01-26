import React from "react";
import { IdentificationIcon, AcademicCapIcon } from "@heroicons/react/solid";





export default function About() {
  return (
    <section id="about">
       <div className="container px-5 py-10 mx-auto ">
        <div className="text-center">
          <IdentificationIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            About me
          </h1>
          </div>
          </div>

         <div className="container mx-auto flex px-10 md:flex-row flex-col items-center h-max">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white  lg:inline-block">
              From Dance to Programming
            </h1>
            <p className="mb- leading-relaxed">
            Change is difficult, but switching jobs is necessary for both personal and professional growth.
At first I thought it would be impossible to jump from the biggest stages of the world to an office desk with a computer in front of me. Then I realized that it is not my mind nor body that changes. It is just the title. We stay with the same character, with the same spark and creativity no matter where life takes us.
After more than 10 years of professional experience as an artist, I am here now creatively coding my way into the world of web development.
            </p>
            
          
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
           
              <img  className="object-cover object-center rounded-md " src={require('./about.png')} />
            
          </div>
        </div>



      <div className="container px-5 pb-10 pt-20 mx-auto ">
        <div className="text-center mb-20 ">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
          
          <ol class="relative border-l  h-max pt-10 mt-10 border-gray-200 dark:border-zinc-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022</time>
        <h3 class="text-lg pt-1 font-semibold text-gray-900 dark:text-white">React.js - Building responsive websites with TailwindCSS</h3>
        <p class="mb-24 pt-1 text-base font-normal text-gray-500 dark:text-gray-400">Developed a strong understanding of React’s most essential concepts: JSX, class and function components, props, state, lifecycle methods, and hooks.</p>
        
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2021</time>
        <h3 class="text-lg pt-1 font-semibold text-gray-900 dark:text-white">Bachelor of Arts - HfMDK Germany</h3>
        <p class="mb-24 pt-1 text-base font-normal text-gray-500 dark:text-gray-400">Awarded with "Studienstiftung Des Deutsches Volkes" scholarship as a support for the ‘higher education of young people showing exceptional promise for academic or artistic accomplishment, who stand out by virtue of their personality and are willing to render service to society as a whole’.</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2021</time>
        <h3 class="text-lg pt-1 font-semibold text-gray-900 dark:text-white">Front-end Engeeniring - University of Michigan USA</h3>
        <p class="text-base pt-1 mb-1 pb-5 font-normal text-gray-500 dark:text-gray-400">This Specialization covered how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript. The range of technologies talked about in the course allow me to develop high quality websites that, work seamlessly on mobile, tablet, and large screen browsers accessible as well as designing and implementing a responsive site that utilizes tools to create a site that is accessible to a wide audience, including those with visual, audial, physical, and cognitive impairments.</p>
        <a href="https://online.umich.edu/series/web-design-for-everybody/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100  dark:bg-zinc-800 dark:text-gray-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
    </li>
    <li class="mb=10 mt-24 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2021</time>
        <h3 class="text-lg pt-1 font-semibold text-gray-900 dark:text-white">Digital Video Design - NAFA Singapore</h3>
        <p class="text-base pt-1 font-normal text-gray-500 dark:text-gray-400">The course introduced me to advanced digital design technology. Helped me develop skills from computer aided design to animation. Covered topics such as rigging, key framing, rendering and more. On top of that, gained knowledge and skills to create meaningful moving imagery, from conceptualization to implementation using a video editing software.</p>
    </li>
  
  
</ol>
        </div>
        </div>
        
      </section>
    );
  }



