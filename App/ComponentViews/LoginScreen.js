import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select_user} from '../redux/actions';
import { Container, Header, Content, Form, Item, Input, Label,  Button,  Text  } from 'native-base';
import {
    Platform,
    View,
    Image
  } from 'react-native';
  
import styles from './Styles/LoginScreenStyle'
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';





export default class LoginScreen extends Component{
  fbSignIn(){
    facebook({
      appId: '1906030709413245',
      callback: 'fb1906030709413245://authorize',
    }).then((info) => {
      this.props.onLogin(info.user)
      if(this.props.user.name){
        this.props.navigation.navigate('HomeScreen')
      }
    }).catch((error) => {
      this.setState({user: {error: error}})
    });
  }
  googleSignIn(){
    google({
      appId: '959826721453-9ee4bq4h7uvantvbeoj6da3lr91do8oa.apps.googleusercontent.com',
      callback: 'com.googleusercontent.apps.959826721453-9ee4bq4h7uvantvbeoj6da3lr91do8oa:/oauth2redirect',
    }).then((info) => {
      this.props.onLogin(info.user)
      // if(this.props.user.name){
      //   this.props.navigation.navigate('HomeScreen')
      // }
    }).catch((error) => {
      this.setState({user: {error: error}})
    });
  }
  twitSignIn(){
    twitter({
      appId: 'QrBPzLNCUKgA4nwIyU22UXbiv',
      appSecret: '1PreBeVwoscQhWAHChNWsIBwEtjvExqHim25AmI6GnzE6iV2XT',
      callback: 'adventuretime2://authorize',
    }).then((info) => {
      this.props.onLogin(info.user)
      if(this.props.user.name){
        this.props.navigation.navigate('HomeScreen')
      }
    }).catch((error) => {
      this.setState({user: {error: error}})
    });
  }
  
    render() {
        return (
         <View>
           
           <Button style={styles.facebook} onPress={() => {this.fbSignIn()}}>
             <Text>
            facebook
            </Text>
            </Button>
           
           <Button style={styles.google} onPress={() => {this.googleSignIn()}}>
           <Text>
            google
            </Text>
           </Button>

           <Button style={styles.twitter} onPress={() => {this.twitSignIn()}}>
           <Text>
            twitter
            </Text>
           </Button>
           
           <Text>
             {(this.props.user.name) || 23}
           </Text>
         </View>
        );
      }
    }