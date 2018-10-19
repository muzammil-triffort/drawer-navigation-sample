import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

class Home extends Component {

    static navigationOptions = ({ navigation, props }) => ({

        title: "Home Screen"
    });

    render () {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
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

export default Home;