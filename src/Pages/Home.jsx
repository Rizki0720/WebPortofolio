import React,{useState} from 'react';
import Hero from '../components/MainContent/hero';
import Navbar from '../components/Navbar/navbar';
import { dataHero,socialMedia, dataPorto } from '../components/data.js/data';
import Card from '../components/MainContent/card';



const Home = () => {

    const[data] = useState(dataHero)

    return (
        <>
            <Navbar/>
            <div>
              {data.map((item,index) => {
                return(
                    <Hero 
                    image={item.image}
                    name={item.name}
                    title={item.title}
                    desc={item.desc}
                    key={index}
                    socialMedia={socialMedia}  
                    />
                )
              })}
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-5 mt-32 mx-10 '>
              {dataPorto.map((items,index) => {
                return(
                  <Card 
                  image={items.image}
                  title={items.title}
                  desc={items.desc}
                  slug={items.id}
                  key={index}
                  />
                )
              })}
            </div>
        </>
    );
}

export default Home;
