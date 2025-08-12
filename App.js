import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
//----------------------------------------------------------------------

class App extends Component {
//construtor que vai inciar a funçao state

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
    this.Entrar = this.Entrar.bind(this)
  }

  pegaNome(texto) {
    if (texto.length > 0) {
      this.setState({ nome: 'Email ' + texto + ' registrado!'});
    } else {
      this.setState({ nome: '' });
    }
  }

  Entrar = () => {
    let nomePessoa = this.state.input;
    if(this.state.input == ''){
      alert('%VALOR INVALIDO%');
      return;
    } else {
      this.setState({nome: 'email ' + nomePessoa + ' registrado'});
      return;
    }
    

  }

  Logar = () =>{
    alert('ERRO! tente novamente mais tarde')
  }
//----------------------------------------------------------------------

//estrutura principal do app
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{textAlign:'center',fontSize:50,color:'lightblue'}}> Quem é você </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email:"
            onChangeText={(texto) => this.setState({input: texto})}
          />

          <Button title="entrar" onPress={this.Entrar} />
          <Text style={styles.texto}>{this.state.nome}</Text>
          


        </View>
        <View style={styles.login}>
          <Text style={{fontSize:18}}>Login</Text>
          
        </View>

        <View style={styles.formas}>
          <Button title="google" onPress={this.Logar}/>
          <Button title="numero" onPress={this.Logar}/>
        </View>

      </View>
      
    );
  }
}
//----------------------------------------------------------------------

//propriedades css ultilizadas em tags
const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    margin:10,
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent:'space-between'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'green',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius:20
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  },
  formas: {
    alignItems:'center',
    justifyContent:'space-between',
    textAlign: 'center',
    marginTop:10,
    flexDirection:'row',
    gap:20

  },
  butao:{
    borderRadius:10

  },
  login:{
    marginTop:50, 
    backgroundColor:'lightblue',
    width:'100%', 
    alignItems:'center', 
    borderRadius:10,
    fontSize:50
  }
});

export default App;
