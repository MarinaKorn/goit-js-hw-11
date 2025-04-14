import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching data.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
