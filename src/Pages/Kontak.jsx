import React,{useState} from 'react';
import Navbar from '../components/Navbar/navbar';
import {dataKontak,socialMedia} from '../components/data.js/data.js'
import ItemsContact from '../components/itemKontak/items.contact';
 
const Kontak = () => {

    const [Kontak] = useState(dataKontak)

    return (
        <>
            <div>
                <Navbar/>
                <div className='mt-40 text-white p-10 mx-20'>
                   <div>
                        <h1 className='font-semibold text-5xl
                        tracking-wider'>Kontak Saya</h1>
                   </div>
                   <div>
                        {Kontak.map((item,index) => {
                            return(
                                <ItemsContact 
                                image={item.image}
                                name={item.name}
                                subtitle={item.subtitle}
                                desc={item.desc}
                                key={index}
                                socialMedia={socialMedia}
                                />
                            )
                        })}
                   </div>
                </div>
            </div>   
        </>
    );
}

export default Kontak;
