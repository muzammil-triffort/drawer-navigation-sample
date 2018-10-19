import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Article extends Component {

    static navigationOptions = ({ navigation, props }) => ({

        title: "Article"
    });

  render () {
    return (
      <View style={styles.container}>
        <Text>Article Screen</Text>
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

export default Article;