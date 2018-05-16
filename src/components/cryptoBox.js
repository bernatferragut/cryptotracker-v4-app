import React, { Component } from 'react'

class CryptoBox extends Component{

    // state
    state = {
        data:[]
    }
    // did mount
    componentDidMount() {
        const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=BTC,USD'
        fetch(url)
        .then(res => res.json())
        .then( json => {
            console.log(json)
            this.setState({
                data : json
            })
        } )

    }

    render(){
        // const cryptos = Object.keys(this.state).map( k => {
        //     return {
        //         name : key,
        //         price : data[k]
        //     }
        // })

        return(
            <div>
                <h1>{this.state.data.btc}</h1>
            </div>
        )
    }
}

export default CryptoBox

// CODE to GO from {} to []

const myObj = { 
    btc : { name: 'BTC', price : 10000 }, 
    eth : { name: 'ETH', price: 2500 }
  }
  
  
  const myArr1 = Object.values(myObj)
  const myArr2= Object.keys(myObj).map(i => myObj[i])
  
  console.log(myArr1)
  console.log(myArr2)