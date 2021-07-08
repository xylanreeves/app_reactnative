/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AddButton from './components/AddButton'

import Home from './screens/Home'
import AddPost from './screens/AddPost'
import ProfileAdmin from './screens/ProfileAdmin'
import EditProfile from './screens/EditProfile'
import Wallet from './screens/Wallet'

import color from './constants/colors'



// const HomeStack = createStackNavigator();
const ProfileAdminStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={Home} />
//   </HomeStack.Navigator>
// );


const ProfileAdminStackScreen = () => (
  <ProfileAdminStack.Navigator>
    <ProfileAdminStack.Screen name="ProfileAdmin" component={ProfileAdmin} options={{ headerShown: false }} />
  </ProfileAdminStack.Navigator>
);

function MyTabs() {
  return (
    < Tab.Navigator
      initialRouteName="ProfileAdmin"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
            return <AntIcon name="home" size={size} color={color} />
          } else if (route.name === 'AddPost') {
            return <AddButton />
          } else if (route.name === 'ProfileAdmin') {
            iconName = 'user'
          }

          // You can return any component that you like here!
          return <AntIcon name={iconName} size={size} color={color} />;
        },
      }
      )
      }
      tabBarOptions={{
        activeTintColor: color.blueShade,
        inactiveTintColor: '#BDBDBD',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddPost" component={AddPost} options={{ showLabel: false, tabBarVisible: false }} />
      <Tab.Screen name="ProfileAdmin" component={ProfileAdminStackScreen} />
    </Tab.Navigator >
  );
}


export class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="HomePage" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ tabBarVisible: false }} />
          <Stack.Screen name="Wallet" component={Wallet} options={{ tabBarVisible: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App
