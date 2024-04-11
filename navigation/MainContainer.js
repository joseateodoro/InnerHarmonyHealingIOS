import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen'
import NotificationScreen from './screens/NotificationScreen'
import SettingsScreen from './screens/SettingsScreen'

//Screen Names
const homeName = 'Home';
const notifName = 'Notification';
const settings = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            
            initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === notifName) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
               
                })}>

                <Tab.Screen name={homeName} component={HomeScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}