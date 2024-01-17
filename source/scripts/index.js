/* в этот файл добавляет скрипты*/
const header = document.querySelector('.header');
const btn = document.querySelector('.header__burger');

header.classList.remove('header--no-js');
header.classList.add('header--close');
btn.addEventListener('click', ()=> {
  if (header.classList.contains('header--close')) {
    header.classList.remove('header--close');
    header.classList.add('header--open');
  } else {
    header.classList.add('header--close');
    header.classList.remove('header--open');
  }
});
