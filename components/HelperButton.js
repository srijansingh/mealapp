import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {HeaderButton}  from 'react-navigation-header-buttons';
import {Ionicons} from "@expo/vector-icons";
import color from '../constant/color';

const HelperButton = (props) => {
    return (
        <HeaderButton 
            {...props}  
            IconComponent={Ionicons} 
            iconSize={23} 
            color="white"  
        />
    )
}

export default HelperButton

const styles = StyleSheet.create({})
