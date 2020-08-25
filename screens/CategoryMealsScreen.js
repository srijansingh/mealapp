import React from 'react'
import { useSelector } from 'react-redux';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = (props) => {

   
    const catId = props.navigation.getParam('categoryId');

    const availableMeal = useSelector(state => state.meals.filteredMeal)

    const displayedMeals= availableMeal.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0);
    

    if(displayedMeals.length === 0 || !displayedMeals){
        return (
            <View style={styles.content}>
                <DefaultText>No meals found. Check your filters!</DefaultText>
            </View>
        )
    }

        return (
        <MealList
            displayedMeals={displayedMeals}
            navigation={props.navigation}
        />
    ) 
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

    return {
        title:selectedCategory.title,
        
    }
}

export default CategoryMealsScreen;


const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})