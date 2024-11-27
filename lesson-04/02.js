/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    const uniqueElements = []; // Создаем новый массив для хранения уникальных элементов

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; // Получаем текущий элемент массива
        
        // Проверяем, присутствует ли текущий элемент в массиве уникальных элементов
        if (!includesElement(uniqueElements, element)) {
            uniqueElements.push(element); // Если нет, добавляем его в массив уникальных элементов
        }
    }
    
    return uniqueElements; // Возвращаем массив с уникальными элементами
}

// Пример использования
console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // должен вернуть [1, 2, 3, 4]
console.log(findUniqueElements(['apple', 'banana', 'apple', 'cherry', 'banana'])); // должен вернуть ['apple', 'banana', 'cherry']
console.log(findUniqueElements([1, 1, 1, 1, 1])); // должен вернуть [1]
console.log(findUniqueElements([])); // должен вернуть []
