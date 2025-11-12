import React from 'react'

export default async function ContractDetails({params}) {
        const { id } = await params
    return (
    <div>
        <h1>Contract Details Page</h1>
        <h1 className='text-8xl text-red-600'>Id:{id}</h1>
    </div>
  )
}
