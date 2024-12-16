/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

// function isNumeric(str) {
//   // your code
// }

// // console.log(isNumeric("123")) // Ожидаемый результат: true
// // console.log(isNumeric("12.3")) // Ожидаемый результат: true
// // console.log(isNumeric("123abc")) // Ожидаемый результат: false
// // console.log(isNumeric("abc")) // Ожидаемый результат: false
// // console.log(isNumeric(" ")) // Ожидаемый результат: false


function isNumeric(str) {
  // Удаляем пробелы в начале и конце строки
  str = str.trim();

  // Проверяем, является ли str числом
  return !isNaN(str) && !isNaN(parseFloat(str)) && str !== "";
}

// Примеры использования
console.log(isNumeric("123"));      // Ожидаемый результат: true
console.log(isNumeric("12.3"));     // Ожидаемый результат: true
console.log(isNumeric("123abc"));   // Ожидаемый результат: false
console.log(isNumeric("abc"));      // Ожидаемый результат: false
console.log(isNumeric(" "));        // Ожидаемый результат: false

