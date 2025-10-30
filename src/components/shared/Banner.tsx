import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import bannerImg from '@/assets/banner.jpg'
const Banner = () => {
    return (
        <div className='bg-slate-100'>
            <div className='px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                <div>
                    <Image src={bannerImg} alt='Banner Image'/>
                </div>
                <div className='space-y-4 flex-col'>
                    <h4 className='text-sm font-medium text-gray-500 '>Technology</h4>
                    <h2 className='text-3xl font-bold'>OpenAi Is Growing Fast and Burning Through Piles of Money</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio repudiandae sequi quas corporis, libero tempora. Corrupti, magnam! Voluptatum a corporis aut eligendi sed exercitationem expedita aliquid nihil, cum commodi suscipit?</p>
                    <Button variant="default">Read More</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner
