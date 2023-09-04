"use client"

import React,{useContext} from 'react'
import { CountContext } from '../context'

const Test = () => {
    // jis k value yha get krni h wo useContext mai ae ga. q k multiple context b ho skte hai

    const secondPageContextUse = useContext(CountContext)
  return (
    <div className='text-3xl font-bold items-center justify-center flex'>{secondPageContextUse.count}</div>
  )
}

export default Test