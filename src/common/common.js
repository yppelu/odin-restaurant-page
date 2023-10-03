import restaurantIcon from '../assets/restaurant-icon.svg';

const tabs = {};

function createPageBase() {
  const container = document.getElementById('container');
  const header = createHeader();
  const main = createMain();

  container.appendChild(header);
  container.appendChild(main);

  return main;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  header.appendChild(createHeaderLogoBlock());
  header.appendChild(createHeaderNavBlock());

  return header;
}

function createHeaderLogoBlock() {
  const headerLogoBlock = document.createElement('div');
  headerLogoBlock.classList.add('header__logo-block');

  headerLogoBlock.appendChild(createHeaderLogoTitle('RESTA'));
  headerLogoBlock.appendChild(createHeaderLogoImage());
  headerLogoBlock.appendChild(createHeaderLogoTitle('URANT'));

  return headerLogoBlock;
}

function createHeaderLogoImage() {
  const image = document.createElement('img');

  image.setAttribute('src', restaurantIcon);
  image.setAttribute('alt', 'Restaurant icon');
  image.classList.add('header__logo-image');

  return image;
}

function createHeaderLogoTitle(text) {
  const title = document.createElement('h1');
  title.classList.add('header__logo-title');
  title.textContent = text;
  return title;
}

function createHeaderNavBlock() {
  const headerNavBlock = document.createElement('nav');
  headerNavBlock.classList.add('header__nav-block');

  const navTabsNames = ['HOME', 'MENU', 'CONTACTS'];
  for (let i = 0; i < navTabsNames.length; i++) {
    headerNavBlock.appendChild(createNavTab(navTabsNames[i]));
  }

  return headerNavBlock;
}

function createNavTab(text) {
  const tab = document.createElement('button');

  tab.setAttribute('type', 'button');
  (text === 'HOME')
    ? tab.setAttribute('data-active-tab', 'true')
    : tab.setAttribute('data-active-tab', 'false');
  setTabEventListener(tab);
  tab.classList.add('header__nav-tab');
  tab.textContent = text;

  tabs[text] = tab;
  return tab;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  return main;
}

function setTabEventListener(tab) {
  tab.addEventListener('click', () => {
    for (let tab in tabs) {
      if (tabs[tab].getAttribute('data-active-tab') === 'true')
        tabs[tab].setAttribute('data-active-tab', 'false');
    }
    tab.setAttribute('data-active-tab', 'true');
  });
}

export { createPageBase, tabs };