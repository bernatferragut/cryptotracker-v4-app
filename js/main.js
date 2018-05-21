// JS

console.log('=> file loaded')

const header = new Vue( {
    el:  '#header',
    data: {
        cryptos:[]
    },

    // computed: {
    //     totalUSD() {
    //         return this.cryptos.reduce((sum, crypto) => {
    //             return sum + crypto.USD
    //         },0)
    //     }
    // },

    created() {
        const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,EOS,IOT&tsyms=USD'
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.cryptos = json
                console.log(this.cryptos)
            })
    }
})


// try CoinMarketCap url='https://api.coinmarketcap.com/v2/ticker/?limit=10'

