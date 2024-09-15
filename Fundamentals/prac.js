// simple for loop
for(let i = 0; i <= 10; i++) {
    // console.log(i);
}

let student = {
    name: "Andreh",
    age: 43,
    language: "java",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

let drink = "Konyagi";

console.log(student)
console.log(typeof drink)

let namesArray = ["Junior", "Juju", "Kimpol", "Kimani"]
console.log(namesArray[1])

let name1 = "Ruth";
console.log(name1 + "Leah");

student.greet();