const country = {
    name: "korea",
    population : "5178579",
    get_name:function(){
        return this.name;
    }
};

console.log(country.get_name());
console.log(country.name);
country.age = 24;
console.log(country);