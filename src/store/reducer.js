import countries from 'api/countriesList.json';

const initialState = {
    matchesList: countries,
    selectedCountries: [],
    type: {
        apartments: false,
        hotel: false
    },
    stars: [],
    reviews: 0,
    price: [0, 100500]
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'COUNTRY_SEARCH':
            const regExp = new RegExp (actions.value, 'gi');
            const matches = actions.countries.filter(country => country.name.match(regExp) && country.name.search(regExp) === 0);
            state.matchesList = matches;
            return state;

        case 'CLICK_CHECKBOX':
            switch (actions.checkboxType) {
                case 'type':
                    actions.id === 'aparments' ?
                                            state.type.apartments = !state.type.apartments
                                            : state.type.hotel = !state.type.hotel;

                    return state;

                case 'country':
                    let selectedCountries = state.selectedCountries;
                    const index = selectedCountries.indexOf(actions.id);

                    if (index !== -1) {
                        selectedCountries = selectedCountries.splice(index, 1);
                        return state;
                    } else {
                        selectedCountries.push(actions.id);
                        return state;
                    }

                case 'stars':
                    let stars = state.stars;
                    const idx = stars.indexOf(actions.id);

                    if (idx !== -1) {
                        stars = stars.splice(idx, 1);
                        console.log('star remove', state)
                        return state;
                    } else {
                        stars.push(actions.id);
                        console.log('star add', state)
                        return state;
                    }

                default:
                    return state;
            }

        default:
            return state;
    }
}

export default reducer;