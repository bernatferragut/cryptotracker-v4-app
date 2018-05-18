import React, { Component } from 'react'
import './tickers.css'
import Crypto from './crypto'

class Tickers extends Component {
    
    // State
    state = {
        data: [
            {
                id: 'bitcoin',
                name: 'Bitcoin',
                symbol: 'BTC',
                price_usd: '1',
                percent_change_1hr: '0',
                percent_change_24hr: '0',
                percent_change_7d: '0',
            },
            {
                id: 'ethereum',
                name: 'Ethereum',
                symbol: 'ETH',
                price_usd: '1',
                percent_change_1hr: '0',
                percent_change_24hr: '0',
                percent_change_7d: '0',
            },
            {
                id: 'litecoin',
                name: 'Litecoin',
                symbol: 'LTC',
                price_usd: '1',
                percent_change_1hr: '0',
                percent_change_24hr: '0',
                percent_change_7d: '0',
            }
        ]
    }

    componentDidMount(){
        this.getData();
        this.inerval  = setInterval(() => this.getData(), 1 * 1000)
    }

    // Fetch API from coinmarketcap
    getData = ()=> {
        const url = 'https://api.coinmarketcap.com/v2/ticker/?limit=10'
        fetch(url)
        .then(res => res.json())
        .then( res => { 
            let wanted = ['bitcoin', 'ethereum', 'litecoin']
            let result = res.data.filter(name =>  wanted.includes(crypto.id))
            this.setState({ data : result })
            .catch(err => console.log(err))
        })
    }

    render(){
        let tickers = this.state.data.map( crypto => 
            <Crypto data={crypto} key={crypto.id}/>
        ) 
        
        return(
            <div className="tickers-container">
                <ul className="tickers">
                    {tickers}
                    <p>Information takes 10 seconds to fetch, thanks to coinmarketcap.com</p>
                </ul>
            </div>
        )
    }
}

export default Tickers
