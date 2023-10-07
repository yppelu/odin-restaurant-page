import './index.css';
import { createPageBase, tabs } from './common/common.js'
import createHomePage from './home/home.js'

const main = createPageBase();
const homePage = createHomePage();

main.append(homePage);