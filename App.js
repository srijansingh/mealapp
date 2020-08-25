import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import * as Font from "expo-font";
import { AppLoading } from 'expo';
import {enableScreens} from "react-native-screens";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealsReducer from './store/reducers/meals';



enableScreens();

const rootReducer = combineReducers({
  meals:mealsReducer
})

const store = createStore(rootReducer);

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading
              startAsync={fetchFont} 
              onFinish={()=>setDataLoaded(true)} 
            />;
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
