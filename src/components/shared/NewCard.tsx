import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../ui/button'
import { NewCardProps } from "@/types/news"

const NewsImage = ({ item }: NewCardProps) => {
  return (
    <div className="h-full">
      <div className="border-4 p-4 rounded-md shadow-emerald-500 h-full flex flex-col">
        <Link href={`/`}>
          <Image
            src={item?.imageUrl}
            width={500}
            height={500}
            alt="news card"
            priority
            className="w-full h-[200px] object-cover rounded"
          />
        </Link>

        <h2 className="text-xl font-semibold my-3">
          {item.title}
        </h2>

        <p className="text-gray-600 line-clamp-3 grow">
          {item.description}
        </p>

        <Link href={`/`}>
          <Button variant="default" className="mt-4">Read More</Button>
        </Link>
      </div>
    </div>
  )
}

export default NewsImage
