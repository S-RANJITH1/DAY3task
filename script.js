// //How to compare two json have the same properties without order
// A.let obj1={name:"person 1",age:5};
// B.let obj2={age:5,name:"person 1"};

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };
// Convert the objects to strings and sort the properties
const json1= JSON.stringify(obj1, Object.keys(obj1).sort());
const json2= JSON.stringify(obj2, Object.keys(obj2).sort());
// Compare the sorted JSON strings
if(json1===json2)
{
  console.log("The two JSON objects are equivalent.");
} 
else
{
  console.log("The two JSON objects are not equivalent.");
}



