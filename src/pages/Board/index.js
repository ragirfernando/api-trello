import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api'


export default function Board() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const prefs_permissionLevel = 'public'
  const token = '667baecaaaa46317d13615da8eee8681cc8439bfd8bf660fe6f6dbbe17c1d3a2';
  const key = '8ee20b698c72895308e26039858f8007';


  const storeData = async (value) => {
    
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

  

  

  function postBoard() {
    if (name.length > 0 && desc.length > 0 ) {
      api.post(`1/boards/?key=${key}&token=${token}&name=${name}&prefs_permissionLevel=${prefs_permissionLevel}`)
        .then(function (response) {
          alert("Board criado com sucesso")
          storeData(response.data.id)
        })
        .catch(function (error) {
          alert(error.message)
        });
        setName('');
        setDesc('');
    }else{
      alert("Por favor, preencha todos os campos.")
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text} >Preencha os campos para criar um novo Board</Text>
      <TextInput style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(texto) => setName(texto)}
      />

      <TextInput style={styles.input}
        placeholder="Descrição"
        value={desc}
        onChangeText={(texto) => setDesc(texto)}
      />

      <Button
        title="Criar novo board"
        onPress={postBoard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  }
  ,
  input: {
    margin: 15,
    width: 400,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
});