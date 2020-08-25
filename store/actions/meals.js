export const TOGGLE_FAVORITE = 'TOGGLE_FVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id }
}

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings}
}