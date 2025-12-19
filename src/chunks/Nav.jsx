import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';



function Nav({ search = "", onSearch = () => {} }) {
  const [localSearch, setLocalSearch] = useState(search);
  

  const navigate = useNavigate();

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);



  return (
    <div className='w-full h-[70px] bg-black border-b  shadow-sm flex items-center px-4 md:px-8 justify-between sticky top-0 z-50'>
      
      {/* 1. LEFT SIDE - LOGO */}
      <div 
        className='w-1/3 flex items-center gap-2 cursor-pointer md:w-1/3 w-auto'
        // Optional: Navigate home when logo is clicked
        onClick={() => navigate('/')} 
      >
        <div className='h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg'>
          M
        </div>
        <span className='hidden md:inline text-xl font-bold tracking-tight text-white'>
          Movie<span className='text-blue-600'> Hub</span>
        </span>
      </div>

      {/* 2. CENTER - SEARCH BAR */}
      <div className='hidden md:flex w-1/3 justify-center'>
        <div className='relative w-full max-w-[450px] group'>
          <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={localSearch}
            onChange={(e) => {
              const v = e.target.value;
              setLocalSearch(v);
              onSearch(v);
            }}
            className='w-full bg-gray-100 text-gray-700 text-sm rounded-full py-3 pl-12 pr-10 border border-transparent 
                       outline-none transition-all duration-300 ease-in-out
                       focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-100 focus:shadow-lg placeholder-gray-400'
          />

          <div 
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-200 ${
              localSearch ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            }`}
          >
            <button
              onClick={() => {
                setLocalSearch("");
                onSearch("");
              }}
              className='p-1 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH BELOW NAV */}
      <div className='w-full md:hidden mt-2 px-2'>
        <input
          type="text"
          placeholder="Search..."
          value={localSearch}
          onChange={(e) => {
            const v = e.target.value;
            setLocalSearch(v);
            onSearch(v);
          }}
          className='w-full bg-gray-100 text-gray-700 text-sm rounded-lg py-2 px-3 outline-none focus:bg-white focus:ring-2 focus:ring-blue-300'
        />
      </div>

      {/* 3. RIGHT SIDE - CART BUTTON */}
      <div className='w-auto md:w-1/3 flex justify-end items-center gap-3'>
        
     
      </div>
      

    </div>
  )
}

export default Nav;