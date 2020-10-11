import countries from 'api/countriesList.json';

export const countryFilter = (value) => ({ type: 'COUNTRY_SEARCH', value, countries });
export const clickCheckbox = (id, checkboxType) => ({ type: 'CLICK_CHECKBOX', id, checkboxType});