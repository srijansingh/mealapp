import React from 'react'
import { StyleSheet, Text, View, Button,Dimensions, Platform } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { CATEGORIES } from '../data/dummy-data';
import color from "../constant/color";
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HelperButton from '../components/HelperButton';




const CategoriesScreen = (props) => {

    const renderGridItems = (itemData) => {
        return (
            <CategoryGridTile
                color={itemData.item.color}
                title={itemData.item.title}
                onSelect={()=>{
                    props.navigation.navigate({routeName:'CategoryMeals', params:{
                        categoryId: itemData.item.id
                    }})
                }}
            />
        )
    }


    return (
        
        <FlatList 
            keyExtractor={(item)=>item.id}
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItems}
        />
    )
}


CategoriesScreen.navigationOptions = (navData) => {

       return {
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




const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin:Dimensions.get('window').width/50,
        width:Dimensions.get('window').width/2.2,
        height:150,
        backgroundColor:'red',
        overflow:'hidden'
    }
})

export default CategoriesScreen

