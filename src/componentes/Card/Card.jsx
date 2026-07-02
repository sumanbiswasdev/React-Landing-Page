const Card = ({title, quantity, image, button}) => {
        
  return (
    <main>
        <section>
                <div className='rounded-2xl overflow-hidden bg-[#f4f4f5] w-full flex flex-col items-center p-5'>

                    <div className="text-center">
                        <h1 className="font-semibold text-[25px]">{title}</h1>
                        <p className="font-medium text-gray-500 text-[14px]">{quantity}</p>
                    </div>

                    <div>
                        <img className='h-64 w-64 object-cover my-8'
                        src={image} 
                        alt={title} />
                    </div>  

                    <button className="bg-white rounded-full font-semibold text-[14px] cursor-pointer px-5 py-3 hover:bg-[#e8e8ef] transition-all ease-in-out duration-300">
                        {button}
                    </button>

                    
                </div>
        </section>
    </main>
  )

}

export default Card