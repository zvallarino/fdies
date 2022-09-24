import React, { useState } from 'react'
import Graph from './Graph'
import InputField from './InputField'

function FullPage({diseases}) {
  const [diseasesData, setDiseaseData] = useState(diseases)
  return (
    <>
      <InputField setDiseaseData = {setDiseaseData} diseases = {diseases} />
      <Graph diseases = {diseasesData}/>
    </>
  )
}

export default FullPage