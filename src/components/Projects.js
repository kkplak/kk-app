
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { TerminalIcon, UsersIcon, FilmIcon } from "@heroicons/react/solid";
import { testimonials } from "../data"; 



export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-zinc-900 body-font h-max">
      <div className="container px-5 py-10 mx-auto text-center z-9 lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-zinc-700 bg-zinc-800 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
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






      <div className="container px-5 py-10 mx-auto text-center z-9 lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FilmIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Design & Movement Directing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
          
        </div>
        </div>


 <div className="flex flex-wrap justify-center">

        <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <div className=" pl-10 py-4" class=" w-full padding:56.25% 0 0 0; position:relative;">
          
        <iframe src="https://player.vimeo.com/video/472255384?h=28288e07f9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="position:absolute; top:0; left:0; width:100%; height:100%;" title="The Screamer"></iframe>
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

    <iframe src="https://player.vimeo.com/video/500158582?h=ad2f1f0133&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="position:absolute; top:0; left:0; width:100%; height:100%;" title="GEN3515"></iframe>
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

    <iframe src="https://player.vimeo.com/video/669500691?h=420357c20f" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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

   <a href="https://bakchormeeboy.com/2020/09/15/dance-with-me-dancers-locker-2020-by-frontier-danceland-review/"> 
   <img src="https://i.imgur.com/TuyGRX9.png"></img></a>
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