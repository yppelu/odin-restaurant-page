import './index.css';
import { createPageBase, tabs } from './common/common.js';
import createHomePage from './home/home.js';
import createMenuPage from './menu/menu.js';
import createContactsPage from './contacts/contacts.js';

const main = createPageBase();
const homePage = createHomePage();
const menuPage = createMenuPage();
const contactsPage = createContactsPage();

main.append(homePage);

tabs['home'].addEventListener('click', () => {
  main.innerHTML = '';
  main.append(homePage);
});

tabs['menu'].addEventListener('click', () => {
  main.innerHTML = '';
  main.append(menuPage);
});

tabs['contacts'].addEventListener('click', () => {
  main.innerHTML = '';
  main.append(contactsPage);
});