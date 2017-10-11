import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text  } from 'native-base';
import {
    Platform,
    View,
    Image
  } from 'react-native';
  
import styles from './Styles/LoginScreenStyle'



export default class LoginScreen extends Component{
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Image style={styles.container} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-8RJLC9lsUSknRIv3MBy6bsoUgDiSH3EKWKu06vHYHfotJf5Jw'}} resizeMode="contain" >
          <Container>
            <Header />
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                  
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
                
              </Form>
              <Button full onPress={() =>
          navigate('HomeScreen')
        }>
            <Text>Login</Text>
          </Button>
            </Content>
          </Container>
          </Image>
        );
      }
    }


