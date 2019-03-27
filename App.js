
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      <View>
        <Text style={styles.textStyling}>Welcome To Home Screen.</Text>
        <Button
          title="Go to about"
          onPress={() => { this.props.navigation.navigate('about') }}
        />
      </View>
    )
  }
};


class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About'
  };
  render() {
    return (
      <View>
        <Text style={styles.textStyling}>Welcome To About Screen.</Text>
        <Button
          title="Go to Home"
          onPress={() => { this.props.navigation.navigate('home') }}
        />
      </View>
    )
  }
};

const MainNavigator = createStackNavigator({
  home: { screen: HomeScreen },
  about: { screen: AboutScreen }
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  textStyling: {
    padding: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
});
