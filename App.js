import React, {useEffect, useState} from 'react';
import {Text, View } from 'react-native';
import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';
import axios from 'axios';

export default function App() {

  const [people,setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5&nat=br').then(response => {
      setPeople(response.data.results) 
      console.log(response.data.results)
    }).catch(error =>{
      console.log('Ocorreu um erro - ' + error);
    });
  }, []);

  return (
    <View>
      <Header title="Lista de Usuário"></Header>
      <PeopleList people={people}></PeopleList>
    </View>
  );
}
