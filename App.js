import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen';
import CustomSideBar from './components/CustomSideBar'
import SettingsScreen from './screens/SettingsScreen'
import AppDrawerNavigator from './components/AppDrawerNavigator' 


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator)