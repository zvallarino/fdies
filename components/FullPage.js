import React, { useContext } from "react";
import Graph from "./Graph";
import Header from "./Header";
import InputField from "./InputField";
import Trends from "./Trends";
import { GraphContext } from "../contexts/GraphContext";

function FullPage() {
  const { trends } = useContext(GraphContext);
  return (
    <div className="bg-gray-200 grid grid-cols-7 grid-rows-5 h-screen">
      <Header />
      <InputField />
      {trends ? <Trends /> : <Graph />}
    </div>
  );
}

export default FullPage;
