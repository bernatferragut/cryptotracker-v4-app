import React, { Component } from 'react'


class Crypto extends Component {
    render(){
        let {
            id,
            name,
            symbol,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d
        } = this.props.data
        return (
            <li className={"crypto "+id}>
                <p className="crypto-name">{name} {symbol}</p>
                <h1>{price_usd.toFixed(2)}</h1>
                <p>{percent_change_1h}% 1hr</p>
                <p>{percent_change_24h}% 24hr</p>
                <p>{percent_change_7d}% 7d</p>
            </li>
        )
    }
}

export default Crypto
