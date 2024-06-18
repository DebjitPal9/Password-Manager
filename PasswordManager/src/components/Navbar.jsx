import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800'>
        <div className="mycontainer flex justify-between items-center px-5 h-10">
        <div className='logo font-bold text-white text-2xl'>
            <span className='text-green-700 text-2xl'>&lt;</span>
            Pass
            <span className='text-green-700 text-2xl'>Man/&gt;</span>
            
        </div>
        {/* <ul>
            <li className='flex gap-4 text-white'>
                <a className='hover:font-bold' href="#" >Home</a>
                <a className='hover:font-bold'  href="#">About</a>
                <a className='hover:font-bold'  href="#">Contact</a>
            </li>    
        </ul>  */}
        <div>
          <a href='https://github.com/DebjitPal9' target='_blank'><img className="rounded-full w-10 h-10" src="https://avatars.githubusercontent.com/u/63508896?v=4" alt="image description"/></a>
          <p className='text-white'>GitHub</p>
        </div>
        </div>       
    </nav>
  )
}

export default Navbar
