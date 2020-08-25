import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground } from 'react-native'
import DefaultText from './DefaultText'

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableNativeFeedback
            onPress={props.onSelect}
        >
            <View>
                <View style={{...styles.header, ...styles.mealRow}}>
                    <ImageBackground source={{uri:props.image}} style={styles.image}>
                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </ImageBackground>
                </View>

                <View style={{...styles.detail, ...styles.mealRow}}>
                    <DefaultText>{props.duration}m</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        marginVertical:10,
        borderRadius:10,
        overflow:'hidden',
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5'
    },
    mealRow:{
        flexDirection:'row',

    },
    header:{
        height:'85%',
        
    },
    detail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    image:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.3)',
        paddingVertical:5,
        paddingHorizontal:12
    }
})

export default MealItem


