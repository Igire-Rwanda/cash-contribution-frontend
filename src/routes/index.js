import  React from "react";
import{Routes,Route} from 'react-router-dom';
import Dashboards from "../Components/DashboardsUserAdmin";

import Table from "../Components/Table";


const index =() =>{
    return(
        <>
     
        <Routes>
        <Route exact path="/" element={<Table/>}></Route>
            <Route exact path="/Table" element={<Table/>}></Route>
            <Route exact path="/dashboard" element={<Dashboards/>}></Route>
            
        
            
           
           
        </Routes>
        
        </>
        
    )
}
export default index;