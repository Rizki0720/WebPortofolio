import React,{useState,} from 'react';
import '../../css/style.css'
import {FcMenu} from 'react-icons/fc'
import {dataMenu} from '../data.js/data.js'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

        const [open,setOpen] = useState(false)

    return (
        <>
            <header className="header flex justify-between items-center w-[100%] p-8 bg-black-blue z-100">

                <a href="/#" className="logo text-white text-4xl font-semibold p-3 lg:ml-20 ">
                    Rizki<span className="text-main-color italic ml-2 ">Gunawan</span></a> 
                    <button>
                        <FcMenu className='text-5xl text-white block lg:hidden' 
                        onClick={() => setOpen(!open)} />
                    </button>
                            <nav className={`navbar text-center absolute
                            top-full left-0 w-full p-4 bg-black-blue border-t-2 lg:relative lg:text-right 
                            lg:mr-6 sm:hidden lg:flex lg:justify-center lg:items-center
                            gap-16 text-2xl ${open ? "active" : "hidden" } `}>
                            {dataMenu.map((items,index) => {
                                return(
                                    <ul key={index}>
                                        <li className='pt-2'>
                                            <NavLink to={items.path}>{items.name}</NavLink>
                                        </li>
                                    </ul>
                                )
                            })}
                            </nav>
                    
            
            </header>
        </>
    );
}

export default Navbar;
