//Creating a function with parameter which return a values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
//Calling a function and print the returned value
city_country("KARACHI", "PAKISTAN");
console.log(city_country("KARACHI", "PAKISTAN"));
city_country("TAXAS", "USA");
console.log(city_country("TAXAS", "USA"));
city_country("TOKYO", "JAPAN");
console.log(city_country("TOKYO", "JAPAN"));
