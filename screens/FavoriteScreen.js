import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList'

import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HelperButton from '../components/HelperButton';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
    const availableMeal = useSelector(state => state.meals.favoriteMeals);

    if(availableMeal.length === 0 || !availableMeal){
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }

    return (
        <MealList 
        displayedMeals={availableMeal}
        navigation={props.navigation}
        />
    )
}


FavoritesScreen.navigationOptions = (navData) => {

    return {
        title:'Favorite',
        headerLeft : () => <HeaderButtons HeaderButtonComponent={HelperButton}>
        <Item
                title="Favorites" 
                iconName="ios-menu" 
                onPress={() => {
                    navData.navigation.toggleDrawer();
            }} />
    </HeaderButtons>
    }
 }



export default FavoritesScreen

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})