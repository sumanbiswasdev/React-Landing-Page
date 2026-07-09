
import Navbar from './componentes/Navbar/Navbar'
import Herosection from './componentes/Herosection/Herosection'
import Logoslide from './componentes/Logoslide/Logoslide'
import Card from './componentes/Card/Card'

import earphones from './assets/products/earphones.png'
import headphones from './assets/products/headphones.png'
import microphone from './assets/products/microphone.png'
import smartwatch from './assets/products/smartwatch.png'

import bgimage4 from './assets/backgrounds/bgimage4.png'
import bgimage5 from './assets/backgrounds/bgimage5.png'
import bgimage6 from './assets/backgrounds/bgimage6.png'

import video1 from '../public/video1.mp4'



const Index = () => {

    const featuredItems = [

        {
            id: 1,
            title: 'Earphones',
            quantity: '10 Products',
            image: earphones,
            button: 'View products' ,
        },

        {
            id: 2,
            title: 'Headphones',
            quantity: '8 Products',
            image: headphones,
            button: 'View products' ,
        },

        {
            id: 3,
            title: 'Microphone',
            quantity: '12 Products',
            image: microphone,
            button: 'View products' ,
        },

        {
            id: 4,
            title: 'Smartwatch',
            quantity: '20 Products',
            image: smartwatch,
            button: 'View products' ,
        }

    ]

  return (
    
        <>
            <Navbar></Navbar>
            <Herosection></Herosection>
            <Logoslide></Logoslide>

            <section className='bg-white'>

                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-5 md:p-0'>
                            {featuredItems.map((item) => (
                                <Card 
                                key={item.id}
                                title={item.title}
                                quantity={item.quantity}
                                image={item.image}
                                button={item.button}

                                />
                            ))}
                        </div>
            </section>

            <section className='bg-white'>
                <div className='container mx-auto relative'>
                    <div className='py-12 mx-5 md:mx-0 overflow-hidden rounded-lg flex flex-col'>
                        <img className='w-full h-[350px] md:h-full object-cover rounded-2xl'
                        src={bgimage4} 
                        alt="banner" />
                        <div className='absolute inset-0 py-8 px-12 md:mt-16'>
                            <p className='text-white mb-5 md:text-lg'>Premium Standards</p>
                            <h1 className='font-bold mb-5 text-3xl md:text-[3.8rem] w-[450px] md:w-[600px] bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent'>Elevate Your Audio Experience with Sony Headphones</h1>
                            <p className='text-white mb-5 md:text-xl'>Elevate Your life with electronic designed for style and performance.</p>
                            <button className='bg-white px-8 text-[18px] cursor-pointer py-3 text-black 
                            rounded-full md:mt-5 hover:bg-[#e8e8ef] transition-all ease-in-out duration-300'>Shop Now <span>&rarr;</span></button>
                        </div>
                        
                    </div>
                    
                </div>
            </section>

            <section>
                <div className='bg-white'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-7 mx-5 md:mx-0 py-12'>
                            {/* Right card */}
                            <div className='bg-[#EEEEEE] mt-5 md:mt-0 relative rounded-2xl flex flex-col justify-between items-center overflow-hidden'>
                                <div className='flex flex-col justify-between items-center absolute mt-8 md:mt-12 space-y-2 text-center'>
                                    <p className='font-medium text-[16px] md:text-[18px]'>Unrivaled Precision</p>
                                    <h1 className='font-bold text-3xl w-[350px] md:text-4xl md:w-[500px]'>Where Innovation Meets Immersive Sound</h1>
                                    <p>Power meets precision in every detail.</p>
                                    <button className='mt-2 bg-white px-8 text-[18px] cursor-pointer py-3 text-black rounded-full md:mt-5 hover:bg-[#e8e8ef] transition-all ease-in-out duration-300'>Shop Now <span>&rarr;</span></button>
                                </div>

                                <div className='md:w-full mt-24 md:mt-0'>
                                    <img className='md:w-full md:h-auto md:object-cover' src={bgimage5} alt="" />
                                </div>

                            </div>
                            {/* Left card */}
                            <div className='bg-[#EEEEEE] mt-5 mb-5 md:mb-0 md:mt-0 relative rounded-2xl flex flex-col justify-between items-center overflow-hidden'>

                                <div className='md:w-full mb-24 md:mb-0 md:mt-0'>
                                    <img className='w-full h-auto object-cover' src={bgimage6} alt="" />
                                </div>

                                <div className='flex flex-col justify-between items-center absolute inset-be-0 mb-12 space-y-2 text-center'>
                                    <p className='font-medium text-[16px] md:text-[18px]'>Peak Perfection</p>
                                    <h1 className='font-bold text-3xl w-[340px] md:text-4xl md:w-[500px]'>Smart Solutions, Sleek Designs</h1>
                                    <p>Smart solutions for a connected world.</p>
                                    <button className='mt-2 bg-white px-8 text-[18px] cursor-pointer py-3 text-black 
                                    rounded-full md:mt-5 hover:bg-[#e8e8ef] transition-all ease-in-out duration-300'>Shop Now <span>&rarr;</span></button>
                                </div>

                                

                            </div>

                        </div>
                        
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-white'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col py-12'>

                            <div className='md:flex items-center gap-8'>
                                <h1 className='font-medium mx-5 md:mx-0 text-2xl md:text-5xl'>Capture Every Detail</h1>
                                <p className='font-normal text-lg mx-5 md:mx-0 mt-5 md:mt-0 text-gray-500'>Capture every nuance of your voice with this high-performance microphone.</p>
                            </div>

                            <div className='mt-8 mx-auto md:mx-0 relative'>

                                <video className='w-96 h-96 md:w-full md:h-auto rounded-2xl object-cover z-0' autoPlay muted loop playsInline>
                                    <source src={video1} type="" />
                                </video>

                                <div className='absolute inset-0 mx-auto md:mx-0 flex flex-col justify-center items-center
                                 text-white md:space-y-1 text-center w-[400px] md:w-full'>
                                    <p className='text-[15px] md:text-[18px] font-medium'>Highest Qualitys</p>
                                    <h1 className='text-[25px] md:text-[4rem] md:w-[900px] font-bold mt-5 md:mt-0'>Redifine Your Sound with Precision Microfones</h1>
                                    <p className='text-[15px] w-[310px] md:text-[20px] text-gray-300 md:w-full font-light mt-5 md:mt-0'>Innovative tech, timeless design, ultimate experience.</p> 
                                    <button className='bg-white text-[18px] mt-5 md:mt-0 cursor-pointer p-2 mt-2 md:mt-0 md:px-8 md:py-3 text-black 
                                    rounded-full md:mt-5 hover:bg-[#e8e8ef] transition-all ease-in-out duration-300'>Shop Now <span>&rarr;</span></button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section>
                <div className='bg-[#F4F4F5]'>
                    <div className='container mx-auto'>
                        <div className='py-12'>
                            
                            <div className='text-center'>
                                <h1>Our Happy Clients</h1>
                                <p>See what our satisfied customers have to say about our electronic accessories.</p>
                            </div>

                            <div className='relative py-8'>
                                <div className='absolute'>
                                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 rounded-2xl p-5 bg-white'>

                                    </div>
                                    <button></button>
                                </div>

                            </div>

                            <div></div>
                        </div>

                    </div>

                </div>
            </section>

        </>
  )
}

export default Index