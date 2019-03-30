import React from 'react';
import { StyleSheet, Text, View,Platform,ImageBackground } from 'react-native';
import {Button} from 'native-base';
const myBackground = require('./assets/icons/landing.jpg');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground source={myBackground} style={{width:'100%', height:'100%'}} >

        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}> Welcome to PokeSearch</Text>
          <Button
          block={true}
          style={styles.buttonStyle}
          onPress={() =>{

          }}>
          <Text style={styles.buttonText}>Start Searching</Text>

          </Button>
        </View>

        </ImageBackground>

      </View>
    );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: Platform.OS === "android"? 24: 0,
},
viewStyle: {
flex: 1,
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center'
},
titleStyle: {
  fontSize: 30,
  color: 'blue',
  alignItems: 'center',
},
buttonStyle: {
margin: 10,

},
buttonText: {
color:'white',
fontSize: 20,
},
});
