import React, { useState } from 'react'
import { datasetCreator, filterByName, filterByStartDate } from './Functions'

function InputField({diseases, setDiseaseData}) {

    const diseases_list = ["HIV","Chlamydia","E.Coli"]
    const time_list = ['3 months','6 months', '1 year', '2 years', '3 years', 'all']
    const current_clicked = []
    const [start, setStart] = useState("")
    const end_date = []

    const start_date = "2022-09-16"

    const handleChange = (e,arr,illness) =>{
        {if(arr.includes(illness)){
            const indexZ = arr.indexOf(illness)
            arr.splice(indexZ, 1)
            console.log(arr)
          }else{
            arr.push(illness)
            console.log(arr)
          }}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dateFilter()
        current_clicked = []
    }

    const handleDate = (e) => {
        console.log((e.target.value === start_date))
        console.log(filterByStartDate(e.target.value, diseases))
    }

    const dateFilter = () => {
        setDiseaseData(filterByStartDate(start,diseases))
    }

    const filterIf = () => {
        if(!(current_clicked.length == 0)){
            console.log(diseases)
            setDiseaseData((filterByName(current_clicked, diseases)))
        }else{
            setDiseaseData(diseases)
        }
    }



    const checkboxes = (arr) => {

        const list_items = arr.map((item) =>{return(
            <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange = {e => handleChange(e,current_clicked,item)}
                />
                <label for={`${item}-checkbox`} class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
            </div>
        </li>
        )})
        return(
            <>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-red-500">Diseases</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
       {list_items}
    </ul>
            </>
        )

    }

    const time_options = (timeObj) => {
        return(
            <>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-red-500">Times</h3>
            <div class="mb-3 xl:w-96">
            <select class="form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option selected>Open this select menu</option>
                {
                timeObj.map(time => { return(<option value="time">{time}</option>)})
                }
            </select>
          </div>
        </>
        )
       
    }

    const dateInputFields = ()=>{
        return(
           <>
                <div>
                <label 
                    for="start_date" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                Start Date
                </label>
                <input 
                type="date" 
                id="start_date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="08-18-2017"
                value = {start}
                onChange = {e =>handleDate(e)}
                />
            </div>
            <div>
                <label 
                for="end_date" 
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                End Date</label>
                <input 
                type="date" 
                id="end_date" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="08-18-2022" 
                />
            </div>
           </>
        )
    }

  return (
    <form
    onSubmit={handleSubmit}
    >
        {time_options(time_list)}
        {dateInputFields()}
        {checkboxes(diseases_list)}
        <button type = "submit">Press me</button>
    </form>
  )
}

export default InputField