import React, { useState,useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HelperButton from '../components/HelperButton'
import color from '../constant/color';
import DefaultText from '../components/DefaultText';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return (
        <View style={styles.container}>
            <DefaultText>{props.label}</DefaultText>
            <Switch
                trackColor={{true:color.primary}} 
                thumbColor={color.primary}
                value={props.state} 
                onValueChange={props.onChange}/>
        </View>
    )
}



const FilterScreen = (props) => {
    const { navigation } = props
    
    const [isGluten, setIsGluten] = useState(false)
    const [isLactose, setIsLactose] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVeg, setIsVeg] = useState(false)


    const dispatch = useDispatch()


    const saveFilters = useCallback(() => {
        const appliedFilter = {
            glutenFree:isGluten,
            lactoseFree:isLactose,
            vegan:isVegan,
            vegetarian:isVeg
        };
    
        dispatch(setFilters(appliedFilter));
        
    }, [isGluten,isLactose,isVeg,isVegan, dispatch]);


    useEffect(()=> {
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                label='Gluten-free' 
                state={isGluten} 
                onChange={value => setIsGluten(value)}
            />
            <FilterSwitch 
                label='Lactose-free' 
                state={isLactose} 
                onChange={value => setIsLactose(value)}
            />
            <FilterSwitch 
                label='Vegan' 
                state={isVegan} 
                onChange={value => setIsVegan(value)}
            />
            <FilterSwitch 
                label='Vegeterian' 
                state={isVeg} 
                onChange={value => setIsVeg(value)}
            />
        </View>
    )
}


FilterScreen.navigationOptions = (navData) => {

    return {
        title:'Filter',
        headerLeft : () =>( 
        <HeaderButtons HeaderButtonComponent={HelperButton}>
            <Item
                    title="Favorites" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                }} />
        </HeaderButtons>
    ),
    headerRight : () =>( 
        <HeaderButtons HeaderButtonComponent={HelperButton}>
            <Item
                    title="Save" 
                    iconName="ios-save" 
                    onPress={
                        navData.navigation.getParam('save')
                } />
        </HeaderButtons>
        )
    }
 }

export default FilterScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        width:'80%',
        marginVertical:15
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        margin:20,
        textAlign:'center'
    }
})