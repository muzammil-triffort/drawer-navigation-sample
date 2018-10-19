/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

import LoginScreen from './srs/pages/Login/Login'

import HomeScreen from './srs/pages/Home/Home'
import DetailScreen from './srs/pages/Home/DetailScreen';

import ArticleScreen from './srs/pages/Article/Article'
import ArticleDetailScreen from './srs/pages/Article/ArticleDetail'

import NotificationScreen from './srs/pages/Notification/Notification'
import VideosScreen from './srs/pages/Videos/Videos';

import { StackNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";

const navigationOption = ({navigation}) =>({

  headerBackTitle: ' ',
  headerBackTitleVisible:true ,
  headerStyle: {
    backgroundColor: '#4e91bd',
    shadowOpacity: 0.25,
      shadowOffset: {
        height: 1,
      },
      shadowRadius: 5,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
      fontSize: 18,
      fontWeight: '500',
  },
});

const toggleOption = ({navigation}) =>({

  headerLeft:(
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="ios-menu" size={30} color='white' style = {{marginLeft: 15}}/>
      </TouchableOpacity>
  ),
});

const HomeNavigation = StackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: toggleOption
  },
  Detail: {
    screen: DetailScreen,
  },
  },
  {
  navigationOptions: navigationOption
  }
);

const ArticleNavigation = StackNavigator({

  Article: {
    screen: ArticleScreen,
    navigationOptions: toggleOption
  },
  ArticleDetail: {
    screen: ArticleDetailScreen,
  }}, 
  {
  navigationOptions: navigationOption
  }
);

const NotificationNavigation = StackNavigator({

  Notification: {
    screen: NotificationScreen,
    navigationOptions: toggleOption
  }},
  {
    navigationOptions: navigationOption
  }
);

const VideosNavigation = StackNavigator({

  Videos: {
    screen: VideosScreen,
    navigationOptions: toggleOption
  }},
  {
    navigationOptions: navigationOption
  }
);

const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeNavigation,
  },
  Article: {
    screen: ArticleNavigation,
  },
  Videos: {
    screen: VideosNavigation
  }, 
  Notifications: {
    screen: NotificationNavigation
  },
});

const LandingNavigation = StackNavigator({

  Login: {
    screen: LoginScreen,

    navigationOptions: navigationOption
    // uncomment this if you don't want Navigation Bar on Login page.
    // navigationOptions: ({ navigation }) => ({ 
    //   header: null
    // })
  },

  Root: 
  {
    screen: MyApp,
    navigationOptions: ({ navigation }) => ({ 
      header: null
    })
  },
});

export default class App extends Component {
  render() {
    return (

      //If you needed Login or Landing page on app launch
      <LandingNavigation/>

      //If Login or Landing page is not required.
      //<MyApp/>
    );
  }
}
