/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// const score = 70 // тестовое значение, можно изменять
// let grade
// // your code

function determineGrade(score) {
    let grade;

    if (score < 0 || score > 100) {
        return 'Ошибка: Балл должен быть в диапазоне от 0 до 100.';
    }

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

// Пример использования функции
let score = 85; // Задайте балл от 0 до 100
let grade = determineGrade(score);
console.log(`Оценка студента за балл ${score} - ${grade}`);