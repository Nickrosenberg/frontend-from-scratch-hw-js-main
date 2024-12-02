/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
      gold: 100,
      lumber: 50,
      stone: 75,
      // другие ресурсы могут быть добавлены здесь
  },
  
  addResource: function(resource, amount) {
      // Проверка, существует ли тип ресурса
      if (!(resource in this.resources)) {
          // console.log("Invalid resource");
          return;
      }
      
      // Проверка, является ли amount числом и больше ли оно 0
      if (typeof amount !== 'number' || amount <= 0) {
          console.log("Amount must be a positive number");
          return;
      }

      // Добавление ресурсов
      this.resources[resource] += amount;
  }
};

// Примеры использования:
game.addResource('gold', 50); // Добавит 50 к золоту
console.log(game.resources.gold); // 150

game.addResource('lumber', 30); // Добавит 30 к древесине
console.log(game.resources.lumber); // 80

game.addResource('stone', -10); // Выведет сообщение о некорректном количестве
game.addResource('food', 20); // Выведет "Invalid resource"