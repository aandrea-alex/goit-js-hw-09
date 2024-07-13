const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import '../css/layout/simple-lightbox-window.css'; 

import iconsUrl from '../img/icons.svg';

let modalWindowRef = null;
const KEY_CODE_ESC = 'Escape';
const galleryRef = document.querySelector('.gallery');

const createGallery = images => {
  return images
    .map(({ preview, description, original }) => {
      return `<li class="gallery-item">
           <a class="gallery-link" href="${original}">
             <img class="gallery-img"
                 src="${preview}"
                 alt="${description}"
                 data-source="${original}"
              />
           </a>
         </li>`;
    })
    .join('');
};

const imagesMarkup = createGallery(images);

galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  
    nav: true,
    navText: [
      `<svg
      class="lightbox-button-icon-prev"
      width="24"
      height="24"
      aria-label="icon arrow left">
        <use href="${iconsUrl}#icon-chevron-left"></use>
    </svg>`,
  
      `<svg
      class="lightbox-button-icon-next"
      width="24"
      height="24"
      aria-label="icon arrow right">
      <use href="${iconsUrl}#icon-chevron-right"></use>
    </svg>`,
    ],
  
    close: true,
    closeText: `
    <svg class="lightbox-close-icon" width="16" height="16">
      <use href="${iconsUrl}#close-form"></use>
    </svg>`,
  
    enableKeyboard: true,
    showCounter: true,
    animationSlide: true,
    loop: true,
    widthRatio: 0.85,
    heightRatio: 0.9,
  });