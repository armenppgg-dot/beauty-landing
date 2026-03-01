// script.js

document.addEventListener("DOMContentLoaded", function () {

  // Кнопка Telegram
  const telegramButtons = document.querySelectorAll(".telegram-btn");

  telegramButtons.forEach(button => {
    button.addEventListener("click", function () {

      alert("Переход в Telegram ✅");

    });
  });

});
