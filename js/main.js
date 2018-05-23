// JS

//CoinMarketCap url='https://api.coinmarketcap.com/v2/ticker/?limit=10'
//CryptoCompare url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,EOS,IOT&tsyms=USD'

//VUE COMPONENTS
Vue.component('crypto', {
    props: {
        crypto: {
            name: String,
            symbol: String,
            quotes: {
                USD: { 
                    price: Number,
                    percent_change_1h: Number,
                    percent_change_24h: Number,
                    percent_change_7d: Number
                }
            }
        }
    },

    data : function () {
        return {
            up: true
        }
    },

    methods: {
        positive1: function() {
            if (this.crypto.quotes.USD.percent_change_1h > 0 ) {
                return this.up = true 
            } else {
                return this.up = false
            }
        },
        positive2: function() {
            if(this.crypto.quotes.USD.percent_change_24h > 0) {
                return this.up = true
            } else {
                return this.up = false
            }
        },
        positive3: function() {
            if(this.crypto.quotes.USD.percent_change_7d > 0) {
                return this.up = true
            } else {
                return this.up = false
            }
        }
    },

    template: `
        <div props="crypto" class="crypto-ticker">
            <div class="c"> ({{crypto.symbol}}) </div>
            <div class="c"> {{crypto.name}}</div>
            <div class="c"> {{crypto.quotes.USD.price}} USD</div>
            <div class="d" :class="[positive1() ? 'green' : 'red']"> 1h:{{crypto.quotes.USD.percent_change_1h}}%</div>
            <div class="e" :class="[positive2() ? 'green' : 'red']"> 24h:{{crypto.quotes.USD.percent_change_24h}}%</div>
            <div class="f" :class="[positive3() ? 'green' : 'red']"> 7d: {{crypto.quotes.USD.percent_change_7d}}%</div>
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