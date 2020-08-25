import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterScreen";

import { createAppContainer } from 'react-navigation';
import color from "../constant/color";
import {Ionicons} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const MealsNavigator = createStackNavigator(
    {
        Categories:{
            screen:CategoriesScreen,
            navigationOptions:{
                title: 'Meal Categories'    
            }
        },

        CategoryMeals:{
            screen:CategoryMealsScreen
        },

        MealDetail:MealDetailsScreen
        
    },

    {
        mode:'card',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: color.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);


const FavNavigator = createStackNavigator(
    {
        Favorites : FavoritesScreen,
        MealDetail: MealDetailsScreen
    },
    {
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: color.accent,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
)


const MealsFavTabNavigator = createMaterialBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions:{
                tabBarIcon : (tabInfo) => {
                    return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                },
                tabBarColor:color.primary
            },
            
        },
        Favorite:{
            screen: FavNavigator,
            navigationOptions:{
                tabBarIcon : (tabInfo) => {
                    return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                },
                tabBarColor:color.accent
            }
        }
    },
    {
        activeTintColor :'white',
        shifting:true,
        barStyle:{
            backgroundColor:color.primary
        }
    }
);

const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
},
{
    
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: color.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
}
)



const MainNavigator = createDrawerNavigator({
    MealsFav:{
        screen: MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filters: {
        screen:FilterNavigator,
        navigationOptions:{
            drawerLabel:'Filters'
        }
    }
},{
    contentOptions:{
        activeTintColor:color.primary,
        labelStyle:{
            fontFamily:'open-sans'
        }
    }
})



export default createAppContainer(MainNavigator);