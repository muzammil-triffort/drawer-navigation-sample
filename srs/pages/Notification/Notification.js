import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Notification extends Component {
  
  static navigationOptions = ({ navigation, props }) => ({
    title: "Notification"
  });

  render () {
    return (
      <View style={styles.container}>
        <Text>Notification Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default Notification;