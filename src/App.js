import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    console.log(res.data);
    setCoins(res.data);
  }

  useEffect(() => {
    getData();
   },[])

  return (
    <div className="container">
     <div className="row">
       <div className="col-12 mt-4">
         <input type="search" placeholder='Search btc' className='form-control bg-dark text-light border-0' autoFocus
          onChange={(e) => setSearch(e.target.value)}/>
       </div>
       <div className="col-12">
        <TableCoins coins={coins} search={search}></TableCoins>
       </div>
     </div>
    </div>
  );
}

export default App;
