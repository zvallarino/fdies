import { collection, getDocs } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { db } from '../firebase'
import styles from '../styles/Home.module.css'

export default function Home({ diseases }) {
  
  const wordsExample = ["HIV","E.Coli"]
  const filterByName = (words, arr) => {
      let answer = []
      for( const property in arr){
        if(words.includes(arr[property].name)){
          answer.push(arr[property])
        }
      }
      return answer
  }

  const exampleStartDate = "2020-01-01"
  const exampleEndDate = "2022-02-01"

  const filterByStartDate = (startDate,arr) => {
    let answer = []
    for( const property in arr){
      if(arr[property].date > startDate){
        answer.push(arr[property])
      }
    }
    return answer
  }

  const filterbyEndDate = (endDate,arr) => {
    let answer = []
    for( const property in arr){
      if(arr[property].date < endDate){
        answer.push(arr[property])
      }
    }

    return answer
  }

  const filterbyStartandEndDate = (startDate, endDate, arr) => {
    let answer = []

    for( const property in arr){
      if((startDate < arr[property].date)&&(arr[property].date< endDate)){
        answer.push(arr[property])
      }
    }
    return answer
  }


  const filterByStartDateandWords = (startDate,words,arr) =>{
    let answer = []
    for( const property in arr){
      if((startDate < arr[property].date)&&(words.includes(arr[property].name))){
        answer.push(arr[property])
      }
    }
    return answer
  }

  const filterByStartDateandEndDateandWords = (startDate,endDate,words,arr) =>{
    let answer = []
    for( const property in arr){
      if(
        (startDate < arr[property].date)
        &&(arr[property].date< endDate)
        &&(words.includes(arr[property].name))
        
        ){
        answer.push(arr[property])
      }
    }
    return answer
  }

  const createGraphObject = (arr) => {
    const newObject = {}
    for(let i = 0; i<arr.length; i++){
      if(newObject[arr[i].name]){
        newObject[arr[i].name].push({
          x:arr[i].date, y:arr[i].case_count
        })
      }else{
        newObject[arr[i].name] = [{
          x:arr[i].date, y:arr[i].case_count
        }]
      }
    }
    return (newObject)
  }

  const sortGraphObject = (obj) => {
    const answer = []
    for(const property in obj){
      answer.push(obj[property].sort(function(a,b){
        return new Date(a.x) - new Date(b.x)
      }))
    }
    return answer
  }

  useEffect(()=>{
    console.log(sortGraphObject(createGraphObject(filterByStartDateandEndDateandWords(exampleStartDate,exampleEndDate, wordsExample,diseases))))
  },[])

  return (
    <div className="text-3xl font-bold underline text-green-400">
     Hello
    </div>
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

