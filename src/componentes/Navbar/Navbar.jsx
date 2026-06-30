import { useState } from 'react'
import voltify from '../../assets/logos/voltify.png'
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar(){

    const [menuOpen, setmenuOpen] = useState(false)

    const toggle = () => {
        setmenuOpen(!menuOpen)
    }

  return (

        <nav className='mt-5 relative'>
            <div className='bg-white py-5 rounded-t-4xl'>
                <div className='container mx-auto flex justify-between items-center px-5'>
                    <div className='mx-auto gap-30 md:mx-0 flex justify-between items-center md:gap-5'>

                            <button onClick={toggle} className='md:hidden text-3xl flex justify-center items-center cursor-pointer'>
                                {
                                    menuOpen ? <div className='hover:animate-rotate-180'><IoClose /></div> : <div><HiOutlineMenuAlt2 /></div>
                                }
                            </button>
                    
                        {/* Logo */}
                        <div className='mx-auto'>
                            <img className='h-16 md:h-20'
                            src={voltify} 
                            alt="" />
                        </div>

                        {/* Mobile menu */}
                        <div className={`md:hidden backdrop:backdrop-blur-lg bg-white w-full top-[102px] left-0 absolute p-5  
                            rounded-b-4xl z-50 animate-fade-in-down duration-50 h-[480px]
                            ${
                                menuOpen ? 'block' : 'hidden'
                            }`}>
                            
                            <div className='border-b-[0.1rem] border-gray-300 mb-5'>
                                <h1 className='text-2xl font-semibold mb-5'>Menu</h1>
                            </div>
                            
                            <ul className='flex flex-col p-2 gap-5 text-black text-[18px]'>
                                <li><a href="">Home</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Headphones</a></li>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>

                            <div className='flex items-center gap-2 mt-8 cursor-pointer'>
                                    <a href="" className='text-2xl text-red-500 font-semibold'><VscAccount /></a>
                                    <a href="" className='text-2xl text-red-500 font-semibold'>Account</a>
                                </div>
                        </div>

                            <p className='text-3xl md:hidden'><BsCart2 /></p>

                        {/* Desktop menu */}
                        <div className='hidden md:block'>
                            <ul className='flex justify-between items-center gap-5 text-xl'>
                                <li><a href="">Home</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Headphones</a></li>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Icons for desktop */}
                    <div className='hidden md:block'>

                        <div className='flex justify-between items-center gap-6 text-[25px]'>
                            <p><IoIosSearch /></p>

                                <div className='flex justify-center items-center gap-3'>
                                    <p><VscAccount /></p>
                                    <p>Account</p>
                                </div>

                             <p><BsCart2 /></p>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
  )
}

export default Navbar