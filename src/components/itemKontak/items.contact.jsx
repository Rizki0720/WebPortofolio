import React from 'react';

const ItemsContact = ({socialMedia,image,subtitle,name,desc}) => {
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-center  gap-12  mt-20'>
                <div className='lg:w-5/12 mx-8 p-5 '>
                    <img 
                    src={image} 
                    alt='profile' 
                    className='w-450 h-400 rounded-full'
                    />
                </div>
                <div className='lg:w-7/12 mt-24 px-2 '>
                    <h1 className='text-5xl mb-3'>Hallo, {name} </h1>
                    <h3 className='text-4xl mb-4'> {subtitle}</h3>
                    <p className=' text-justify mr-12 translate-y-5
                    tracking-wider text-2xl'> {desc}</p>
                    <div className='flex justify-start gap-10 items-center text-4xl mt-14 '>
                        {socialMedia.map((item,index) => {
                            return(
                                    <span key={index} className="hover:text-main-color">
                                        {item.title}
                                    </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemsContact;
