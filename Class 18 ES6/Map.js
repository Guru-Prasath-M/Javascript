let prod_price = [98,198,298,398]

let new_prod_price = prod_price.map((price) => {
    return price + 1
})
console.log(new_prod_price);

//Another Method
let new_prod_price1 = prod_price.map(price => price + 1)

console.log(prod_price)
console.log(new_prod_price1)
