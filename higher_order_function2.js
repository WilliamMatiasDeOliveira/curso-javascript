
// tecnica curring
function finalPrice(tax){
    return function(price){
        return price * tax
    }
}

const imposto = finalPrice(0.85)

console.log(imposto(25.7))