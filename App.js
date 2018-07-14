import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './src/components/navigation/tabnav'  

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TabNav />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})