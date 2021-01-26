let x = 1;
let y = "Sahand";
let z = "Kim";

x++;
console.log(x, y);


// Function
function myFunction(x, y) {
    console.log(x, y, z);
}
myFunction(1, 2);


// Array
let list = [1, 2, 3];
list.push(4)
console.log(list);

// IF
let answer = true;
if (answer && 1 == 1 || 2 == 2) {
    console.log("yes")
} else {
    console.log("no")
}

// FOR
for(let i = 0; i < list.length; i++) {
    console.log(list[i])
}


//object
let user =  {
    id: 1,
    name: "Kim"
}

// functional programming example
function getUser(id, name) {
    return {
        id: id,
        name: name
    }
}

let user2 = getUser(2, "Sahand");
console.log(user2);

let date = new Date();