function replaceDiv() {
    if (window.innerWidth < 768) {

        const oldDiv = document.querySelector('.header__nav');

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

        oldDiv.replaceWith(newDiv);
    }
}

window.onload = replaceDiv;
window.onresize = replaceDiv;
