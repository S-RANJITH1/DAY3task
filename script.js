// // //How to compare two json have the same properties without order
// // A.let obj1={name:"person 1",age:5};
// // B.let obj2={age:5,name:"person 1"};

// let obj1 = { name: "person 1", age: 5 };
// let obj2 = { age: 5, name: "person 1" };
// // Convert the objects to strings and sort the properties
// const json1= JSON.stringify(obj1, Object.keys(obj1).sort());
// const json2= JSON.stringify(obj2, Object.keys(obj2).sort());
// // Compare the sorted JSON strings
// if(json1===json2)
// {
//   console.log("The two JSON objects are equivalent.");
// } 
// else
// {
//   console.log("The two JSON objects are not equivalent.");
// }


// 2.Display all the country flags in the console:
// //Step 1:
// //
// //create a XHR object.
// var request=new XMLHttpRequest();
// //step2
// //open a connection to the server
// request.open("GET","https://restcountries.com/v3.1/all",true)
// //step3
// //initiating a bridge to the server
// request.send();//used to send a request to the server
// //step4:
// //server response
// request.onload=function()
// {
// var data=request.response;
// //console.log(data);
// var result=JSON.parse(data);
// //console.log(result);
// console.log(result[0].name.common);



// //console.log(result[0].area)
// //for accessing multiple values use looping
// for(var i=0;i<result.length;i++)
// {
//    console.log(result[i].flags.svg)
// }
// }


//task3:Print all countries names,regions,subregion and populations:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
var data=request.response;
var result=JSON.parse(data);
console.log(result);
for(var i=0;i<result.length;i++)
{
   console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population)
}
}
