import React from 'react'
import {NavLink} from 'react-router-dom'



const Navbar = () => {
    return (
       <main className='rounded-md bg-gradient-to-r from-[#574BCD] via-[#2999AD] to-[#41E975] md:sticky top-0 z-10'>
       <div className= "container mx-auto flex flex-wrap p-0.5 flex-col md:flex-row items-center">
            <div className="w-screen title-font font-medium text-white mb-4 md:mb-0 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center title-font font-medium text-white mb-4 md:mb-0">
            <div className="title-font  font-medium mb-4 md:mb-0 ml-3 text-s">KKPLAK</div>
                <ul id='underBar' className="font-sans tracking-wide font-semibold md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center" >
                    <li className="mr-5 hover:text-white"><NavLink to='/'>Home</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/about'>About</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/skills'>Skills</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/projects'>Projects</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/dance'>Dance</NavLink></li>
                    <li className="mr-5 hover:text-white"><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
        </main>
    )
}

export default Navbar


