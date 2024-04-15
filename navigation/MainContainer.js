import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'
import DesignScreen from './screens/DesignScreen';

//Screen Names
const homeName = 'Home';
const notifName = 'Notification';
const profileName = 'Profile';
// const designName = 'Design'

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
                            iconName = focused ? 'notifications' : 'notifications-outline'
                        } else if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline'
                        } 
                        // else if (rn === designName) {
                        //     iconName = focused ? 'accessibility' : 'accessibility-outline'
                        // }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
               
                })}>
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={notifName} component={NotificationScreen}/>
                <Tab.Screen name={profileName} component={ProfileScreen}/>
                {/* <Tab.Screen name={designName} component={DesignScreen}/> */}

            </Tab.Navigator>
        </NavigationContainer>
    );
}