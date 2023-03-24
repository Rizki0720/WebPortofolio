import React from 'react';
import { useNavigate } from 'react-router-dom';



const Card = ({image,title,desc,slug}) => {

    const navigate = useNavigate()

    const handleGoToDetail = (slug) => {
        navigate(`/porto/${slug}`)
    } 

    return (
        <>
            <button onClick={() => handleGoToDetail(slug)} className="text-left border-2 border-transparent shadow-sm hover:shadow-main-color p-4" >
                <div className='flex gap-10 flex-row text-white items-center'>
                    <div>
                        <img src={image} alt="card" className='w-96' />
                    </div>
                    <div>
                        <h1 className='text-2xl'>{title}</h1>
                        <h3 className='text-xl'>{desc}</h3>
                    </div>
                </div>
            </button>
        </>
    );
}

export default Card;
