
// // Задание № 1.
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// function sortAscending(a, b) {
//     return a.age - b.age;
// };
// console.log(people.sort(sortAscending));
// //

// // Задание № 2.

// function isPositive(number) {
//     return number > 0;
// }
// function isMale(word) {
//     return word.gender === 'male';
// }
// function filter(arr, ruleFunction) {
//     //let arrayNew = arr.filter(el => ruleFunction(el)

//     const arrayNew = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (ruleFunction(arr[i])) {
//             arrayNew.push(arr[i]);
//         }
//     }

//     return arrayNew;
// }
// console.log(filter([3, -4, 1, 9], isPositive)); 

// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale)); 
// //


// // Задание № 3
// //
// function getCurrentDate(time, timeStop) {
//     let currentDateInterval = setInterval(() => {
//         let currentDate = new Date();
//         console.log(currentDate);
//     }, time);

//     let stopInterval = setTimeout(() => {
//         clearInterval(currentDateInterval);
//         console.log('30 секунд прошло');
//     }, timeStop);

// }

// getCurrentDate(3000, 30000);
// //

// // Задание № 4
// //
// function delayForSecond(callback) {
//     setTimeout(() => {
//         console.log(callback());
//     }, 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })
// //

// // Задание № 5 
// //
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if (cb) { cb(); }

//     }, 1000)
// }

// function sayHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(function () {
//     sayHi('Глеб')
// });
// //