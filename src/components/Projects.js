
import { CodeIcon, TemplateIcon, AdjustmentsIcon, TerminalIcon, UsersIcon, FilmIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { testimonials } from "../data"; 





export default function Projects() {
  return (
    <section id="projects" className="text-gray-400  body-font h-max">
      <div className="container px-5 py-10 mx-auto text-center z-9 lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Web Design and Development
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I am continually working on creating new projects that are up-to-date with modern front-end technologies.
           My services include combining design elements to create aesthetically appealing layouts, advertisements, reports,
           logos and posters as well as building and maintaining responsive websites using HTML5, CCS3, JavaScript and React.js with neat and user-friendly UI and UX.
          </p>
        </div>
        <div className="flex mt-16 flex-wrap">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2  p-2">
              <div className="flex overflow-hidden w-100 h-96 relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fit blur object-center"
                  src={project.image}
                />
                <div className="px-8 py-28  z-10 w-full border-4 border-zinc-800 bg-zinc-900 opacity-80 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container px-5 py-10 mt-10 mx-auto text-center z-9 lg:px-40">
        <div className="flex flex-col w-full mb-6">
          <FilmIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Design & Movement Directing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            With over 10+ years as a creative I have experience in various design fields.
        
          </p>
          
        </div>
        </div>


 <div className="flex flex-wrap justify-center">

        <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <div className=" pl-10 py-4" class=" w-full padding:56.25% 0 0 0; position:relative;">
          
        <iframe src="https://player.vimeo.com/video/472255384?h=28288e07f9" className="mr-auto ml-auto pt-10" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
        </div>

      <div className="px-14 py-4 ">
        <div className="font-bold text-zinc-200 text-xl mb-2">
          The Screamer
        </div>
        <p className="text-zinc-500 text-base">
          Project with Malaysian dance artist Xin Yen Tan for Nanyang Academy of Fine Arts in Singapore <span></span>
        </p>
      </div>
      <div className="px-14 pt-4 pb-12">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2">Project Director</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2">Video Editor</span>
      </div>
    </div>




    <div className="max-w-sm rounded overflow-hidden shadow-xl">
    <div className=" pl-10 py-4" class=" w-full padding:56.25% 0 0 0; position:relative;">

    <iframe src="https://player.vimeo.com/video/500158582?h=ad2f1f0133" className="mr-auto ml-auto pt-10" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
    </div>
      <div className="px-14 py-4 ">
        <div className="font-bold text-zinc-200 text-xl mb-2">
         GEN3515
        </div>
        <p className="text-zinc-500 text-base">
          Short dance film by Jusin Chen featured in Moving Body (Bulgaria), Minimalen Kortfilmfestival (Norway) and MEME PAS PEUR (Reunion) film festivals.<span></span>
        </p>
      </div>
      <div className="px-14 pt-4 pb-12">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2">Movement Director</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2">Artist</span>
 
      </div>
    </div>



    <div className="max-w-sm rounded overflow-hidden shadow-xl">
    <div className=" pl-10 py-4" class=" w-full padding:56.25% 0 0 0; position:relative;">

    <iframe src="https://player.vimeo.com/video/669500691?h=420357c20f" className="mr-auto ml-auto pt-10" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
      <div className="px-14 py-4 ">
        <div className="font-bold text-zinc-200 text-xl mb-2">
         VOID
        </div>
        <p className="text-zinc-500 text-base">
          Work directed and choreographed for students of University of Music and Performing Arts in Frankfrurt (Germany). Featured in Gallus Theater.<span></span>
        </p>
      </div>
      <div className="px-14 pt-4 pb-12">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-zinc-700 mr-2">Creative</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2">Movement Director</span>
 
      </div>
    </div>


    <div className="max-w-sm rounded overflow-hidden shadow-xl">
    <div className=" pl-10 py-4" class=" w-full padding:56.25% 0 0 0; position:relative;">

    <iframe src="https://player.vimeo.com/video/669783551?h=ab05fbe2b7" className="mr-auto ml-auto pt-10" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

    </div>
      <div className="px-14 py-4 ">
        <div className="font-bold text-zinc-200 text-xl mb-2">
         Zulkefly
        </div>
        <p className="text-zinc-500 text-base">
        An experimental film. Semi auto-fiction meets surrealist ideas of contact improvisation in a (de)construction of the subjectivities of a character's struggle with her past trauma.<span></span>
        </p>
      </div>
      <div className="px-14 pt-4 pb-12">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2">Project Director</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2">Video Editor</span>
 
      </div>
    </div>

 </div>
 





{/*  

 <div className="container px-5 py-10 mt-10 mx-auto text-center z-9 lg:px-40">
        <div className="flex flex-col w-full mb-6">
          <AdjustmentsIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
           Photo Editing & Digital Manipulation
          </h1>
        </div>
       
       <div className="flex flex-wrap pt-10">

           <div className="max-w-sm rounded overflow-hidden shadow-sm">
             <img src="src\components\imga1.JPG" alt="imgb1" className="w-full"></img>
             <div className="px-6 py-4">
              <div className="font-bold text-gray-200 text-m mb-2">Before</div> 
             </div>
           </div> 

           <div className="max-w-sm rounded overflow-hidden shadow-sm">
             <img src="" alt="imga1" className="w-full"></img>
             <div className="px-6 py-4">
              <div className="font-bold text-gray-200 text-m mb-2">After</div> 
             </div>
           </div> 

           <div className="max-w-sm rounded overflow-hidden shadow-sm">
             <img src="#" alt="imgb2" className="w-full"></img>
             <div className="px-6 py-4">
              <div className="font-bold text-gray-200 text-m mb-2">Before</div> 
             </div>
           </div> 

           <div className="max-w-sm rounded overflow-hidden shadow-sm">
             <img src="#" alt="imga2" className="w-full"></img>
             <div className="px-6 py-4">
              <div className="font-bold text-gray-200 text-m mb-2">After</div> 
             </div>
           </div> 

        </div>
</div>





 <div className="container px-5 py-10 mt-10 mx-auto text-center z-9 lg:px-40">
        <div className="flex flex-col w-full mb-6">
          <TemplateIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
           Figma Designs
          </h1>
        </div>
       

           <div className="max-w-sm rounded overflow-hidden shadow-sm">
             <img src="#" alt="figma1" className="w-full"></img>
             <div className="px-6 py-4">
              <div className="font-bold text-gray-200 text-m mb-2">Design 1</div> 
             </div>
           </div> 

           <div className="max-w-sm rounded overflow-hidden shadow-sm">
             <img src="#" alt="figma2" className="w-full"></img>
             <div className="px-6 py-4">
              <div className="font-bold text-gray-200 text-m mb-2">Design 2</div> 
             </div>
           </div> 

           <div className="max-w-sm rounded overflow-hidden shadow-sm">
             <img src="#" alt="figma3" className="w-full"></img>
             <div className="px-6 py-4">
              <div className="font-bold text-gray-200 text-m mb-2">Design 3</div> 
             </div>
           </div> 


</div>
          */}


      <div className="container px-5 pb-10 pt-20 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-zinc-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
      
    </section>
  );
}