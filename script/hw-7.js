// // 1 
// let str = 'js';
// console.log(str.toUpperCase());
// //


// // 2
// function getStrArray(array, fValue) {
//     return array.filter((word) => word.toLowerCase().startsWith(fValue.toLowerCase()));
// }
// console.log(getStrArray(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
// console.log(getStrArray(["яблоко", "груша", "гриб", "огурец"], "гру"));
// console.log(getStrArray(["Дом", "Банк", "Больница", "Театр"], "Кино"));
// //


// // 3
// let number = 32.58884;
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));
// //


// // 4
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));
// //

// // 5
// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue
// }
// console.log(getRandomInt(1, 10));
// // 


// // 6

// function getRandomArrNumbers(number) {

//     const arrayRound = [];

//     let lengthNumber = Math.round((number / 2));

//     for (let i = 0; i < lengthNumber; i++) {
//         arrayRound.push(Math.round(Math.random() * number));
//     };
    
//     console.log (arrayRound);
// }

// getRandomArrNumbers(12);
// getRandomArrNumbers(20);
// getRandomArrNumbers(7);
// //


// // 7
// console.log(getRandomInt(20, 100));
// //


// // 8
// let myDate = new Date("07 June 2023");
// console.log(myDate); 
// //


// // 9
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);
// // 


// // 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();

// let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() +
//     " - это " + days[myDate.getDay()] +
//     " Врем: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

// console.log(fullDate);
// // 

