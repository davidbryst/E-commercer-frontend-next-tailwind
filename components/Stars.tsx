import React from 'react'
import { HiStar } from 'react-icons/hi'

const Stars = ({mark} : any) => {
    return (
        <div className='flex mb-4'>
            <div className='flex text-yellow'>
                <HiStar className='h-5 w-5 cursor-pointer'></HiStar>
                <HiStar className='h-5 w-5 cursor-pointer'></HiStar>
                <HiStar className='h-5 w-5 cursor-pointer'></HiStar>
                <HiStar className='h-5 w-5 cursor-pointer'></HiStar>
                <HiStar className='h-5 w-5 cursor-pointer'></HiStar>
            </div>
            <div>
                <p className = "mx-1 text-granite text-sm">({mark})</p>
            </div>
        </div>
    )
}

export default Stars
