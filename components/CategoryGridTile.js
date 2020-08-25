import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'


const CategoryGridTile = (props) => {
    return (
        <View style={styles.gridItem}>
        <TouchableNativeFeedback
            
            style={{flex:1}}
            onPress={props.onSelect}
        >
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin:12,
        height:150,
        
    },
    container:{
        flex:1,
        elevation:5,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        borderRadius:10
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign:'right'
    }
})

export default CategoryGridTile

