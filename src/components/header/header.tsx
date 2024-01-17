import React, { useState, useEffect } from 'react'
import LogoImg from '../../assets/logo.png'

const Header = () => {
  const [navColor, setnavColor] = useState('transparent')

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#9EA9B1') : setnavColor('transparent')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <header className='sticky top-0 z-50'>
      <nav
        style={{
          backgroundColor: navColor,
          transition: 'all 1s'
        }}
      >
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='/' className='flex items-center'>
            <img src={LogoImg} className='h-14 mr-3' alt='Logo' />
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div className='hidden w-full lg:block lg:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0'>
              <li>
                <a
                  href='/'
                  className='block py-2 pl-3 pr-4 md:p-0 cta-white active'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a href='/' className='block py-2 pl-3 pr-4 md:p-0 cta-white'>
                  About
                </a>
              </li>
              <li>
                <a href='/' className='block py-2 pl-3 pr-4 md:p-0 cta-white'>
                  Services
                </a>
              </li>
              <li>
                <a href='/' className='block py-2 pl-3 pr-4 md:p-0 cta-white'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='/' className='block py-2 pl-3 pr-4 md:p-0 cta-white'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
