import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item} from "react-navigation-header-buttons";
import HelperButton from '../components/HelperButton';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.detail}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Text>List of Title</Text>

            <Text style={styles.title}>Steps</Text>
            <Text>List of steps</Text>
            
        </ScrollView>
    )
}



MealDetailsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('mealId');

    const selected = MEALS.find((cat) => cat.id === catId)

    return {
        title:selected.title,
        headerRight:() => <HeaderButtons HeaderButtonComponent={HelperButton}>
            <Item 
                title="Favorites" 
                iconName="ios-star" 
                onPress={() => {
                    console.log('Marked as fav')
            }} />
        </HeaderButtons>
    }
}



export default MealDetailsScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between'
    },
    title:{
        
    }
})