import React from 'react';
import Link from './link';



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


const NavBar = () => {
    return (
        <div>
            {/* <ul className='flex gap-3'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul> */}


          <ul className='flex gap-5'>
            {
              navigation.map((route)=><Link key={route.id} route={route}></Link>) 
            }
          </ul>

        </div>
    );
};

export default NavBar;