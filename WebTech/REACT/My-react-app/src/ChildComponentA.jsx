import { MyContextApi } from "./App";
import React from "react";
import ChildComponentA1 from "./ChildComponentA1";
import ChildComponentA2 from "./ChildComponentA2";
const ChildComponentA = () => {
  return (
    <>

      

      <h1>I am from ChildComponentA</h1>
      <MyContextApi.Consumer>
        {(data) => {
          console.log(data);
          return (
            <>
              <h1>I am using the data</h1>
              {data.map((val, ind) => {
                return ( 
                  <React.Fragment key={ind}>
                    <hr  style={{background:"red", height:"5px"}}/>
                    <h3>Name: {val.name}</h3>
                    <p>UserName: {val.username}</p>
                    <p>Email:{val.email}</p>
                    <hr  style={{background:"red", height:"5px"}}/>
                  </React.Fragment>
                );
              })}
            </>
          );
        }}
        <MyContextApi.Provider value={data}>
        <ComponentA1 />
        <ComponentA2 />
      </MyContextApi.Provider>
      </MyContextApi.Consumer>
    </>
  );
};

export default ChildComponentA;
