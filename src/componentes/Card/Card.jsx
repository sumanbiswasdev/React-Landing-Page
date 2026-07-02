const Card = ({id, title, quantity, image, button}) => {
        

  return (
    <main>
        <section>
                <div className='flex flex-col justify-between items-center gap-4 p-4 overflow-hidden h-full'>

                    <div>
                        <h1>{title}</h1>
                        <p>{quantity}</p>
                    </div>

                    <div>
                        <img className='h-48 w-full object-cover'
                        src={image} 
                        alt={title} />
                    </div>

                    <button>{button}</button>

                    
                </div>
        </section>
    </main>
  )

}

export default Card