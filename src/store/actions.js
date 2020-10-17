import countries from 'api/countriesList.json';

export const countryFilter = (value) => ({ type: 'COUNTRY_SEARCH', value, countries });
export const clickCheckbox = (id, checkboxType) => ({ type: 'CLICK_CHECKBOX', id, checkboxType});
export const setReviewsCount = (count) => ({ type: 'SET_REVIEWS', count });
export const inputSetPriceLimit = (value, limit) => ({ type: 'INPUT_SET_PRICE_LIMIT', value, limit });
export const rangeSetPriceLimit = (value) => ({ type: 'RANGE_SET_PRICE_LIMIT', value });
export const resetFilter = () => ({ type: 'RESET_FILTER' });
export const applyFilter = () => ({ type: 'APPLY_FILTER' });