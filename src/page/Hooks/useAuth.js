import Recat, {useContext} from "react";
import allContext from "../context/AuthProvider";

const UseAuth = () =>{
    return useContext(allContext);
}

export default UseAuth ; 