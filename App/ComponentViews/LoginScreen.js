import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select_user } from '../redux/actions';
import { Container, Header, Content, Form, Item, Input, Label, Text } from 'native-base';
import { SocialIcon } from 'react-native-elements'
import {
  Platform,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import styles from './Styles/LoginScreenStyle'
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';
import Api from '../Services/Api'





export default class LoginScreen extends Component {
  api = {}
  fbSignIn() {
    facebook({
      appId: '1906030709413245',
      callback: 'fb1906030709413245://authorize',
    }).then((info) => {
      this.props.onLogin(info.user)
      const api = Api.create()
      api.postUserData({ token: info.credentials.id_token, authType: 'facebook' })
      if(this.props.user.name){
        this.props.navigation.navigate('HomeScreenContainer')
      }
    }).catch((error) => {
      this.setState({ user: { error: error } })
    });
  }
  googleSignIn() {
    google({
      appId: '959826721453-9ee4bq4h7uvantvbeoj6da3lr91do8oa.apps.googleusercontent.com',
      callback: 'com.googleusercontent.apps.959826721453-9ee4bq4h7uvantvbeoj6da3lr91do8oa:/oauth2redirect',
    }).then((info) => {
      let obj = {id: info.user.id, name: info.user.name, First_name: info.user.given_name, Last_name: info.user.family_name, verified: info.user.verified_email, email: info.user.email, link: info.user.link, picture: {data:{url: info.user.picture} }}
      this.props.onLogin(obj)
      const api = Api.create()
      api.postUserData({ token: info.credentials.id_token, authType: 'google' })
      if(this.props.user.name){
        this.props.navigation.navigate('HomeScreenContainer')
      }
    }).catch((error) => {
      this.setState({ user: { error: error } })
    });
  }
  twitSignIn() {
    twitter({
      appId: 'QrBPzLNCUKgA4nwIyU22UXbiv',
      appSecret: '1PreBeVwoscQhWAHChNWsIBwEtjvExqHim25AmI6GnzE6iV2XT',
      callback: 'adventuretime2://authorize',
    }).then((info) => {
      this.props.onLogin(info.user)
      if (this.props.user.name) {
        this.props.navigation.navigate('HomeScreen')
      }
    }).catch((error) => {
      this.setState({ user: { error: error } })
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity>
          <Button
            title='Sign In With Facebook'
            style={{ backgroundColor: 'blue' }}
            onPress={() => { this.fbSignIn() }}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Button
            title='Sign In With Google'
            style={{ backgroundColor: 'red' }}
            onPress={() => { this.googleSignIn() }}
          />
        </TouchableOpacity>
      </View>

    )
  }
}