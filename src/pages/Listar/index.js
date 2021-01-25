import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api'


export default function Sobre() {
  const [error, setError] = useState();
  const [id, setId] = useState();
  const [board, setBoard] = useState({});

  const getData = async () => {
    try { 
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        setId(value)
      }
    } catch (e) {
      
    }
  }

  function getBoard() {
    setBoard('')
    setError('')
    getData() 
    api.get(`1/boards/${id}`)
      .then(response => setBoard(response.data, setError(''))).
      catch(error => {
        setError(error.message)
        setBoard('')
      });
  }
  return (
    <View style={styles.container}>
      <Button
      style={styles.btn}
        title="Visualizar board"
        onPress={getBoard} />
      <Text style={styles.text}>Nome {board.name}</Text>
      <Text style={styles.text}>Id {board.id}</Text>
      <Text style={styles.text}>url {board.url}</Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    marginTop: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 30,
  }
  ,
  btn: {  
   marginBottom: 300
    
  },
});