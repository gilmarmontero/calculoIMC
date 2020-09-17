import React from 'react';
import { StyleSheet,  Text,  TextInput,  TouchableOpacity,  View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,result:0,resultText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){

   let imc = this.state.massa / (this.state.altura * this.state.altura)

   let s = this.state

   s.result = imc

   
    if (s.result < 18.5){
     s.resultText ='Magreza'
    }
    else if (s.result > 18.5 && s.result < 24.9) {
     s.resultText ='Normal'
    }
    else if (s.result > 25 && s.result < 29.9) {
     s.resultText ='Sobrepeso I'
    }
    else if (s.result > 30 && s.result < 39.9) {
     s.resultText ='Obesidade Grau II'
    }
    else if (s.result > 40) {
      s.resultText ='Obesidade grave III'
    }
   
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.result.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:24}]}>{this.state.resultText}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:34,
  },
  button:{
   backgroundColor:"#FFD700",
  },
  buttontext:{
    textAlign:"center",
    padding:15,
    fontSize:35,
    fontWeight:'bold',
    color:"#0000CD",
  },
  resultado:{
    alignSelf:"center",
    color:"#B22222",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },
});