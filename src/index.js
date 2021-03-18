import './styles.css';
import fetchCountries from './js/fetch-countries';
import { debounce } from 'lodash';
import updateCountriesMarkup from './js/countries-markup';
import refs from './js/refs';

const { searchForm } = refs;

refs.searchForm.addEventListener(
  'input',
  debounce(() => {
    handleInputChange();
  }, 500),
);

function handleInputChange() {
  if (searchForm.value) {
    const inputValue = searchForm.value;
    fetchCountries(inputValue).then(updateCountriesMarkup);
  }
}
