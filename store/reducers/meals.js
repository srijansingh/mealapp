import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeal: MEALS,
    favoriteMeals:[]
}


const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meals => meals.id === action.mealId);
            if(existingIndex >= 0){
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex,1);
                return {...state, favoriteMeals: updatedFavMeals };
            }else{
                const meal = state.meals.find(meal => meal.id === action.mealId);

                return {...state, favoriteMeals:state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilter = action.filters;
            const updatedMeals = state.meals.filter(meal => {
                if(appliedFilter.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilter.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilter.vegan && !meal.isVegan){
                    return false;
                }
                if(appliedFilter.vegetarian && !meal.isVegetarian){
                    return false
                }
                return true;
            });
            return {...state, filteredMeal:updatedMeals}

        default:
            return state
    }
    
}

export default mealsReducer;