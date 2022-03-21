import React from 'react'
import CoinRow from './CoinRow'

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"]

function TableCoins({coins, search}) {

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) | 
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    console.log(filteredCoins);

    if (!coins) return <div>no coins</div>

  return (
    <table className='table table-dark mt-4 table-hover'>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <td key={index}>{title}</td>
                ))}
                
            </tr>
        </thead>
        <tbody>
            {filteredCoins.map((coin, index) => (
                <CoinRow coin={coin} key={coin.id} index={index+1}></CoinRow>
            ))}
        </tbody>
    </table>
  )
}

export default TableCoins