import countryTpl from '../templates/country.hbs';
import listTpl from '../templates/countries-list.hbs';
import refs from './refs';
import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function updateMarkup(countries) {
  console.log(countries);
  if (countries.length === 1) {
    const markup = countryTpl(countries);
    refs.countriesContainer.innerHTML = markup;
    success({
      text: 'Country is found! :)',
      delay: 1000,
    });
    return;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup = listTpl(countries);
    refs.countriesContainer.innerHTML = markup;
    info({
      text: 'Countries list! :)',
      delay: 1000,
    });
    return;
  }
  if (countries.length > 10) {
    refs.countriesContainer.innerHTML = '';
    error({
      text: 'Too many matches, please, do your request more unique!',
      delay: 1000,
    });
    return;
  }
  if (!countries.length) {
    refs.countriesContainer.innerHTML = '';
    error({
      text: 'Not found!',
      delay: 1000,
    });
    return;
  }
}

export default updateMarkup;
