import React from 'react';
import Navbar from '../components/Navbar/navbar';
import { dataPorto } from '../components/data.js/data';
import ItemsPortofolio from './../components/itemsPortofolio/items.portofolio';


const Portofolio = () => {

    
    return (
        <>
            <div>
                <Navbar/>
                <div className='mt-40 p-10 mx-20'>
                    <div>
                        <h1 className='text-gray-200 text-5xl tracking-wider font-semibold'> 
                            Portofolio Saya 
                        </h1>
                    </div>
                   
                    <div className='mt-10'>
                        {dataPorto.map((item,index) => {
                            return (
                                
                                    <ItemsPortofolio 
                                    image={item.image}
                                    title={item.title}
                                    desc={item.desc}
                                    slug={item.id}
                                    icon1={item.icon1}
                                    icon2={item.icon2}
                                    icon3={item.icon3}
                                    icon4={item.icon4}
                                    key={index}
                                    />
                             
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portofolio;
