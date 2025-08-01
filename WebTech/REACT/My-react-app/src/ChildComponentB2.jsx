import { MyContextApi } from "./QspiderComponents";
import React, { useContext } from "react";
const ChildComponentB2 = () => {
  let data = useContext(MyContextApi);

  console.log(data);

  return (
    <>
      <h2>I am using the data</h2>
       <h1>I am from Student B2</h1>
            <br />
            <button><a href={data} target="_blank">Qspider Courses Link</a></button>
            <br />
    </>
  );
};
export default ChildComponentB2;