// Задание 3
let day = Math.ceil(Math.random() * 31 + 1);
if (day >= 1 && day <= 10) {
   console.log(`Число ${day} - Первая декада`);
} else if (day > 10 && day <= 20) {
   console.log(`Число ${day} - Вторая декада`);
} else if (day > 20 && day <= 31) {
   console.log(`Число ${day} - Третья декада`);
}
