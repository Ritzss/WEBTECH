import { MyContextApi } from "./QspiderComponents";
import React, { useContext } from "react";
import ChildComponentB1 from "./ChildComponentB1";
import ChildComponentB2 from "./ChildComponentB2";

const StudentB = ()=>{

    let data= useContext(MyContextApi);
    console.log(data);

    return (<React.Fragment>
        <MyContextApi.Provider value={data}>
              <ChildComponentB1 />
              <ChildComponentB2 />
      </MyContextApi.Provider>
        <h1>I am from Student B</h1>
        <br />
        <button><a href={data} target="_blank">Qspider Courses Link</a></button>
        <br />
    </React.Fragment>)

}
export default StudentB;
