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
      stone: 30
  },
  addResource: function(resource, amount) {
      // Проверяем, существует ли ресурс в объекте resources
      if (this.resources.hasOwnProperty(resource)) {
          // Если ресурс существует, добавляем указанное количество
          this.resources[resource] += amount;
      } else {
          // Если ресурс не существует, выводим сообщение об ошибке
          console.log("Invalid resource");
      }
  }
};

// Примеры использования метода
game.addResource('gold', 50); // Увеличит gold на 50
console.log(game.resources.gold); // 150

game.addResource('lumber', 20); // Увеличит lumber на 20
console.log(game.resources.lumber); // 70

game.addResource('silver', 10); // Выведет "Invalid resource"