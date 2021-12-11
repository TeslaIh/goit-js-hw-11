import './sass/main.scss';
'use strict';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ImagesAPIService from './JS/imageAPIservice';
import LoadMoreBtn from './JS/load-more-btn'; 
import Markup from './JS/imageMarkup';

const genetal = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
};

