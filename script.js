let str = "Германия, Берлин, 83млн, 357.4тыс.кв.км;" +
    "Беларусь, Минск, 9.4млн, 207.6тыс.кв.км;" +
    "Польша, Варшава, 37.9млн, 312.6тыс.кв.км;" +
    "Франция, Париж, 67.8млн, 643.8тыс.кв.км;" +
    "Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км;" +
    "Испания, Мадрид, 44.3млн, 505.9тыс.кв.км;" +
    "Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км";


let longLand = {
    name: "Лонг Лендс",
    capital: "Минск",
};    


function State(name, capital, population, area) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.area = area;
};

let arr = str.split(";");

arr = arr.map((countryStr) => {
    let countryArr = countryStr.split(",");
    return new State(countryArr[0], countryArr[1].trim(), parseFloat(countryArr[2]), parseFloat(countryArr[3]));
});

let sumPopulation = 0;
let sumArea = 0;

arr.forEach((item) => {
    sumPopulation += item.population;
    sumArea += item.area;
});

longLand.population = sumPopulation + " млн";
longLand.area = sumArea + " тыс.кв.км";

console.log(longLand);







