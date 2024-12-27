/*
Изучите файл index.html (секцию "Урок 8"). Разметка уже написано - нужно добавить только js-код.

Функционал магазина питомцев почти готов. Не хватает возможности добавлять питомцев в корзину.
Ваша задача написать обработчик события, который будет добавлять питомцев в корзину.

1. При клике на кнопку с питомцем, id питомца должен добавляться в массив cart.
2. После добавления питомца в корзину, необходимо вызвать функцию updateCartDisplay (она обновит отображение корзины).
3. В корзину можно добавить не более 3 питомцев. Если пользователь пытается добавить больше, то в messageBox должен появится текст: 'Вы не можете добавить более 3 питомцев'

❕❕❕ Представленный в задании код не следует изменять. Требуется только дописать обработчик события.

🧙 Подсказка: используй делегирование - будет достаточно одного обработчика событий на контейнере
🧙 Подсказка: если пользователь кликнет по кнопке с питомцев, id питомца можно будет получить из объекта события (event.target.id)
*/

// / const PETS = [
//   { id: 'cat', title: '🐱' },
//   { id: 'dog', title: '🐶' },
//   { id: 'parrot', title: '🦜' },
//   { id: 'fish', title: '🐠' },
//   { id: 'spider', title: '🕷' },
//   { id: 'snake', title: '🐍' },
//   { id: 'hamster', title: '🐹' },
//   { id: 'turtle', title: '🐢' },
//   { id: 'chinchilla', title: '🦇' },
//   { id: 'hedgehog', title: '🦔' },
//   { id: 'rat', title: '🐀' },
//   { id: 'frog', title: '🐸' },
// ]

// const cart = []

// const petShop = document.querySelector('.pet-shop')
// const cartList = document.getElementById('cart-list')
// const messageBox = document.getElementById('message-box')
// const clearCartButton = document.getElementById('clear-cart-button')

// // Рендерим кнопки для питомцев
// for (let i = 0; i < PETS.length; i++) {
//   const pet = PETS[i]

//   const petButtonElement = document.createElement('button')
//   petButtonElement.classList.add('pet')
//   petButtonElement.id = pet.id
//   petButtonElement.textContent = pet.title

//   petShop.append(petButtonElement)
// }

// // Обновляем отображение корзины
// function updateCartDisplay() {
//   cartList.innerHTML = ''

//   for (let i = 0; i < cart.length; i++) {
//     const petId = cart[i]
//     const pet = PETS.find((item) => item.id === petId)
//     const petSpanElement = document.createElement('li')
//     petSpanElement.classList.add('pet')
//     petSpanElement.textContent = pet.title
//     cartList.append(petSpanElement)
//   }
// }

// clearCartButton.addEventListener('click', function () {
//   cart.length = 0
//   updateCartDisplay()
// })/

// Твой код:

// Предполагаем, что cart - это массив, который уже объявлен и используется для хранения идентификаторов питомцев
let cart = [];

// Функция для обновления отображения корзины
function updateCartDisplay() {
    // Реализуйте логику обновления отображения корзины здесь
}

// Получаем контейнер, который содержит кнопки с питомцами
const petContainer = document.getElementById('petContainer'); // Замените 'petContainer' на фактический id вашего контейнера

// Добавляем обработчик события клика на контейнер
petContainer.addEventListener('click', (event) => {
    // Проверяем, действительно ли был клик по кнопке питомца
    if (event.target && event.target.matches('.add-to-cart-button')) { // Замените '.add-to-cart-button' на фактический селектор вашей кнопки
        const petId = event.target.id; // Получаем id питомца из целевого элемента
        
        // Проверяем, не превышает ли количество питомцев в корзине лимит
        if (cart.length < 3) {
            cart.push(petId); // Добавляем id питомца в массив корзины
            updateCartDisplay(); // Обновляем отображение корзины
        } else {
            // Если корзина уже полна, показываем сообщение
            const messageBox = document.getElementById('messageBox'); // Предполагаем, что у вас есть элемент для сообщений
            messageBox.textContent = 'Вы не можете добавить более 3 питомцев';
        }
    }
});
