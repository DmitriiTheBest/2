//
// Задание № 1

// Способ № 1
// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] === 10) break;
// 	console.log(numbs[i]);
// }

// Способ № 2
// const numbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] === 10) {
//         break;
//     }
// }
// 


//
// Задание № 2 //

// Способ № 1 
// const numbers = [1, 5, 4, 10, 0, 3]; 
// numbers.indexOf (4);

// Способ № 2
// console.log(numbers.indexOf(4));
//


//
// Задание № 3 //

// 3.1
// const numbers = [1, 3, 5, 10, 20]
// console.log(numbers.join(' ')); 
//

// 3.2
// const arrJoin = [1, 3, 5, 10, 20];
// console.log(arrJoin.join(' '));
//


// 
// Задание № 4 //

// const arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = 1;
//     }
// }
// console.log(arr);
// 


//
// Задание № 5 //

// const order = [1, 1, 1];
// order.push(2, 2, 2);
// console.log(order);


//
// Задание № 6 //
//
// const arrData = [9, 8, 7, 'a', 6, 5];
// arrData.sort();
// arrData.pop();
// console.log(arrData);
//


//
// Задание № 7 //
// 
// const numbers = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt('Введите число от 1 до 10'));
// console.log(numbers.includes(userNumber));
// 


//
// Задание № 8 //
// 
// let string = 'abcdef';
// string = string.split('');
// //console.log(string);
// string = string.reverse();
// //console.log(string);
// string = string.join('');
// console.log(string);
//


//
// Задание № 9 //
//
// const array = [
//     [1, 2, 3],
//     [4, 5, 6],
// ];

// console.log(array.flat());
//


//
// Задание № 10 //

// let randomNumbers = [1, 3, 2, 4, 5, 7, 6, 8, 9];

// for (let i = 0; i < randomNumbers.length - 1; i++) {
//     let resultSum = randomNumbers[i] + randomNumbers[i + 1];
//     console.log(resultSum);
// }
// 


//
// Задание № 11 // 
// function squareArr(...randomNumbers) {
//     return randomNumbers.map(number => number ** 2);
// }

// console.log(squareArr(...randomNumbers));
// 


//
// Задание № 12 //
// let receiveWordsLength = (...words) => {
//     return words.map(number => number.length);
// }

// console.log(receiveWordsLength('массив', '', 'стр', 'Массив - упорядоченный набор элементов', 'д'));
//


//
// Задание № 13 //

// let receiveNegativeNumbers = (...arrNumbers) => {
//     return arrNumbers.filter((el) => el < 0);
// }

// console.log(receiveNegativeNumbers(1, -1, 2, -2, 3, -3));
// 



