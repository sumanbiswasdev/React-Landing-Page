
import Navbar from './componentes/Navbar/Navbar'
import Herosection from './componentes/Herosection/Herosection'
import Logoslide from './componentes/Logoslide/Logoslide'
import Card from './componentes/Card/Card'

import earphones from './assets/products/earphones.png'
import headphones from './assets/products/headphones.png'
import microphone from './assets/products/microphone.png'
import smartwatch from './assets/products/smartwatch.png'

import bgimage4 from './assets/backgrounds/bgimage4.png'



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
                    <div className='mt-5 mx-5 md:mx-0 overflow-hidden rounded-lg flex flex-col'>
                        <img className='w-full h-[350px] md:h-full object-cover rounded-2xl'
                        src={bgimage4} 
                        alt="banner" />
                        <div className='absolute inset-0 py-8 px-12 md:mt-16'>
                            <p className='text-white mb-5 md:text-lg'>Premium Standards</p>
                            <h1 className='font-bold mb-5 text-3xl md:text-[3.8rem] w-[450px] md:w-[600px] bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent'>Elevate Your Audio Experience with Sony Headphones</h1>
                            <p className='text-white mb-5 md:text-xl'>Elevate Your life with electronic designed for style and performance.</p>
                            <button className='bg-white px-5 py-3 text-black rounded-full md:mt-5'>Shop Now</button>
                        </div>
                        
                    </div>
                    
                </div>
            </section>

        </>
  )
}

export default Index