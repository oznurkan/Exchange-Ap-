class Currency {
    constructor(firstCurrency, secondCurrency, apikey){

        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.apikey = apikey;
        this.url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${this.apikey}&base=`;
        this.amount = null;
    }

    exchange(){

        return new Promise((resolve, reject) => {

            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data =>{
            const parity = data.rates[this.secondCurrency];
            const amount2 = Number(this.amount);

            let total = parity * amount2 ;
            resolve(total);

        })
        .catch(err => reject(err));
        });
      
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}

