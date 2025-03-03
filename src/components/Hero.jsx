import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
                <button
                    type='button'
                    onClick={() => window.open('#')}
                    className='black_btn'
                >
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                Summarize with <br className='max-md:hidden' />
                <span className='orange_gradient'>AI Power</span>
            </h1>
            <h2 className='desc'>
                Get concise and clear summaries in seconds with AI-powered efficiency
            </h2>
        </header>
    )
}

export default Hero
