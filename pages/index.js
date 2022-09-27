import { data } from 'autoprefixer'
import { collection, getDocs } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import randomColor from 'randomcolor'
import { useEffect, useState } from 'react'
import FullPage from '../components/FullPage'
import Graph from '../components/Graph'
import InputField from '../components/InputField'
import { db } from '../firebase'
import styles from '../styles/Home.module.css'
import {GraphContext} from "../contexts/GraphContext"
import { filterbyEndDate } from '../components/Functions'
import { DateTime } from 'luxon'

export default function Home({ diseases,traveldata }) {
  const today = DateTime.now().toISO()
  const [diseasesData, setDiseaseData] = useState(filterbyEndDate(today, diseases))

  
  const [start, setStart] = useState("");
  const [trends, showTrends] = useState(false)
  const [travel, setTravel] = useState(true)
  const [projection, setProjection] = useState(false)


  return (
    <>
     <GraphContext.Provider value = {{
      diseases,diseasesData,setDiseaseData,
      start, setStart, trends, showTrends,
      travel, setTravel, traveldata,
      projection, setProjection
      }} >
      <FullPage />
    </GraphContext.Provider>
    </>
  )
}


export async function getServerSideProps(){
  const diseaseRef = collection(db,"diseases")
  const allDisease = await getDocs(diseaseRef)
  const allDiseaseData = allDisease.docs.map(doc => doc.data())

  const travelRef = collection(db,"travelair")
  const allTravel = await getDocs(travelRef)
  const allTravelData = allTravel.docs.map(doc => doc.data())
  return {
      props:{
          diseases: allDiseaseData,
          traveldata: allTravelData,
      }
  }
}

