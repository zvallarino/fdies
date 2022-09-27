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

export default function Home({ diseases }) {

  const [diseasesData, setDiseaseData] = useState(diseases)

  const [start, setStart] = useState("");



  return (
    <>
     <GraphContext.Provider value = {{
      diseases,diseasesData,setDiseaseData,
      start, setStart, 
      }} >
      <FullPage />
    </GraphContext.Provider>
    </>
  )
}


export async function getServerSideProps(){
  const stepOneRef = collection(db,"diseases")
  const allData = await getDocs(stepOneRef)
  const allDiseaseData = allData.docs.map(doc => doc.data())
  return {
      props:{
          diseases: allDiseaseData,
      }
  }
}

