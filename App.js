import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      username:"",
      Password:""
    
    }
  }
  render(){
    return (
      <View style={styles.container}>
        
      <View>
      <Text style={styles.loginText} >Log in</Text>
      </View>
       
    <View style={styles.inputContainer}>
      <TextInput style={styles.input}
      placeholder="Username"
      autoCapitalize="none"
      autoCorrect={false}
      value={this.state.email}
      onChangeText={(email)=>{
        this.setState({email})
      }}
      />

      <TextInput style={styles.input}
      placeholder="Password"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      value={this.state.password}
      onChangeText={(password)=>{
        this.setState({password})
      }}
      />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
    </View>
        
    <View>
        <TouchableOpacity style={styles.opacity}>
           <Text style={styles.opacityText}>Log in</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.accountContainer}>
      <Text style={styles.accountText}>Don't have account?</Text>
      <Text style={styles.signUp}>Sign up</Text>
    </View>
        
        
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:80,
    marginHorizontal:70,
    
  },
  loginText: {
    fontSize:40,
    color:"#5669cc",
    marginVertical:20
  },
  
  input: {
    borderBottomWidth:2,
    borderColor:"#5669cc",
    marginTop:60,
    fontSize:20,
    paddingBottom:5,
    
  },
  forgotPassword:{
    color:"#5fcaed",
    alignSelf:"flex-end",
    paddingTop:8
  },
  opacity: {
    backgroundColor:"#5669cc",
    width: 200,
    height:40,
    alignSelf:"center",
    borderRadius:10,
    marginVertical:40
  },
  opacityText: {
    color:"white",
    fontSize:25,
    alignSelf:"center",
    paddingVertical:2

  },
  accountContainer:{
   flexDirection:"row",
   alignSelf:"center",
  },
  accountText:{
    fontSize:18,
  },
  signUp:{
    fontSize:18,
    color:"#5669cc",
    marginLeft:5
  }
});

export default App;
