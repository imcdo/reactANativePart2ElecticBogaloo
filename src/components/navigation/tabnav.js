
import React, { Component } from 'react';
import { createTabNavigator, TabBarTop, TabView } from 'react-navigation';
import MainScreen from "../screens/main-navigation"

const TabNav = createTabNavigator({
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