// JS

//CoinMarketCap url='https://api.coinmarketcap.com/v2/ticker/?limit=10'
//CryptoCompare url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,EOS,IOT&tsyms=USD'

const header = new Vue( {
    el:  '#header',
    data: {
        cryptos:[],
    },

    created() {
        const url = 'https://api.coinmarketcap.com/v2/ticker/?limit=10'
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.cryptos = json.data
                console.log(this.cryptos)
            })
            .catch(err => console.log(err))
    },

    computed: {
        totalUSD () {
            return Object.values(this.cryptos).reduce((sum, crypto) => {
                return (sum + crypto.quotes.USD.price)
            },0).toFixed(2);
        }
    },
})

