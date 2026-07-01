import earphones from '../../assets/products/earphones.png'
import headphones from '../../assets/products/headphones.png'
import microphone from '../../assets/products/microphone.png'
import smartwatch from '../../assets/products/smartwatch.png'

import React from 'react'

const Card = () => {

    const produtcs = [
        
        {
            image: earphones,
            title: 'Earphones',
            quantity: '10 Products',
            button: 'View Produtcs',
        },

        {
            image: headphones,
            title: 'Headphones',
            quantity: '8 Products',
            button: 'View Produtcs',
        },

        {
            image: microphone,
            title: 'Microphones',
            quantity: '8 Products',
            button: 'View Produtcs',
        },

        {
            image: smartwatch,
            title: 'Smartwatches',
            quantity: '7 Products',
            button: 'View Produtcs',
        },
    ]

  return (
    <main>
        <section>
                <div className='bg-white'>
                    <div className='container mx-auto bg-[#F4F4F5] p-5 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-3 overflow-hidden'>
 
                        {produtcs.map((product) => (
                            
                            <div>
                                <h1>{product.title}</h1>
                                <p>{product.quantity}</p>
                                <img className='h-auto w-full object-cover'
                                src={product.image} 
                                alt="produtcs" />
                                
                                <button>{product.button}</button>
                            </div>

                        ))}

                </div>
                </div>
        </section>
    </main>
  )

}

export default Card