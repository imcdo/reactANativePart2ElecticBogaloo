import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './src/components/navigation/tabnav' 
import Login from './src/components/screens/Login' 

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hasLogedIn : false
    };
    const loginPage = <TabNav/>;
  }

  onPressLogin = () => {
    this.setState({hasLogedIn : true})
  }
  
  render() {
    let currentPage;
    if (this.state.hasLogedIn == false) {
      currentPage = <Login onSubmitLogin={this.onPressLogin} />;
    }
    else {
      currentPage = <TabNav/>;
    }
    return(
      <View style={styles.container}>
        {currentPage}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})