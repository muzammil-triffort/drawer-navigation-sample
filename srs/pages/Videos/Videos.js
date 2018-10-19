import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Videos extends Component {

    static navigationOptions = ({ navigation, props }) => ({

        title: "Videos"
    });

  render () {
    return (
      <View style={styles.container}>
        <Text>Videos Screen</Text>
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

export default Videos;