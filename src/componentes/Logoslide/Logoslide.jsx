import beatsaudio from '../../assets/logos/beatsaudio.png'
import bose from '../../assets/logos/bose.png'
import logitech from '../../assets/logos/logitech.png'
import sennheiser from '../../assets/logos/sennheiser.png'
import skullcandy from '../../assets/logos/skullcandy.png'
import sony from '../../assets/logos/sony.png'
import urbanista from '../../assets/logos/urbanista.png'

import React from 'react'

const Logoslide = () => {
    
    const infiniteLogos = [
        beatsaudio,
        bose,
        logitech,
        sennheiser,
        skullcandy,
        sony,
        urbanista
    ]


  return (
    
    <main>
        <section>
              <div className='bg-white'>
                <div className='container mx-auto overflow-hidden py-5'>
                  <div className='w-full animate-scroll gap-12 flex'>

                    {infiniteLogos.map((logo, index) => (
                      <img className='h-20 mx-10' 
                      key={index} 
                      src={logo} 
                      alt="infiniteLogos" />
                    ))}
                    
                    {infiniteLogos.map((logo, index) => (
                      <img className='h-20 mx-10' 
                      key={index} 
                      src={logo} 
                      alt="infiniteLogos" />
                    ))}
                    
                  </div>

                </div>

              </div>
        </section>
    </main>

  )
}

export default Logoslide