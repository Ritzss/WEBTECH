import { MyContextApi } from "./QspiderComponents";
import React, { useContext } from "react";
const ChildComponentB = () => {
  let data = useContext(MyContextApi);

  return (
    <>

      
      <h1>I am from ChildComponentB</h1>
      <h2>I am using the data</h2>
      {data.map((val, ind) => {
        return (
          <React.Fragment key={ind}>
             <hr  style={{background:"linear-g", height:"5px"}}/>
            <h3>Name: {val.name}</h3>
            <p>UserName: {val.username}</p>
            <p>Email:{val.email}</p>
             <hr  style={{background:"blue", height:"5px"}}/>
          </React.Fragment>
        );
      })}
    </>
  );
};
export default ChildComponentB;
