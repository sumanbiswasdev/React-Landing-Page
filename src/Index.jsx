
import Navbar from './componentes/Navbar/Navbar'
import Herosection from './componentes/Herosection/Herosection'
import Logoslide from './componentes/Logoslide/Logoslide'
import Card from './componentes/Card/Card'

import earphones from './assets/products/earphones.png'
import headphones from './assets/products/headphones.png'
import microphone from './assets/products/microphone.png'

const Index = () => {

    const featuredItems =[

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
        },

    ]

  return (
    
        <>
            <Navbar></Navbar>
            <Herosection></Herosection>
            <Logoslide></Logoslide>

            <section>
                    <div className='bg-white container mx-auto'>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>

                        </div>

                    </div>
            </section>

        </>
  )
}

export default Index