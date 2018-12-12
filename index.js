/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomRow from './App/Containers/CustomRow';
import NavigationExperimental from 'react-native-deprecated-custom-components';

class Index extends Component {

    renderScene(route, navigator) {
        switch(route.name) {
            case "first": return(<App clickMe={()=>{navigator.push({name:"second"});}}/>);
            case "second": return(<CustomRow  backFirst={()=>{navigator.pop({name:"first"});}}/>);
        }
    }
    render(){
        return(
            <NavigationExperimental.Navigator
                initialRoute={{name:"first"}}
                renderScene={this.renderScene}
            />
        );
    }
}

AppRegistry.registerComponent(appName, () => Index);
