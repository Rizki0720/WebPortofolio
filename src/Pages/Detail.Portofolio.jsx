import React,{useState} from 'react';
import Navbar from '../components/Navbar/navbar';
import { dataPorto } from '../components/data.js/data.js';
import { useParams } from 'react-router-dom';



const DetailPortofolio = () => {
    const {slug} = useParams()
    return (
        <>
            <Navbar/>
            <div className='mt-40'>
                <div className='flex flex-col lg:flex-row gap-20 mx-20 my-10'>
                    <div>
                        <img src={dataPorto[slug - 1 ].image} alt="porto" className='w-400' /> 
                    </div>
                    <div>
                        <h1 className='text-white font-semibold text-5xl'>{dataPorto[slug - 1].title}</h1>{""}
                        <p className='text-white text-2xl mt-10 mr-32 text-justify'>{dataPorto[slug - 1].desc}</p>{""}
                        <p className='text-white text-xl mt-10 mr-32 text-justify'> Teknologi yang digunakan </p>  
                        <div className='flex items-center gap-5 mt-4'>
                            <img src={dataPorto[slug - 1].icon1} alt="icon1" className='w-16 mt-2' />
                            <img src={dataPorto[slug - 1].icon2} alt="icon1" className='w-16 mt-2' />
                            <img src={dataPorto[slug - 1].icon3} alt="icon1" className='w-16 mt-2' />
                            <img src={dataPorto[slug - 1].icon4} alt="icon1" className='w-16 mt-2' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailPortofolio;
