import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '../ui/button'
import {NewCardProps} from "@/types/news"
const newsImage = ({item}:NewCardProps) => {
  return (
    <div>
       <div className='border-4 p-4 rounded-md shadow-emerald-500'>
            <Link href={`news/${item?._id}`}>
                <Image src={item?.imageUrl} width={500} height={500} alt='new Cart'/>            
            </Link>
            <h2 className='text-xl font-semibold my-3'>
                {item.title}
            </h2>
            <p className='mb-4'>
                {item.description}
            </p>
           
            <Link href={`news/${item?._id}`}>
                <Button variant="default">Read More</Button>
            </Link>
       </div>
    </div>
  )
}

export default newsImage
