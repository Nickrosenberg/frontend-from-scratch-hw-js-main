/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true; // Элемент найден - возвращаем true
        }
    }
    return false; // Элемент не найден - возвращаем false
}

// Пример использования
console.log(includesElement([1, 2, 3], 2)); // должен вернуть true
console.log(includesElement([1, 2, 3], 4)); // должен вернуть false
console.log(includesElement(['apple', 'banana', 'cherry'], 'banana')); // должен вернуть true
console.log(includesElement(['apple', 'banana', 'cherry'], 'orange')); // должен вернуть false
console.log(includesElement([], 1)); // должен вернуть false