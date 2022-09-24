import randomColor from "randomcolor"

export const filterByName = (words, arr) => {
    let answer = []
    for( const property in arr){
      if(words.includes(arr[property].name)){
        answer.push(arr[property])
      }
    }
    return answer
}

export const filterByStartDate = (startDate,arr) => {
  let answer = []
  for( const property in arr){
    if(arr[property].date > startDate){
      answer.push(arr[property])
    }
  }
  return answer
}

export const filterbyEndDate = (endDate,arr) => {
  let answer = []
  for( const property in arr){
    if(arr[property].date < endDate){
      answer.push(arr[property])
    }
  }

  return answer
}

export const filterbyStartandEndDate = (startDate, endDate, arr) => {
  let answer = []

  for( const property in arr){
    if((startDate < arr[property].date)&&(arr[property].date< endDate)){
      answer.push(arr[property])
    }
  }
  return answer
}


export const filterByStartDateandWords = (startDate,words,arr) =>{
  let answer = []
  for( const property in arr){
    if((startDate < arr[property].date)&&(words.includes(arr[property].name))){
      answer.push(arr[property])
    }
  }
  return answer
}

export const filterByStartDateandEndDateandWords = (startDate,endDate,words,arr) =>{
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

export const createGraphObject = (arr) => {
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

export const sortGraphObject = (obj) => {
  const answer = []
  for(const property in obj){
    obj[property].sort(function(a,b){
      return new Date(a.x) - new Date(b.x)
    })
  }
  return obj
}

export const createDataSetFromGO = (graphOb) => {
    const dataset = []
    for(const property in graphOb){
      const obj = {
        label: property,
        data: graphOb[property],
        borderWidth: 1,
        fill: false,
        borderColor: randomColor()
      }
      dataset.push(obj)
    }
    return dataset
  }

export const datasetCreator = (dataset) =>{
    return createDataSetFromGO(sortGraphObject(createGraphObject(dataset)))
}
    

export const listOfNames = (obj) => {
  const answer = []
  for(const property in obj){
   if(!(answer.includes(obj[property].name))){
    answer.push(obj[property].name)
   }
  }
  return (answer)
}