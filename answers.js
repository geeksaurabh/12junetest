// // // ANSSWER 1--
// var list = ["geek", "geekster", "geeky"];
// // check if geekster is present in array
// for (let i = 0; i < list.length; i++) {
//   if (list[i] == "geekster") {
//     console.log(true + " geekster is present");
//   }
// }
// // finding the index of geekster
// let indexOfGeekster = list.indexOf("geekster");
// console.log(indexOfGeekster + " is the index of 'geekster'");

// // removal of 'geekster'
// if (indexOfGeekster > -1) {
//   list.splice(indexOfGeekster, 1);
// }
// console.log(list);

// // // ANSWER 2-- JavaScript mainly provides three ways for executing the loops. While all the ways provide similar basic functionality, they differ in their syntax and condition checking time. ALL THREE ARE GIVEN BELOW WITH EXAMPLES

// // // 1. for loop simple methode : in this methode we give a for loop from index value 0 to index value 1 less than length of an Array
// // // example
// // let array = [1, 2, 3, 4, 5, 6];
// // for (let i = 0; i < array.length; i++) {
// //   console.log("methode1", array[i]);
// // }
// // console.log("------------");
// // // 2. for loop of methode : in this methode we use for loop but this time simply saying <variable name> of <array name>
// // // example
// // for (let elements of array) {
// //   console.log("methode2", elements);
// // }
// // console.log("------------");
// // // 3.While loops: in this methode we use index and increase it ato loop uur array
// // // Example
// // let index = 0;
// // while (index < array.length) {
// //   console.log("methode3", array[index]);
// //   index++;
// // }
// // console.log("------------");

// // // ANSWER 3--
// var arr1 = [, , ,];
// //3
// var arr2 = new Array(3);
// //3
// var arr3 = [1, 2, 3, 4, 5];
// //5
// var arr4 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// //2
// // e var array = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// // ];
// // console.log(array.length);
// // // 2

// // let lengthOfZeroIndex = array[0].length;
// // console.log(lengthOfZeroIndex);
// // // 3

// console.log(arr1.length, arr2.length, arr3.length, arr4.length);

// // //ANSWER 4--
// // var arr = ["a", "b", "c", "d"];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] == "b") {
// //     console.log("index of b is ", i);
// //   }
// // }

// // //ANSWER 5--

// // var arr = ["a", "b", "c", "d"];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] == "e") {
// //     console.log("index of b is ", i);
// //   }
// // }
// // // AS from above code we can see that if if we look for the index of something that does not exist then nothing will be returned

// // // // ANSWER 6--
// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let largestNumber = (values) => {
// //   let highest = 0;
// //   for (i = 0; i < values.length; i += 1) {
// //     if (values[i] > highest) {
// //       highest = values[i];
// //     }
// //   }
// //   return highest;
// // };
// // console.log(largestNumber(numbers));
