import React from 'react';
import {  useNavigate } from 'react-router-dom';

const ItemsPortofolio = ({image,title,desc,slug,icon1,icon2,icon3,icon4}) => {

    const navigate = useNavigate()

    const handleGoToDetail = (slug) => {
        navigate(`/porto/${slug}`)
    } 

    return (
        <>
            <div className='flex flex-col lg:flex-row items-center gap-20 pb-36 mb-20 border-2 mr-36 shadow-md hover:shadow-main-color shadow-gray-700 p-10 rounded-xl '>
                <div>
                    <img src={image} alt="porto" className='w-400'/>
                </div>
                <div >
                    <button className='text-white text-4xl' onClick={() => handleGoToDetail(slug)} >{title}</button>
                    <p className='text-white text-2xl mr-32 mt-6 text-justify'> {desc} </p>
                    <p className='text-white text-lg mt-10 mr-32 text-justify'> Teknologi yang digunakan </p>  
                    <div className='flex items-center gap-5 mt-4'>
                        <img src={icon1} alt="icon1" className='w-16 mt-2' />
                        <img src={icon2} alt="icon1" className='w-16 mt-2' />
                        <img src={icon3} alt="icon1" className='w-16 mt-2' />
                        <img src={icon4} alt="icon1" className='w-16 mt-2' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemsPortofolio;
