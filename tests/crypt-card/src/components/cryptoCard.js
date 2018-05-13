import React from 'react'
import './cryptoCard.css'
import fetch from 'isomorphic-fetch'

class CryptoCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            symbol: props.symbol,
            price: null,
            lastPrice: null
        }
    }


    componentDidMount(){
        const symbol = this.state.symbol
        const url =  `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=BTC${symbol},USD`
        fetch(url)
        .then(res => res.json())
        .then(json =>{
            console.log(json)
            this.setState({
                price: json.USD
            })
        })
    }

    render(){
        const { name, symbol, price } = this.state
        return(
            <div className='card'>
                <div className="name">
                    {name}
                    <span className='symbol'> ({symbol})</span> 
                </div>
                <div className="logo"></div>
                <div className="price"></div>
                {price}
                <div className="percentChange"></div>
            </div>
        )
    }
}

export default CryptoCard;