import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, ImageBackground } from "react-native";
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
    let img = 'https://img.lovepik.com/png/20231120/google-internet-icon-vector-Google-system-engineer_642910_wh860.png'
    let logo ='https://i.pinimg.com/originals/3b/3a/6a/3b3a6a676a48c1479468744d1c8134da.jpg'
    return (
      <View>
        <ImageBackground 
          source={{uri: 'https://img.freepik.com/fotos-premium/papel-de-parede-movel-com-padrao-roxo-gradiente_53876-1087015.jpg?semt=ais_hybrid&w=740&q=80'}}
          style={styles.fundo}
          resizeMode="cover">
          
        
        <View>
          <Text style={{textAlign:'center',fontSize:50,color:'lightblue'}}> Quem é você ? </Text>
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
          <TouchableOpacity style={styles.butao} onPress={this.Logar}>
            <Image source={{ uri: img}} style={{width: 40, height: 40, margin:13}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butao} onPress={this.Logar}>
            <Image source={{ uri: logo}} style={{width: 50, height: 50, margin:10}}/>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
      
    );
  }
}
//----------------------------------------------------------------------

//propriedades css ultilizadas em tags
const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    margin:30,
    padding: 20,
    alignItems: 'center',
    marginTop: 80,
    justifyContent:'center'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'white',
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
    borderRadius:5,
    height:35,
    width:70
    

  },
  login:{
    marginTop:'70%', 
    backgroundColor:'#cf9bcc',
    width:'60%', 
    alignItems:'center', 
    borderRadius:10,

  },
  fundo:{
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%'

  }
});

export default App;
