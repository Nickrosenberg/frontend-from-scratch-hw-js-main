/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
let isAdmin = false; // Статус администратора
let isVerifiedUser = true; // Статус подтвержденного пользователя
let hasSpecialPermission = false; // Наличие специального разрешения
let hasTemporaryPass = true; // Наличие временного пропуска

// Условия доступа
let isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);

// Вывод результата
console.log(isAccess); // true или false в зависимости от условий
// your code
