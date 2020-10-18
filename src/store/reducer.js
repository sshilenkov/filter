import countries from 'api/countriesList.json';
import hotelsList from 'api/hotels.json';

const resetState = {
    searchValue: '',
    hotels: hotelsList,
    matchesList: countries,
    selectedCountries: [],
    type: [],
    stars: [],
    reviews: 0,
    price: [100, 100500],
    currentPage: 1
}

const initialState = {
    searchValue: '',
    hotels: hotelsList,
    matchesList: countries,
    selectedCountries: [],
    type: [],
    stars: [],
    reviews: 0,
    price: [0, 100501],
    currentPage: 1
}

const reducer = (state = initialState, actions, clearState = resetState) => {
    switch (actions.type) {
        case 'COUNTRY_SEARCH':
            const regExp = new RegExp (actions.value, 'gi');
            const matches = actions.countries
                                    .filter(country => country.name.match(regExp)
                                                       && country.name.search(regExp) === 0);

            return {
                ...state,
                searchValue: actions.value,
                matchesList: matches
            };

        case 'CLICK_CHECKBOX':
            switch (actions.checkboxType) {
                case 'type':
                    const typeList = [...state.type];
                    const indx = typeList.indexOf(actions.id);

                    if (indx !== -1) {
                        typeList.splice(indx, 1);
                        return {
                            ...state,
                            type: typeList
                        };
                    } else {
                        typeList.push(actions.id);
                        return {
                            ...state,
                            type: typeList
                        };
                    }

                case 'country':
                    let selectedCountries = [...state.selectedCountries];
                    const index = selectedCountries.indexOf(actions.id);

                    if (index !== -1) {
                        selectedCountries.splice(index, 1);
                        return {
                            ...state,
                            selectedCountries
                        };
                    } else {
                        selectedCountries.push(actions.id);
                        return {
                            ...state,
                            selectedCountries
                        };
                    }

                case 'stars':
                    const stars = [...state.stars];
                    const idx = stars.indexOf(actions.id);

                    if (idx !== -1) {
                        stars.splice(idx, 1);
                        return {
                            ...state,
                            stars
                        };
                    } else {
                        stars.push(actions.id);
                        return {
                            ...state,
                            stars
                        };
                    }

                default:
                    return state;
            }

        case 'SET_REVIEWS':
            return {
                ...state,
                reviews: actions.count
            };

        case 'INPUT_SET_PRICE_LIMIT':            
            let priceMin = state.price[0];
            let priceMax = state.price[1];

            actions.value > 100500 && (actions.value = 100500);
            actions.value < 1 && (actions.value = 0)

            if (actions.limit === 'min') {
                actions.value > priceMax && (priceMax = actions.value);
                return {
                    ...state,
                    price: [actions.value, priceMax]
                }
            } else {
                actions.value < priceMin && (priceMin = actions.value);
                return {
                    ...state,
                    price: [priceMin, actions.value]
                }
            }

        case 'RANGE_SET_PRICE_LIMIT':
            return {
                ...state,
                price: actions.value
            }

        case 'APPLY_FILTER':
            const hotels = [...hotelsList];

            let filteredHotels = hotels.filter(hotel => {
                if (!state.selectedCountries.length) {
                    return true;
                }
                return state.selectedCountries.includes(hotel.location);
            })
            .filter(hotel => {
                if (!state.type.length) {
                    return true;
                }
                return state.type.includes(hotel.type);
            })
            .filter(hotel => {
                if (!state.stars.length) {
                    return true;
                }
                return state.stars.includes(hotel.stars);
            })            
            .filter(hotel => hotel.reviews >= state.reviews)
            .filter(hotel => hotel.price >= state.price[0] && hotel.price <= state.price[1]);

            return {
                ...state,
                hotels: filteredHotels
            }

        case 'RESET_FILTER':
            return {
                ...state,
                ...clearState
            }

        case 'CLICK_PAGE':
            return {
                ...state,
                currentPage: actions.pageNumber
            }

        // case 'NEXT_PAGE':
        //     const nextPage = state.currentPage + 1;
        //     return {
        //         ...state,
        //         currentPage: nextPage
        //     }

        default:
            return state;
    }
}

export default reducer;