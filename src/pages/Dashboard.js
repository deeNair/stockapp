import { useParams } from "react-router-dom";
import { useState } from "react";
import stocks from "../data";
import { Link } from "react-router-dom";
//import axios from 'axios';

function Dashboard(){
   const params=useParams();
    
        
    const result=stocks.find(item=>item.symbol===params.symbol)
   

    return (
        <div>
    <h2>Symbol :{result.symbol}</h2>
    <h2>Last Price:{result.lastPrice}</h2>
    </div>
    )
}



export default Dashboard; 

