import { createPhotoData } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageFragments = document.createDocumentFragment();
const photoDataUsers = createPhotoData();

const createsUserImage = () => {
  photoDataUsers.forEach((dataUser) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureItem.querySelector('.picture__img').src = dataUser.url;
    pictureItem.querySelector('.picture__img').alt = dataUser.description;
    pictureItem.querySelector('.picture__comments').textContent = dataUser.comments.length;
    pictureItem.querySelector('.picture__likes').textContent = dataUser.likes;
    imageFragments.appendChild(pictureItem);
  });
  pictures.appendChild(imageFragments);
};

export { createsUserImage };
