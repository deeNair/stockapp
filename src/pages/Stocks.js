import stocks from "../data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Stocks() {
    const list = stocks.map((stock, i) => {
        const { name, symbol } = stock;

        return (
            <Link to={`/stocks/${stock.symbol}`} key={i}>


                {/*<div className="table">
    <h2>{stock.name}</h2>
   
    <h2>{stock.lastPrice}</h2>
   <h2>{stock.change}</h2> 
        </div>*/}
                <div className="dashboard">


                    <table>
                        <th>{stock.name}</th>

                        <th>{stock.lastPrice}</th>
                        <th>{stock.change}</th>
                    </table>

                </div>

            </Link>


        )


    })

    //{stocks[0].name}

    return (

        <div>
            <table className="tab">

                <tr>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr>
            </table>

            <ul>{list}</ul>
        </div>
    )

}






export default Stocks;