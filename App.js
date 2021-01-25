import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";


import Sobre from './src/pages/Listar';
import Board from './src/pages/Board';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  },
  Board: {
    name: 'ios-call'
  }
}

export default function App() {
  return (
    <NavigationContainer  >
      <Tab.Navigator initialRouteName="Board" 
      screenOptions={ ({route}) => ({
        tabBarIcon:({color, size} ) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size}/>
        }
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#121212',
          
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#ff0000'
        
      }}
      >
    
        <Tab.Screen name="Sobre" component={Sobre} 
        options={{
          title:"Listar Boards",
          headerStyle:{
            backgroundColor:'#121212'
          },
          headerTintColor: '#fff'
        }}/>
        <Tab.Screen  name="Board" component={Board} options={{
          title:"Criar Board",
          headerStyle:{
            backgroundColor:'#121212'
          },
          headerTintColor: '#fff'
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

