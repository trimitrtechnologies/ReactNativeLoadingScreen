
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import WaitingScreen from "./WaitingScreen";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      showLoader: false
    }
  }

  onShowLoader(){

    this.setState({
      showLoader: true
    })
    setTimeout(()=>{
      this.setState({showLoader: false })
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <WaitingScreen showLoader={this.state.showLoader}/>
        <TouchableOpacity onPress={()=>{ this.onShowLoader() }}>
          <Text>Show Loader</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
