import { DateTime } from "luxon";
import React, { useContext } from "react";
import { GraphContext } from "../contexts/GraphContext";
import { filterByStartDateandWords } from "./Functions";

function Trends() {
  const { diseases, setDiseaseData, showTrends } = useContext(GraphContext);

  const three_month = DateTime.now().minus({ months: 4 }).toISO();
  const six_month = DateTime.now().minus({ months: 7 }).toISO();
  const one_year = DateTime.now().minus({ months: 13 }).toISO();

  const three_month_data = [
    [3.4, "E.Coli"],
    [2.1, "Chlamydia"],
    [5.2, "HIV"],
  ];
  const six_month_data = [
    [3.1, "E.Coli"],
    [4.3, "Chlamydia"],
    [3.2, "HIV"],
  ];
  const one_year_data = [
    [3.1, "E.Coli"],
    [6.3, "Chlamydia"],
    [2.2, "HIV"],
  ];

  const all_data = [
    [three_month_data, three_month],
    [six_month_data, six_month],
    [one_year_data, one_year],
  ];

  const setGraphTrends = (e, start, word) => {
    setDiseaseData(filterByStartDateandWords(start, word, diseases));
    showTrends(dogs => !dogs)
  };

  const trends = (data_per_month, date) => {
    return data_per_month.map((month) => {
      return (
        <>
          <div
            key={month[1]}
            className="w-1/5 h-full  bg-white rounded border-t-4 mt-0.5 border-popBlue justify-center shadow-lg max-w-sm hover:bg-red-400 "
            onClick={(e) => setGraphTrends(e, date, month[1])}
          >
            <div className="h-1/3 border text-center py-3 font-bold">
              {month[1]}
            </div>
            <div className="h-2/3 text-center py-6 font-bold text-red-500">
              {"+"}
              {month[0]}
              {"%"}
            </div>
          </div>
        </>
      );
    });
  };

  const indexCheck = (index) => {
    if (index === 0) {
      return "3 Month";
    } else if (index === 1) {
      return "6 Month";
    } else if (index === 2) {
      return "12 Month";
    }
  };

  const verticalRows = () => {
    return all_data.map((periodTrend, index) => {
      return (
        <div
          key={periodTrend[1]}
          className="border-t-4 border-popBlue h-1/3"
        >
          <h1 className="text-center font-bold text-2xl text-popBlue h-1/6">
            {indexCheck(index)} Increasing Trends
          </h1>
          <h2 className="text-center font-bold text-m text-popBlue h-1/6">
            Increasing at least 5% in {indexCheck(index)}
          </h2>
          <div className="flex border border-4 bg-gray-200 justify-around h-4/6">
            {trends(periodTrend[0], periodTrend[1])}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="border-popBlue col-start-3 col-span-5 row-start-2 row-span-4 bg-white mr-4">
      {verticalRows()}
    </div>
  );
}

export default Trends;
