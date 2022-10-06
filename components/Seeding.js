import { collection, doc, writeBatch } from "firebase/firestore";
import { DateTime } from "luxon";
import React, { useEffect } from "react";
import { db } from "../firebase";

function Seeding() {
  const differenceInMonths = (obj) => {
    const diffInMonths = obj.endDate.diff(obj.startDate, "months");
  };
  const firstdateOfTravel = DateTime.fromISO("2019-01-01");

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  // }

  const JFK_Object = [

       {
      name: "Air",
      case_count: 80,
      date: DateTime.fromISO("2017-01-01").toISO(),
    },
    {
      name: "Air",
      case_count: 87,
      date: DateTime.fromISO("2017-02-01").toISO(),
    },
    {
      name: "Air",
      case_count: 100,
      date: DateTime.fromISO("2017-03-01").toISO(),
    },
    {
      name: "Air",
      case_count: 103,
      date: DateTime.fromISO("2017-04-01").toISO(),
    },
    {
      name: "Air",
      case_count: 103,
      date: DateTime.fromISO("2017-05-01").toISO(),
    },
    {
      name: "Air",
      case_count: 106,
      date: DateTime.fromISO("2017-06-01").toISO(),
    },
    {
      name: "Air",
      case_count: 110,
      date: DateTime.fromISO("2017-07-01").toISO(),
    },
    {
      name: "Air",
      case_count: 110,
      date: DateTime.fromISO("2017-08-01").toISO(),
    },
    {
      name: "Air",
      case_count: 100,
      date: DateTime.fromISO("2017-09-01").toISO(),
    },
    {
      name: "Air",
      case_count: 100,
      date: DateTime.fromISO("2017-10-01").toISO(),
    },
    {
      name: "Air",
      case_count: 90,
      date: DateTime.fromISO("2017-11-01").toISO(),
    },
    {
      name: "Air",
      case_count: 100,
      date: DateTime.fromISO("2017-12-01").toISO(),
    },
    {
      name: "Air",
      case_count: 91,
      date: DateTime.fromISO("2018-01-01").toISO(),
    },
    {
      name: "Air",
      case_count: 100,
      date: DateTime.fromISO("2018-02-01").toISO(),
    },
    {
      name: "Air",
      case_count: 113,
      date: DateTime.fromISO("2018-03-01").toISO(),
    },
    {
      name: "Air",
      case_count: 114,
      date: DateTime.fromISO("2018-04-01").toISO(),
    },
    {
      name: "Air",
      case_count: 118,
      date: DateTime.fromISO("2018-05-01").toISO(),
    },
    {
      name: "Air",
      case_count: 121,
      date: DateTime.fromISO("2018-06-01").toISO(),
    },
    {
      name: "Air",
      case_count: 119,
      date: DateTime.fromISO("2018-07-01").toISO(),
    },
    {
      name: "Air",
      case_count: 115,
      date: DateTime.fromISO("2018-08-01").toISO(),
    },
    {
      name: "Air",
      case_count: 113,
      date: DateTime.fromISO("2018-09-01").toISO(),
    },
    {
      name: "Air",
      case_count: 117,
      date: DateTime.fromISO("2018-10-01").toISO(),
    },
    {
      name: "Air",
      case_count: 118,
      date: DateTime.fromISO("2018-11-01").toISO(),
    },
    {
      name: "Air",
      case_count: 113,
      date: DateTime.fromISO("2018-12-01").toISO(),
    },
    {
      name: "Air",
      case_count: 95,
      date: DateTime.fromISO("2019-01-01").toISO(),
    },
    {
      name: "Air",
      case_count: 97,
      date: DateTime.fromISO("2019-02-01").toISO(),
    },
    {
      name: "Air",
      case_count: 115,
      date: DateTime.fromISO("2019-03-01").toISO(),
    },
    {
      name: "Air",
      case_count: 103,
      date: DateTime.fromISO("2019-04-01").toISO(),
    },
    {
      name: "Air",
      case_count: 105,
      date: DateTime.fromISO("2019-05-01").toISO(),
    },
    {
      name: "Air",
      case_count: 108,
      date: DateTime.fromISO("2019-06-01").toISO(),
    },
    {
      name: "Air",
      case_count: 121,
      date: DateTime.fromISO("2019-07-01").toISO(),
    },
    {
      name: "Air",
      case_count: 131,
      date: DateTime.fromISO("2019-08-01").toISO(),
    },
    {
      name: "Air",
      case_count: 109,
      date: DateTime.fromISO("2019-09-01").toISO(),
    },
    {
      name: "Air",
      case_count: 111,
      date: DateTime.fromISO("2019-10-01").toISO(),
    },
    {
      name: "Air",
      case_count: 115,
      date: DateTime.fromISO("2019-11-01").toISO(),
    },
    {
      name: "Air",
      case_count: 117,
      date: DateTime.fromISO("2019-12-01").toISO(),
    },

    {
      name: "Air",
      case_count: 113,
      date: DateTime.fromISO("2020-01-01").toISO(),
    },
    {
      name: "Air",
      case_count: 110,
      date: DateTime.fromISO("2020-02-01").toISO(),
    },
    {
      name: "Air",
      case_count: 100,
      date: DateTime.fromISO("2020-03-01").toISO(),
    },
    {
      name: "Air",
      case_count: 47,
      date: DateTime.fromISO("2020-04-01").toISO(),
    },
    {
      name: "Air",
      case_count: 20,
      date: DateTime.fromISO("2020-05-01").toISO(),
    },
    {
      name: "Air",
      case_count: 20,
      date: DateTime.fromISO("2020-06-01").toISO(),
    },
    {
      name: "Air",
      case_count: 36,
      date: DateTime.fromISO("2020-07-01").toISO(),
    },
    {
      name: "Air",
      case_count: 53,
      date: DateTime.fromISO("2020-08-01").toISO(),
    },
    {
      name: "Air",
      case_count: 43,
      date: DateTime.fromISO("2020-09-01").toISO(),
    },
    {
      name: "Air",
      case_count: 50,
      date: DateTime.fromISO("2020-10-01").toISO(),
    },
    {
      name: "Air",
      case_count: 53,
      date: DateTime.fromISO("2020-11-01").toISO(),
    },
    {
      name: "Air",
      case_count: 56,
      date: DateTime.fromISO("2020-12-01").toISO(),
    },
    {
      name: "Air",
      case_count: 53,
      date: DateTime.fromISO("2021-01-01").toISO(),
    },
    {
      name: "Air",
      case_count: 43,
      date: DateTime.fromISO("2021-02-01").toISO(),
    },
    {
      name: "Air",
      case_count: 46,
      date: DateTime.fromISO("2021-03-01").toISO(),
    },
    {
      name: "Air",
      case_count: 20,
      date: DateTime.fromISO("2021-04-01").toISO(),
    },
    {
      name: "Air",
      case_count: 70,
      date: DateTime.fromISO("2021-05-01").toISO(),
    },
    {
      name: "Air",
      case_count: 77,
      date: DateTime.fromISO("2021-06-01").toISO(),
    },
    {
      name: "Air",
      case_count: 106,
      date: DateTime.fromISO("2021-07-01").toISO(),
    },
    {
      name: "Air",
      case_count: 113,
      date: DateTime.fromISO("2021-08-01").toISO(),
    },
    {
      name: "Air",
      case_count: 107,
      date: DateTime.fromISO("2021-09-01").toISO(),
    },
    {
      name: "Air",
      case_count: 110,
      date: DateTime.fromISO("2021-10-01").toISO(),
    },
    {
      name: "Air",
      case_count: 106,
      date: DateTime.fromISO("2021-11-01").toISO(),
    },
    {
      name: "Air",
      case_count: 117,
      date: DateTime.fromISO("2021-12-01").toISO(),
    },
    {
      name: "Air",
      case_count: 120,
      date: DateTime.fromISO("2022-01-01").toISO(),
    },
    {
      name: "Air",
      case_count: 107,
      date: DateTime.fromISO("2022-02-01").toISO(),
    },
    {
      name: "Air",
      case_count: 120,
      date: DateTime.fromISO("2022-03-01").toISO(),
    },
    {
      name: "Air",
      case_count: 120,
      date: DateTime.fromISO("2022-04-01").toISO(),
    },
    {
      name: "Air",
      case_count: 136,
      date: DateTime.fromISO("2022-05-01").toISO(),
    },
    {
      name: "Air",
      case_count: 140,
      date: DateTime.fromISO("2022-06-01").toISO(),
    },
    {
      name: "Air",
      case_count: 146,
      date: DateTime.fromISO("2022-07-01").toISO(),
    },
    {
      name: "Air",
      case_count: 143,
      date: DateTime.fromISO("2022-08-01").toISO(),
    },
    {
      name: "Air",
      case_count: 147,
      date: DateTime.fromISO("2022-09-01").toISO(),
    },
    {
      name: "Air",
      case_count: 146,
      date: DateTime.fromISO("2022-10-01").toISO(),
    },
    {
      name: "Air",
      case_count: 143,
      date: DateTime.fromISO("2022-11-01").toISO(),
    },
    {
      name: "Air",
      case_count: 140,
      date: DateTime.fromISO("2022-12-01").toISO(),
    },
    {
      name: "Air",
      case_count: 135,
      date: DateTime.fromISO("2023-01-01").toISO(),
    },
    {
      name: "Air",
      case_count: 120,
      date: DateTime.fromISO("2023-02-01").toISO(),
    },
    {
      name: "Air",
      case_count: 110,
      date: DateTime.fromISO("2023-03-01").toISO(),
    },
    {
      name: "Air",
      case_count: 120,
      date: DateTime.fromISO("2023-04-01").toISO(),
    },
    {
      name: "Air",
      case_count: 130,
      date: DateTime.fromISO("2023-05-01").toISO(),
    },
    {
      name: "Air",
      case_count: 142,
      date: DateTime.fromISO("2023-06-01").toISO(),
    },
    {
      name: "Air",
      case_count: 147,
      date: DateTime.fromISO("2023-07-01").toISO(),
    },
    {
      name: "Air",
      case_count: 148,
      date: DateTime.fromISO("2023-08-01").toISO(),
    },
    {
      name: "Air",
      case_count: 146,
      date: DateTime.fromISO("2023-09-01").toISO(),
    },
    {
      name: "Air",
      case_count: 140,
      date: DateTime.fromISO("2023-10-01").toISO(),
    },
    {
      name: "Air",
      case_count: 149,
      date: DateTime.fromISO("2023-11-01").toISO(),
    },
    {
      name: "Air",
      case_count: 148,
      date: DateTime.fromISO("2023-12-01").toISO(),
    },
  ];


  function dateMaker() {
    const firstDate = DateTime.fromISO("2017-01-01");
    const lastDate = DateTime.now();
    const difference = lastDate.diff(firstDate, "months").toObject();
    // const differenceInMonths = Math.floor(difference.months) + 16;
    const all_diseases = ["E.Coli", "Chlamydia", "HIV"];
    let i = 0;
    let batchTest = [];


    while (i < differenceInMonths) {
      for (const element in all_diseases) {
        batchTest.push({
          name: all_diseases[element],
          // case_count: getRandomInt(0, 150),
          date: firstDate.plus({ months: i }).toISO(),
        });
      }
      i++;
    }

    const batch = writeBatch(db);
    JFK_Object.forEach((item) => {
      const docRef = doc(collection(db, "diseases"));
      batch.set(docRef, item);
    });

    // batch.commit();

    // console.log(JFK_Object);
  }

    useEffect(() => {dateMaker()}, [])

  return <div>Seeding</div>;
}

export default Seeding;
