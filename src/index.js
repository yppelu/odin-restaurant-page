import './index.css';
import { createPageBase, tabs } from './common/common.js';
import createHomePage from './home/home.js';
import createContactsPage from './contacts/contacts.js';

const main = createPageBase();
const homePage = createHomePage();
const contactsPage = createContactsPage();

main.append(homePage);