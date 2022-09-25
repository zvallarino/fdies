import React, { useState } from 'react'
import Graph from './Graph'
import InputField from './InputField'
import Trends from './Trends'

function FullPage() {
  return (
    <>
      <InputField />
      <Graph/>
      <Trends />
    </>
  )
}

export default FullPage