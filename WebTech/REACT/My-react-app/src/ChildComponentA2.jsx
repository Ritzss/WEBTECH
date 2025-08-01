import { MyContextApi } from "./QspiderComponents";
import React, { useContext } from "react";
const ChildComponentA2 = () => {
  let data = useContext(MyContextApi);
  console.log(data);

  return (
    <>
      <h2>I am using the data</h2>
       <h1>I am from Student A2</h1>
        <br />
        <button><a href={data} target="_blank">Qspider Courses Link</a></button>
        <br />
    </>
  );
};
export default ChildComponentA2;