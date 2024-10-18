// FOREACH
// 1 misol
// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.forEach(function (element) {
//     console.log(element);
// });

// 2 misol
// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.forEach(function (element) {
//     console.log(element + 5);
// });

// 3 misol
// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.forEach(function (element) {
//     if (element % 2 == 1) {
//         console.log(element);
//     }
// });

// 4 misol
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// let newarr = arr.forEach(function (element) {
//     return sum++;
// });

// console.log(sum);

// 5 misol
// let arr = [4, 3, 2, 1];
// let arr1 = [5, 6, 7, 8];
// let res = arr.forEach(function (element) {
//     arr1.unshift(element);
//     return arr1;
// });
// console.log(arr1);

// MAP
// 1 misol
// let arr = [1, 2, 3, 4];
// let res = arr.map(function (element) {
//     return element * 2;
// });
// console.log(res);

// 2 misol
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (element) {
//     return element ** 2;
// });
// console.log(res);

//3 misol
// let arr = ["salom", "hayr", "qales"];
// let res = arr.map(function (element) {
//     return element.toUpperCase();
// });
// console.log(res);

// 4 misol
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (element) {
//     return -element;
// });
// console.log(res);

//5 misol
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (element) {
//     return element + 3;
// });
// console.log(res);

// FILTER
// 1 misol
// let arr = [1,2,3,4,5]
// let res = arr.filter(function(element){
//     if(element % 2 == 0){
//         return element
//     }
// })
// console.log(res);

// 2 misol
// let arr = [-1, 2, -3, -4, 5, 6];
// let res = arr.filter(function (element) {
//     return element > 0;
// });

// console.log(res);

// 3 misol
// let arr = ["salom", "yaxshimisiz", "qales", "qoyilmisiz"];
// console.log("massiv " + arr);
// let res = arr.filter(function (element,) {
//     return element.length > 5;
// });
// console.log(res);

// 4 misol
// let arr = [12, 28, 59, 34, 12, 89, 67];
// let res = arr.filter(function (element) {
//     return element > 18;
// });
// console.log(res);

// 5 misol
// let arr = [1, 2, 34, 23, 7, 9, 10, 34];
// console.log("massiv " + arr);
// let res = arr.filter(function (element) {
//     return element < 10;
// });
// console.log(res);

//Find
// 1 misol
// let arr = [1,5,11,12,10,9,45]
// let res = arr.find(function(element){
//     return element > 10
// })
// console.log(res);

// 2 misol
// let arr = [-1,2,-3,0];
// let res = arr.find(function(element){
//     return element > 0;
// })
// console.log(res);

// 3 misol
// let arr = ['salom','qale','zor'];
// let res = arr.find(function(element){
//     return element.length > 4;
// })
// console.log(res);

// 4 misol
// let arr = [1, 2, 3, 4];
// let res = arr.find(function (element) {
//     return element % 2 == 0;
// });
// console.log(res);

// 5 misol
// let arr = [-1,0,-3,1,4];
// let res = arr.find(function(element){
//     return element >= 0
// })
// console.log(res);

// SOME
// //1 misol
// let arr = [1,2,3,4,-2,-4];
// let res = arr.some(function(element){
//     return element < 0;
// })
// console.log(res);

// 2 misol
// let arr = [1, 2, 3, 4, 5];
// let res = arr.some(function (element) {
//     return element % 2 == 0;
// });
// console.log(res);

// 3 misol
// let arr = ["aplle", "iphone", "samsung", "kia"];
// let res = arr.some(function (element) {
//     return element.includes("aplle");
// });
// console.log(res);

// EVERY
//1 misol
// let arr = [-1,2,3,4,5];
// let res = arr.every(function(element){
//     return element > 0;
// })
// console.log(res);

// 2 misol
// let arr = [3,"salom", "ustoz", "yaxshimisiz"];
// let res = arr.every(function (element) {
//     return typeof element === "string";
// });
// console.log(res);

// 3 misol
// let arr = [1,2,3,99,89,101];
// let res = arr.every(function(element){
//     return element < 100;
// })
// console.log(res);

// Qoshimcha
// 1 misol
// forech : Massivdagi har bir raqamni kvadratga ko'taring.
// let arr = [1, 2, 3, 4];
// let res = arr.forEach(function (element) {
//     return element ** 2;
// });
// console.log(res);

// 2 misol
//Map : Har bir so'zni uning uzunligini hisoblang.
// let arr = ["salom", "qales", "zor"];
// let res = arr.map(function (element) {
//     return element.length;
// });
// console.log(res);

// 3 misol
//filter : Har bir elementning uzunligi 6 dan katta bo'lgan so'zlarni tanlang.
// let arr = ["salom", "qales", "ustoz yaxhsimisiz"];
// let res = arr.filter(function (element) {
//     return element.length > 6;
// });
// console.log(res);

// 4 misol
// Every : Massivdagi barcha sonlar musbat ekanligini tekshiring.
// let arr = [1, 2, 3, 4, 5, -6];
// let res = arr.every(function (element) {
//     return element > 0;
// });
// console.log(res);

// 5 misol
//Some : Massivda kamida bir element 50 dan katta ekanligini tekshiring.
// let arr = [1, 2, 3, 90, 50];
// let res = arr.some(function (element) {
//     return element > 50;
// });
// console.log(res);

// 6 misol
//forEach :  Har bir ob'ektdan foydalanuvchi ismini ekranga chiqarish.
// let arr = ["Sardor", "Ustoz"];
// let res = arr.forEach(function (element) {
//     return element;
// });
// console.log(res);

// 7 misol
//Map : Har bir foydalanuvchining yoshini 10 ga oshirish.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (element) {
//     return element + 10;
// });
// console.log(res);

//8 misol
//filter: Yoshiga qarab 20 dan katta foydalanuvchilarni tanlang.
// let arr = [11, 12, 45, 34, 12];
// let res = arr.filter(function (element) {
//     return;
// });
// console.log(res);

// 9 misol
//Every :  Barcha so'zlar uzunligi 3 dan katta ekanligini tekshirish.
// let arr = ["salom", "zor", "vashhee"];
// let res = arr.every(function (element) {
//     return element.length > 3;
// });
// console.log(res);

// 10 misol
//Some : Kamida bir so'zning bo'sh ekanligini tekshirish.
// let arr = ["salom", "", "Ustoz", "tekshirib boldizmi"];
// let res = arr.some(function (element) {
//     return element == "";
// });
// console.log(res);
