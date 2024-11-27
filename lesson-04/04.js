/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let doubledString = ''; // Инициализируем пустую строку для хранения результата

    // Проходим по каждому символу в строке
    for (let i = 0; i < str.length; i++) {
        const char = str[i]; // Получаем текущий символ
        doubledString += char.repeat(2); // Удваиваем символ и добавляем к результату
    }

    return doubledString; // Возвращаем новую удвоенную строку
}

// Примеры использования
console.log(doubleEachCharacter('hello')); // 'hheelllloo'
console.log(doubleEachCharacter('world!')); // 'wwoorrlldd!!'
console.log(doubleEachCharacter('123')); // '112233'
console.log(doubleEachCharacter('')); // ''
