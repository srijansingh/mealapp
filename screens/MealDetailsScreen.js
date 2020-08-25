import React, {useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useSelector, useDispatch }  from 'react-redux';
import { HeaderButtons, Item} from "react-navigation-header-buttons";
import HelperButton from '../components/HelperButton';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const isFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
    const availableMeal = useSelector(state => state.meals.meals);

    const selectedMeal = availableMeal.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    },
    [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFav : toggleFavoriteHandler });
    }, [toggleFavoriteHandler])

    
    useEffect(() => {
        props.navigation.setParams({isFav:isFavorite});
    }, [isFavorite])

    
    


    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.detail}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {
                selectedMeal.ingredients.map((list,index) => (
                    <ListItem key={list}>{list}</ListItem>
                ))
            }

            <Text style={styles.title}>Steps</Text>
            {
                selectedMeal.steps.map((list,index) => (
                    <ListItem key={list}>{list}</ListItem>
                ))
            }
            
        </ScrollView>
    )
}



MealDetailsScreen.navigationOptions = (navigationData) => {

    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const togglesFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        title:mealTitle,
        headerRight:() => <HeaderButtons HeaderButtonComponent={HelperButton}>
            <Item 
                title="Favorites" 
                iconName={isFav ? "ios-star" : "ios-star-outline"}
                onPress={togglesFavorite} />
        </HeaderButtons>
    }
}



export default MealDetailsScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    detail:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10,
        borderRadius:10
    }
})