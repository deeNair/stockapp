import stocks from "../data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Stocks(){
    const list=stocks.map((stock)=>{
        const{name,symbol}=stock;
            
        return(
           
            <li>
                {stock.name}
            </li>
        )
    })
  
    //{stocks[0].name}
    return (
      
        <Link to={`/stocks/${list.symbol}`} key={list.symbol}>
    <h2>{list}</h2>
    </Link>
    )
   
}


    



export default Stocks;