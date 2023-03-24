import React from 'react';
import { Link } from 'react-router-dom';
import { socialMedia } from '../data.js/data';

const Hero = ({name,image,title,desc}) => {
    return (
        <>

             <div className='mt-40 flex flex-col lg:flex-row gap-7 justify-center items-center'>
                <div className='text-center w-500'>
                    <h3 className='text-white te text-5xl font-semibold mb-2'>Hallo Ini Aku</h3>
                    <h1 className='text-white text-7xl font-semibold mb-2'>{name}</h1>
                    <h3 className='text-white text-5xl font-semibold '>aku adalah 
                    <span className='text-main-color'> {title}</span> </h3>
                    <p className='text-white mt-4 text-2xl tracking-wide'>{desc}</p>
                    <dic className="flex justify-center gap-10 items-center mt-10 text-main-color" >
                        {socialMedia.map((item,index) => {
                            return(
                                <div key={index}  >
                                    <Link to={item.title} className="text-3xl" >{item.title}</Link>
                                </div>
                            )
                        })}
                    </dic>

                </div>
                <div className=''>
                    <img src={image} className="w-500 h-400  rounded-2xl" alt="Gambar_rizki"  />
                </div>
               
             </div>  
        </>
    );
}

export default Hero;
