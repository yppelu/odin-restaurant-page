import Image from '../assets/dish.jpg';

export default function createMenuPage() {
  const menuPageContainer = document.createElement('div');
  menuPageContainer.classList.add('menu-container');

  for (let i = 0; i < 6; i++) {
    menuPageContainer.append(createMenuCard('#', Image, 'Some beautiful dish'));
  }

  return menuPageContainer;
}

function createMenuCard(link, image, title) {
  const menuCard = document.createElement('a');
  menuCard.classList.add('menu-container__menu-card');
  menuCard.setAttribute('href', link);

  menuCard.append(createMenuItemImage(image, title));
  menuCard.append(createMenuItemTitle(title));

  return menuCard;
}

function createMenuItemImage(image, title) {
  const img = document.createElement('img');

  img.classList.add('menu-container__menu-image');
  img.setAttribute('src', image);
  img.setAttribute('alt', title + 'image');

  return img;
}

function createMenuItemTitle(text) {
  const title = document.createElement('h3');
  title.classList.add('menu-container__menu-title');
  title.textContent = text;
  return title;
}