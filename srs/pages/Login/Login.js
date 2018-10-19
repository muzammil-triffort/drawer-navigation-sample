import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

class Login extends Component {

    static navigationOptions = ({ navigation, props }) => ({

        title: "Login Screen"
    });

    render () {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate("Root")} title="Push Drawer" />
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

export default Login;