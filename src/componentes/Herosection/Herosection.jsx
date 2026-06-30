import bgimage1 from '../../assets/backgrounds/bgimage1.png'
import bgimage2 from '../../assets/backgrounds/bgimage2.png'
import bgimage3 from '../../assets/backgrounds/bgimage3.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


import { useState } from 'react'

const Herosection = () => {

    const heroData = [
        {   
            image: bgimage1, 
            title: 'Highest Quality', 
            description : 'High Performance and Elegant Design', 
            paragraph: 'Sleek designs, cutting-edge tech, unmatched performance for modern living', 
            btn: 'View Headphones'
        },

        {   
            image: bgimage2, 
            title: 'Superior Craftsmanship', 
            description : 'Technology That Inspires Confidence', 
            paragraph: 'Experience innovation, style, and performance in every electronic product.', 
            btn: 'View Headphones'
        },

        {   
            image: bgimage3, 
            title: 'Highest Quality', 
            description : 'Experience Power, Discover Style', 
            paragraph: 'Technology redefined: sleek, powerful, reliable, designed for your lifestyle', 
            btn: 'View Headphones'
        },
    ]

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {

        if(current === heroData.length -1 ){
            setCurrent(0)

        }
        else{
            setCurrent(current + 1)
        }
    }

    const prevSlide = () => {

        if(current === 0 ){

            setCurrent(heroData.length - 1)

        }
        else{
            setCurrent(current - 1)
        }
    }
    
  return (
    <header>
        <div className="relative">
            <img className="h-96 md:h-[800px] object-cover overflow-hidden"
            src={heroData[current].image} 
            alt="banner" />
            <div className='bg-black/40 inset-0 w-full absolute'>

            </div>
            <div className="absolute inset-0 flex justify-between items-center mx-5">
                <button onClick={prevSlide} className="bg-white rounded-full p-2 cursor-pointer text-2xl"><IoIosArrowBack /></button>
                    <div className="text-center text-white">
                        <p className="md:pb-5 md:text-[20px] text-[16px] font-medium mx-auto py-5">{heroData[current].title}</p>
                        <h1 className="md:pb-5 md:text-7xl text-3xl md:w-[800px] font-bold md:leading-20 mx-auto">{heroData[current].description}</h1>
                        <p className="md:pb-5 md:text-[22px] text-[14px] font-light mx-auto md:mt-5 md:mb-5 py-5">{heroData[current].paragraph}</p>
                        <button className="cursor-pointer px-5 py-4 bg-white rounded-full font-medium md:text-[16px] text-black">{heroData[current].btn}</button>
                    </div>
                <button onClick={nextSlide} className="bg-white rounded-full p-2 cursor-pointer text-2xl"><IoIosArrowForward /></button>
            </div>
        </div>
    </header>
  )
}

export default Herosection