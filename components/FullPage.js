import React, { useState } from 'react'
import Graph from './Graph'
import InputField from './InputField'
import Trends from './Trends'

function FullPage() {
  return (
    <div className = "bg-gray-200 border border-8 border-green-500 grid grid-cols-7 grid-rows-5 h-screen">
      <InputField />
      <Graph/>
      {/* <Trends /> */}
    </div>
  )
}

export default FullPage