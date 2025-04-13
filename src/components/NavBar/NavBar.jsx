import React, { useState } from 'react';
import Link from './link';
import { CircleX, Menu } from 'lucide-react';



const navigation = [
    {
        "id": 1,
        "name": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "name": "About Us",
        "path": "/about"
    },
    {
        "id": 3,
        "name": "Services",
        "path": "/services"
    },
    {
        "id": 4,
        "name": "Projects",
        "path": "/projects"
    },
    {
        "id": 5,
        "name": "Contact",
        "path": "/contact"
    }
]


const Links = navigation.map((route) => <Link key={route.id} route={route}></Link>)


const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)




    return (
        <div className='flex justify-between m-5 mx-7 poetsen-font bg-white text-black p-3 rounded-xl'>
            {/* <ul className='flex gap-3'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul> */}

            <span onClick={() => setMenuOpen(!menuOpen)} className='flex  '>
                {
                    menuOpen ?
                        <CircleX className='md:hidden'></CircleX> :
                        <Menu className='md:hidden'></Menu>

                }
                <ul className={`md:hidden absolute duration-1000 p-4 rounded-xl
                   ${menuOpen? 'top-16': '-top-40'}
                    bg-gray-200 `}>
                    {Links}
                </ul>
                <h2 className='md:text-2xl hidden text-sm md:block pt-2'>Mahiya Rahman</h2>


            </span>
           
            <ul className='md:flex gap-5 md:pt-3 hidden'>
                {
                    Links
                }
            </ul>

            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl">Sign In</button>

        </div>
    );
};

export default NavBar;