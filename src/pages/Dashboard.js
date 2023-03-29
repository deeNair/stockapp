import { useParams } from "react-router-dom";
import { useState } from "react";
import stocks from "../data";
import { Link } from "react-router-dom";
//import axios from 'axios';

function Dashboard(){
   const params=useParams();
    //console.log(params.symbol);
    //const symbol= params.symbol;
    const result=stocks.map((item)=>{
        //if(item.symbol === params.symbol)
        return(
            
            
            <h1>{item.symbol}</h1>
        )
    });

    //const result=stocks.find(item=>item.symbol===params.symbol)
   

    return (
        <div>
    <h2>Symbol :{result}</h2>
    </div>
    )
}



export default Dashboard; 

