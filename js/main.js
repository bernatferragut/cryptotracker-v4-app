// JS

//CoinMarketCap url='https://api.coinmarketcap.com/v2/ticker/?limit=10'
//CryptoCompare url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,EOS,IOT&tsyms=USD'

//VUE COMPONENTS
Vue.component('crypto', {
    props: {
        crypto: Object
    },

    data : function () {
        return {
            up: true
        }
    },

    methods: {
        getColor: (num) => {
            return num > 0 ? "color:green" : "color:red"
          }
    },

    template: `
        <div props="crypto" class="crypto-ticker">
            <div class="c"> ({{crypto.symbol}}) </div>
            <div class="c"> {{crypto.name}}</div>
            <div class="c"> {{(crypto.quotes.USD.price).toFixed(2)}} USD</div>
            <div :style="getColor(crypto.quotes.USD.percent_change_1h)"> 1h:{{crypto.quotes.USD.percent_change_1h}}%</div>
            <div :style="getColor(crypto.quotes.USD.percent_change_24h)"> 24h:{{crypto.quotes.USD.percent_change_24h}}%</div>
            <div :style="getColor(crypto.quotes.USD.percent_change_7d)"> 7d: {{crypto.quotes.USD.percent_change_7d}}%</div>
        </div>
    `
})

// VUE OBJECT
const header = new Vue( {
    el:  '#header',
    data: {
        cryptos:[],
        loaded: false
    },

    created() {
        const url = 'https://api.coinmarketcap.com/v2/ticker/?limit=10'
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.cryptos = json.data
                this.loaded=true;
                console.log('Object: ' + this.cryptos)
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