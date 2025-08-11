import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";

class App extends Component {
  clicar = () => {
    alert("Botão clicado!");
  }

  render() {
    let nome = "mateus";
    let img = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60";

    return (
      <View>
        <Text style={{ color: 'red', fontSize: 12, margin: 12 }}>ola mundo</Text>
        <Text>{nome}</Text>

        <Text style={estilo.texto}>hallo word</Text>
        <Text style={estilo.area}>Área com margem</Text>

        <Image source={{ uri: img }} style={{ width: 100, height: 100 }} />

        <Button title="clicar" onPress={this.clicar} />
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  area: {
    marginTop: 40
  },
  texto: {
    fontSize: 25,
    color: '#FF0000'
  },
  fundo: {
    textAlign: 'center',
    backgroundColor: '#99CC32'
  }
});

export default App;
