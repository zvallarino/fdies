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

export default function Home({ diseases }) {
  const today = DateTime.now().toISO()
  const [diseasesData, setDiseaseData] = useState(filterbyEndDate(today, diseases))

  
  const [start, setStart] = useState("");
  const [trends, showTrends] = useState(false)
  const [travel, setTravel] = useState(true)
  const [projection, setProjection] = useState(false)


  return (
    <>
      <Head>
        <title>Pop Council Disease Tracker</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
     <GraphContext.Provider value = {{
      diseases,diseasesData,setDiseaseData,
      start, setStart, trends, showTrends,
      travel, setTravel,
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

  return {
      props:{
          diseases: allDiseaseData,
      }
  }
}

