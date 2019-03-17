
import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View, Image, ProgressBarAndroid, Platform, ProgressViewIOS} from 'react-native';

export default class WaitingScreen extends Component{
constructor(props){
    super(props);
    this.state = {
        visible: this.props.showLoader
    }
}  
shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps);
    if(nextProps.showLoader != this.state.visible){
        this.setState({
            visible: nextProps.showLoader
        })
        return true;
    }
    else{
        return false;
    }
}

render() {
    return (
      <Modal visible={this.state.visible}>
        <View style={{justifyContent:'center',
        alignItems:'center',
        height: '100%',
        widht: '100%',
        backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
            <View style={{height:150, width:150, backgroundColor:'#fff', justifyContent:'center', alignItems:'center',borderRadius: 10}}>
                <Image source={require('./assets/img/youtube.png')} style={{height:75, width: 75, borderRadius: 20}}/>
                {
                    Platform.OS == 'android' ? 
                    <ProgressBarAndroid styleAttr="Horizontal" /> :
                    <ProgressViewIOS progressViewStyle={"default"}/>
                }
            </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({

});
