//Declaring a object
//Key & Value pair (cpu : "i7") cup=key & value=i7.....To seprate a key & value we seprate by ':' --> Colen

// let laptop = {
//     cpu: "i7",
//     ram: "8GB",
//     brand:"HP"
// }

// console.log(laptop);

// let car = {
//     name: "Nexzon EV",
//     Milage: "300",
//     Manifacturing: "2021",
//     Colour: "Matellic Blue",
//     Fule_type: "Electric"
// }

// //console.log(car.Fule_type); //To print single property we use car.****

// console.log(car["Fule_type"]); //SECOND METHOD TO PRINT SINGLE VALUE OF A KEY.


//------>Simple Object {} <---------
// let person = {
//     Name: "Priti",
//     Last_name: "Nikam",
//     Age: "21",
//     Hometown: "Daund",

// }
// console.log(person["Name"]);
// console.log(person["Last_name"]);
// console.log(person["Age"]);
// console.log(person["Hometown"]);

//----->Complex Object {{}} <--------
 let person = {
    first_name: "Priti",
    last_name: "Nikam",
    age: "21",
    home_town: "Daund",
    laptop: {
        cpu: "i7",
        ram: "8GB",
        brand: "Lenovo"
    }
 }
 //console.log(person.laptop.ram); //--->If we want to property of a property then we can write as "person.laptop.ram" 
 //console.log(person.laptop.brand.length);//If we want to print length of the any value then we have write '.length'
console.log(person.laptop?.ram); //----> '?'- It checkes wheather it is defined or undefind

//Deleting existing property/key from an object.
delete person.laptop.brand;  //---->delete will erase the values from person value laptop. So it deleted the valur of laptop from persone.
console.log(person);

//Adding new properties to object

person.occupation = "GIS Developer";
person["Degree completed"]="BCs"

console.log(person);