const Card = ({id, title, quantity, image, button}) => {
        

  return (
    <main>
        <section>
                <div className='max-w-sm rounded-2xl overflow-hidden bg-[#f4f4f5] flex flex-col h-full p-8'>

                    <div className="mb-5">
                        <h1 className="font-semibold text-[25px]">{title}</h1>
                        <p className="font-medium text-gray-500 text-[14px]">{quantity}</p>
                    </div>

                    <div>
                        <img className=' w-full object-cover'
                        src={image} 
                        alt={title} />
                    </div>

                    <button className="bg-white p-3 mt-8 w-44 rounded-full font-semibold text-[16px] cursor-pointer">
                        {button}
                    </button>

                    
                </div>
        </section>
    </main>
  )

}

export default Card