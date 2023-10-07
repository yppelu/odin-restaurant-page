const mapIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>';
const phoneIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>';

export default function createContactsPage() {
  const contactsPageContainer = document.createElement('div');
  contactsPageContainer.classList.add('contacts-container');

  contactsPageContainer.append(createContactBlock(phoneIcon, '+1 123 456-7890', 'tel:+11234567890'));
  contactsPageContainer.append(createContactBlock(mapIcon, 'HCC6+5R8, South SIQQ 1ZZ, South Georgia and the South Sandwich Islands', 'https://www.google.com/maps?ll=-54.429579,-36.587909&z=15&t=h&hl=ru&gl=RU&mapclient=embed&cid=16712100160226098835'));
  contactsPageContainer.append(createMapBlock());

  return contactsPageContainer;
}

function createContactsSvgIcon(svgIcon) {
  const placeholder = document.createElement('template');
  placeholder.innerHTML = svgIcon;

  const svg = placeholder.content.firstElementChild;
  svg.classList.add('contacts-container__contacts-icon');
  return svg;
}

function createContactLink(link, text) {
  const contact = document.createElement('a');
  contact.setAttribute('href', link);
  contact.textContent = text;
  return contact;
}

function createContactBlock(icon, text, link) {
  const contactBlock = document.createElement('div');
  contactBlock.classList.add('contacts-container__contact-block');

  contactBlock.append(createContactsSvgIcon(icon));
  contactBlock.append(createContactLink(link, text));

  return contactBlock;
}

function createMapBlock() {
  const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6564.111442914674!2d-36.585367912973105!3d-54.43180246864658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbecb6bc382f7cb3b%3A0xe7ed4e8d1d067e93!2sSouth%20Georgia%20and%20the%20South%20Sandwich%20Islands!5e0!3m2!1sru!2sru!4v1696668675377!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  const placeholder = document.createElement('template');
  placeholder.innerHTML = map;

  const mapBlock = placeholder.content.firstElementChild;
  mapBlock.classList.add('contacts-container__map');
  return mapBlock;
}