import React from 'react'
import {NavLink} from 'react-router-dom'



const Navbar = () => {
    return (
       <main  className='rounded-md bg-zinc-800 top-0 z-10 sticky '>
       <div className= "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="w-auto ml-auto mr-auto rounded title-font font-medium text-white md:mb-0 items-center ">
                <ul id='underBar' className="font-sans tracking-wide font-semibold md:mr-auto md:ml-auto md:items-center sm:items-center md:py-1 flex flex-wrap items-center text-base justify-center" >
                    <li className="mr-5 hover:text-white"><NavLink to='/'>Home</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/about'>About</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/skills'>Skills</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/projects'>Projects</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/dance'>Dance</NavLink></li>
                    <li className="mr-5 hover:text-white "><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
        </main>
    )
}

export default Navbar


