/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.property}>Property Finder</Text>
        <Text style={{height:1, alignSelf: "stretch", backgroundColor:'#EFEFEF'}}> </Text>
        <Text style={styles.welcome}>Search for house buy!</Text>
        <Text style={styles.instructions}>Search buy place name or post code</Text>
        <View style={styles.flowRight}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search via name of post code"
            />
            <Button onPress={this.props.clickMe}    
            backgroundColor='#00000000'              
              color='#48BBEC'
              title='Go'/>
          </View>
        <Image source={require('./App/Assets/images/ar.png')}  style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  property: {
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    color: '#444444',
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center'
  },
  welcome: {
    textAlign: 'center',
    margin: 15,
    color: '#B4B3B4'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    marginTop:5,
    color: '#B4B3B4',
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  marginRight: 20,
  marginLeft: 20
},
searchInput: {
  height: 30,
  padding: 4,
  marginRight: 5,
  flexGrow: 1,
  fontSize: 16,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
  },
  image: {
  width: 217,
  height: 138,
  resizeMode : 'stretch'
},
});
