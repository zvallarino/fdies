import { DateTime } from "luxon";
import React, { useRef, useState } from "react";
import {
  filterbyEndDate,
  filterByEndDateandWords,
  filterByName,
  filterByStartDate,
  filterByStartDateandEndDateandWords,
  filterByStartDateandWords,
} from "./Functions";

function InputField({ diseases, setDiseaseData }) {

  const diseases_list = ["HIV", "Chlamydia", "E.Coli"];
  const time_list = [
    [DateTime.now().minus({ months: 3 }).toISO(), "3 Months"],
    [DateTime.now().minus({ months: 6 }).toISO(), "6 Months"],
    [DateTime.now().minus({ years: 1 }).toISO(), "1 Year"],
    [DateTime.now().minus({ years: 2 }).toISO(), "2 Years"],
    [DateTime.now().minus({ years: 3 }).toISO(), "3 Years"],
    [DateTime.now().minus({ years: 4 }).toISO(), "All"],
  ];

  // Diseases
  let current_clicked = [];
  const [listOfDiseases, setDiseaseList] = useState([])

  // Clicked Inputs
  const [inputObject, setInputObject] = useState ({})

  // Optional Input
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // DropDown Time
  const [startDrop, setStartDrop] = useState("");


  const newHandleChange = (e, illness) => {

    setInputObject({...inputObject,[`${illness}`]:e.target.checked})

    if(listOfDiseases.includes(illness)){
      const indexZ = listOfDiseases.indexOf(illness);
      setDiseaseList(...listOfDiseases,listOfDiseases.splice(indexZ, 1));
    } else {
      listOfDiseases.push(illness);
    }

  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (current_clicked.length > 0 && startDrop) {
      setDiseaseData(
        filterByStartDateandWords(startDrop, current_clicked, diseases)
      );
    } else if (current_clicked.length > 0 && start && end) {
      setDiseaseData(
        filterByStartDateandEndDateandWords(
          start,
          end,
          current_clicked,
          diseases
        )
      );
    } else if (current_clicked.length > 0 && start) {
      setDiseaseData(
        filterByStartDateandWords(start, current_clicked, diseases)
      );
    } else if (current_clicked.length > 0 && end) {
      setDiseaseData(filterByEndDateandWords(end, current_clicked, diseases));
    } else if (start) {
      setDiseaseData(filterByStartDate(start, diseases));
    } else if (end) {
      setDiseaseData(filterbyEndDate(end, diseases));
    } else if (startDrop) {
      setDiseaseData(filterByStartDate(startDrop, diseases));
    } else if (current_clicked.length > 0) {
      setDiseaseData(filterByName(current_clicked, diseases));
    } else {
      setDiseaseData(diseases);
    }

    current_clicked = [];


    if(Object.keys(inputObject).length === 0){
        console.log("works")
    }else{
      setInputObject({})
    }

    setDiseaseList([])
  }

  function newSubmit(e){
    e.preventDefault();
    console.log(e.target)


    if (listOfDiseases.length > 0 && startDrop) {
      setDiseaseData(
        filterByStartDateandWords(startDrop, listOfDiseases, diseases)
      );
    } else if (listOfDiseases.length > 0 && start && end) {
      setDiseaseData(
        filterByStartDateandEndDateandWords(
          start,
          end,
          listOfDiseases,
          diseases
        )
      );
    } else if (listOfDiseases.length > 0 && start) {
      setDiseaseData(
        filterByStartDateandWords(start, listOfDiseases, diseases)
      );
    } else if (listOfDiseases.length > 0 && end) {
      setDiseaseData(filterByEndDateandWords(end, listOfDiseases, diseases));
    } else if (start) {
      setDiseaseData(filterByStartDate(start, diseases));
    } else if (end) {
      setDiseaseData(filterbyEndDate(end, diseases));
    } else if (startDrop) {
      setDiseaseData(filterByStartDate(startDrop, diseases));
    } else if (listOfDiseases.length > 0) {
      setDiseaseData(filterByName(listOfDiseases, diseases));
    } else {
      setDiseaseData(diseases);
    }

    if(Object.keys(inputObject).length === 0){
        console.log("works")
    }else{
    setInputObject({})
    }

    setDiseaseList([])

  
  }

  const checkboxes = (arr) => {
    const list_items = arr.map((item, index) => {
      return (
        <li
          className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
          key={item}
        >
          <div className="flex items-center pl-3">
            <input
              type="checkbox"
              checked = {inputObject[item]?inputObject[item]:false}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={(e) => newHandleChange(e, item)}
            />
            <label
              for={`${item}-checkbox`}
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {item}
            </label>
          </div>
        </li>
      );
    });
    return (
      <>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-red-500">
          Diseases
        </h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {list_items}
        </ul>
      </>
    );
  };

  const time_dropdown = (timeObj) => {
    return (
      <>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-red-500">
          Times
        </h3>
        <div className="mb-3 xl:w-96">
          <select
            className="form-select appearance-none
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            onChange={(e) => setStartDrop(e.target.value)}
          >
            <option selected>Open this select menu</option>
            {timeObj.map((time) => {
              return (
                <option value={time[0]} key={time[0]}>
                  {time[1]}
                </option>
              );
            })}
          </select>
        </div>
      </>
    );
  };

  const dateInputFields = () => {
    return (
      <>
        <div>
          <label
            for="start_date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="08-18-2017"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div>
          <label
            for="end_date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            End Date
          </label>
          <input
            type="date"
            id="end_date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="08-18-2022"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
      </>
    );
  };

  return (
    <form onSubmit={newSubmit}>
      {time_dropdown(time_list)}
      {dateInputFields()}
      {checkboxes(diseases_list)}
      <button type="submit">Press me</button>
    </form>
  );
}

export default InputField;
