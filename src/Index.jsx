
import Navbar from './componentes/Navbar/Navbar'
import Herosection from './componentes/Herosection/Herosection'
import Logoslide from './componentes/Logoslide/Logoslide'
import Card from './componentes/Card/Card'

import earphones from './assets/products/earphones.png'
import headphones from './assets/products/headphones.png'
import microphone from './assets/products/microphone.png'
import smartwatch from './assets/products/smartwatch.png'

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

            <section>
                    <div className=' bg-white'>
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 rounded-lg p-8'>
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

                    </div>
            </section>

        </>
  )
}

export default Index