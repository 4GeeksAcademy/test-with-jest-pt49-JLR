// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07
    return valueInDollar;
};


const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
 
};

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}



