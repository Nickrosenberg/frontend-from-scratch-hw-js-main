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
      // Проверяем, существует ли ресурс в game.resources
      if (this.resources.hasOwnProperty(resource)) {
          // Если существует, добавляем указанное количество
          this.resources[resource] += amount;
          console.log(`Добавлено ${amount} ${resource}. Текущее количество: ${this.resources[resource]}`);
      } else {
          // Если ресурс не существует, выводим сообщение
          console.log("Invalid resource");
      }
  }
};

// Примеры использования:
game.addResource('gold', 50); // Добавлено 50 gold. Текущее количество: 150
game.addResource('lumber', 20); // Добавлено 20 lumber. Текущее количество: 70
game.addResource('water', 10); // Invalid resource