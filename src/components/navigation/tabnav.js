
import React, { Component } from 'react';
import { createTabNavigator, TabBarTop, TabView } from 'react-navigation';
import Login from "../screens/Login"
import MainScreen from "../screens/main-navigation"

const TabNav = createTabNavigator({
    Login : {
        screen: Login
    },
    Home : {
        screen: MainScreen
    }
    
}, {
    tabBarComponent: TabBarTop,
    tabBarPosition:'top',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#f2f2f2',
        labelStyle: {
            fontSize:22
        }
    }
});

export default TabNav;