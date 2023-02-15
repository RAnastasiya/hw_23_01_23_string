"use strict";

/*
написати функцію, яка приймає рядок і повертає кількість голосних в рядку
регістр не враховувати (рахувати і великі і маленькі голосні)
працюємо тільки з латинецею
const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
не використовувати регулярні вирази!

спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)
*/

const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];

/**
 * 
 * @param {string} str 
 * @returns {number}
 */
const getNumberOfVowels = (str) => [...str.toLowerCase()].filter(el => vowels.includes(el)).length;

const getNumberOfVowels2 = (str) => str.toLowerCase().split('').filter(el => vowels.includes(el)).length;

try {
  console.log(getNumberOfVowels('qwerty'))
  console.log(getNumberOfVowels2('qwerty'))
} catch (error) {
  console.log(error)
}