function replaceDiv() {
    if (window.innerWidth < 768) {
        // Находим элемент, который нужно заменить
        const oldDiv = document.querySelector('.header__nav');

        // Создаем новый div
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="header__dropdown">
  <button class="header__dropdown_button">Menu</button>
  <div class="header__dropdown_content">
    <a class="header__dropdown_link" href="#">Mobile Top Up</a>
    <a class="header__dropdown_link" href="#">About</a>
    <a class="header__dropdown_link" href="#">Rate</a>
    <a class="header__dropdown_link" href="#">Help</a>
  </div>
</div>`;

        // Заменяем старый div на новый
        oldDiv.replaceWith(newDiv);
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = replaceDiv;
window.onresize = replaceDiv;
