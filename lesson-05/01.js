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
  
  addResource(resource, amount) {
      // Проверяем, существует ли тип ресурса в объекте resources
      if (!(resource in this.resources)) {
          console.log("Invalid resource");
          return; // Выход из метода, если ресурс неверный
      }
      
      // Проверяем, что amount является положительным числом
      if (typeof amount !== 'number' || amount < 0) {
          console.log("Amount should be a positive number");
          return; // Выход из метода, если количество ресурса некорректное
      }

      // Добавляем количество ресурса к существующему значению
      this.resources[resource] += amount;
  }
};

// Примеры использования:
game.addResource('gold', 50);  // Добавляет 50 золота
game.addResource('lumber', 20); // Добавляет 20 древесины
game.addResource('water', 10);  // Вывод: Invalid resource
game.addResource('stone', -10);  // Вывод: Amount should be a positive number

console.log(game.resources); // Проверяем обновленные ресурсы