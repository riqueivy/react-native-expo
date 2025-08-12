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
      this.setState({ nome: 'Bem vindo ' + texto });
    } else {
      this.setState({ nome: '' });
    }
  }

  Entrar = () => {
    alert('digite seu nome !')

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
            placeholder="Digite seu nome:"
            onChangeText={this.pegaNome}
          />

          <Button title="entrar" onPress={this.Entrar} />
          <Text style={styles.texto}>{this.state.nome}</Text>
          


        </View>

        <View style={styles.login}>
          <Text>login</Text>
          <Button title="google"/>
          <Button title="email"/>
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
  login: {
    alignItems:'center',
    justifyContent:'flex-end',
    textAlign: 'justify',
    backgroundColor:'red',
    marginTop:'auto'

  },
  butao:{
    borderRadius:10

  }
});

export default App;
