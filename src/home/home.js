import chiefPhoto from '../assets/chief-photo.jpg';

export default function createHomePage() {
  const homePageContainer = document.createElement('div');
  homePageContainer.classList.add('home-container');

  homePageContainer.append(createChiefPhotoContainer());
  homePageContainer.append(createChiefQuoteBlock());

  return homePageContainer;
}

function createChiefPhotoContainer() {
  const chiefPhotoContainer = document.createElement('div');
  chiefPhotoContainer.classList.add('home-container__chief-photo-container');
  chiefPhotoContainer.append(createChiefPhotoImg());
  return chiefPhotoContainer;
}

function createChiefPhotoImg() {
  const chiefPhotoImg = document.createElement('img');
  chiefPhotoImg.setAttribute('src', chiefPhoto);
  chiefPhotoImg.setAttribute('alt', 'Chief cook photo');
  return chiefPhotoImg;
}

function createChiefQuoteBlock() {
  const chiefQuoteBlock = document.createElement('p');
  chiefQuoteBlock.classList.add('home-container__chief-quote');
  chiefQuoteBlock.textContent = '«I grew up with the amazing love story of my great-grandparents. These family traits: perseverance, honesty, and integrity - were cultivated at home. To always strive for the ideal, not to give away on trifles for the sake of immediate profit - a traditional approach to any business. And, of course, passion for cooking. These are traditions which, first and foremost, I would like to pass on to my children.»';
  return chiefQuoteBlock;
}