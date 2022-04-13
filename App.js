import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Splash from './src/Splash'
import Home from './src/Home'
import FlatList from './src/Flatlist'
import FlatListOne from './src/FlatlistOne'
import Service from './src/Service'
import Service2 from './src/Service2'
import Companies from './src/Companies'
import Workers from './src/Workers'
import Profile from './src/Profile'
import Saved from './src/Saved'
import Contact from './src/Contact'
import Screens from './src/Screens'

const Stack = createStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Splash'
        component={Splash}
      />
      <Stack.Screen
        name='Screens'
        component={Screens} />
      <Stack.Screen
        name='Service'
        component={Service} />
      <Stack.Screen
        name='Companies'
        component={Companies} />
      <Stack.Screen
        name='Workers'
        component={Workers} />
      <Stack.Screen
        name='Profile'
        component={Profile} />
      <Stack.Screen
        name='Saved'
        component={Saved}
      />
      <Stack.Screen
        name='Contact'
        component={Contact}
      />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>

      <MyStack />

    </NavigationContainer>
  )
}