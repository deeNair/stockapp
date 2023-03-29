
import './App.css';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Stocks from './pages/Stocks';
import About from './pages/About';
import {stocks} from "./data.js";
import Dashboard from './pages/Dashboard';

function App(props) {
  const {stocks}=props;
  return (
    <div className="App">
       <NavBar />
       <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/about' element= {<About />}/>
       <Route path='/stocks' element= {<Stocks />}/>
       
       <Route path='/stocks/:symbol' element={<Dashboard />} />
       
       </Routes>
    </div>
  );
}

export default App;
