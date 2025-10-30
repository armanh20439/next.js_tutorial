import NewsList from '@/components/news/NewsList'
import React from 'react'

const Newspage = () => {
  return (
    <div className='py-12'>
      <h1 className='text-2xl font-bold mb-8'>Latest News</h1>
      <NewsList></NewsList>
    </div>
  )
}

export default Newspage
