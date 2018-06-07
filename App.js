import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import I18n from './app/i18n'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {I18n.t('welcome')}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
