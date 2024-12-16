/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords() {}

function capitalizeWords(str) {
  // Разбиваем строку на массив слов
  const words = str.split(' ');
  
  // Создаем массив для хранения результата
  const capitalizedWords = [];
  
  // Проходим по каждому слову и делаем первую букву заглавной
  for (let i = 0; i < words.length; i++) {
      // Делаем первую букву заглавной, а остальные малой
      const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      // Добавляем измененное слово в массив
      capitalizedWords.push(capitalizedWord);
  }
  
  // Соединяем слова обратно в строку и возвращаем результат
  return capitalizedWords.join(' ');
}

// Пример использования
const inputStr = "hello world from javascript";
const result = capitalizeWords(inputStr);
console.log(result); // Вывод: "Hello World From Javascript"