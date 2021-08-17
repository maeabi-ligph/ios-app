import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, TextInput, Image, Button, TouchableOpacity } from 'react-native';
// import Hello from './Hello';
import { validate } from './utils/tools'
import { keys } from 'lodash'
import styles from './assets/css/style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      error: {},
      data: {
        email: '',
        password: ''
      }
    }
  }   

  handleInputChange(key, value) {
    const { 
      data: prevData, 
      error: prevError 
    } = this.state

    const data = { ...prevData, [key]: value }    
    const error = validate(data, prevError, key)

    this.setState({ data, error })
  }

  handleFormSubmit() {
    const { 
      data: prevData, 
      error: prevError 
    } = this.state

    const error = validate(prevData, prevError)

    this.setState({ error }, () => {
      if (!keys(error).filter(key => error[key]).length)
        Alert.alert('Login is successful!')
    })
  } 

  render() { 
    const { error } = this.state
    const isDisabled = !!keys(error).filter(key => error[key]).length
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('./assets/img/logo.png')} style={styles.img}/> 
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}         
          underlineColorAndroid='transparent'
          keyboardtype='email-address'
          placeholder='Input Username'
          onChangeText={ this.handleInputChange.bind(this, 'email')}
        />
        <View style={styles.lblContainer}>  
          <Text style={styles.errorLabel}>{ error.email }</Text>               
        </View> 

        <Text style={styles.label}>Password</Text>        
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Input Password'        
          underlineColorAndroid='transparent'
          onChangeText={ this.handleInputChange.bind(this, 'password')}       
        /> 
        <View style={styles.lblContainer}>
          <Text style={styles.errorLabel}>{ error.password }</Text>
        </View> 

        <TouchableOpacity
          style={isDisabled?styles.btnDisable:styles.btnSubmit}          
          activeOpacity = { .5 }
          onPress={this.handleFormSubmit.bind(this)}
          disabled={isDisabled}
       > 
          <Text style={styles.lblSubmitBtn}> Sign In </Text>            
        </TouchableOpacity>
      </ScrollView>
    );
  }
}


class Hello extends React.Component{
	render(){
		return (
			<View>
			<Text> Hello from Hello.js haha.</Text>
			</View>
			)
	}
}