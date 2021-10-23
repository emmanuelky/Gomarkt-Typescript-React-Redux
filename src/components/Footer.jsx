import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-wrap justify-evenly fixed-bottom py-3 text-gray-300 bg-yellow-800">
            <div className="border-l border-r border-gray-400">
                <span className='mx-4'>Imprint</span>
            </div>
            <div className="border-l border-r border-gray-400">
                <span className='mx-4'>Services</span>
            </div>

            <div className="border-l border-r border-gray-400">
                <span className='mx-4'>Features</span>
            </div>

            <div className="border-l border-r border-gray-400">
                <span className='mx-4'>Contact</span>
            </div>



        </div>
    )
}

export default Footer