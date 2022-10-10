import  React from "react";
import{Routes,Route} from 'react-router-dom';
import Dashboards from "../Components/DashboardsUserAdmin";




const index =() =>{
    return(
        <>
     
        <Routes>
            <Route exact path="/dashboard" element={<Dashboards/>}></Route>
            
        
            
           
           
        </Routes>
        
        </>
        
    )
}
export default index;