import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/screens/Profile';
import ProfileDetail from './src/screens/Profile/ProfileDetail';
import Home from './src/screens/Home';
import HomeCategories from './src/screens/Home/HomeCategories';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="HomeCategories" component={HomeCategories} />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ProfileDetail" component={ProfileDetail} />
    </ProfileStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="HomeScreens" component={HomeStackScreen} />
        <Tab.Screen name="ProfileScreens" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
