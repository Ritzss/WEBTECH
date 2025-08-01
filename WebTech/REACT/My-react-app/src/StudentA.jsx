import { MyContextApi } from "./QspiderComponents";
import React, { useContext } from "react";
import ChildComponentA1 from "./ChildComponentA1";
import ChildComponentA2 from "./ChildComponentA2";
const StudentA = ()=>{

    let data= useContext(MyContextApi);
    console.log(data);

    return (<React.Fragment>
         <MyContextApi.Provider value={data}>
              <ChildComponentA1 />
              <ChildComponentA2 />
      </MyContextApi.Provider>
        <h1>I am from Student A</h1>
        <br />
        <button><a href={data} target="_blank">Qspider Courses Link</a></button>
        <br />
    </React.Fragment>)

}

export default StudentA;