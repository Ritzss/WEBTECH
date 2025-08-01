import assest_data from "./assets/data/data";
import { createContext } from "react";
import StudentA from "./StudentA";
import StudentB from "./Studentb";

export const MyContextApi = createContext();

const QspiderComponent = ()=>{
  let data = assest_data.QspiderLink;
  console.log(data);
  return(<>
  <MyContextApi.Provider value={data}>
    <StudentA />
    <StudentB />
  </MyContextApi.Provider>
  </>)
}

export default QspiderComponent;