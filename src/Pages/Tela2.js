import React, {useEffect, useState} from 'react';
import {ScrollView, View, } from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default function Tela2() {

  const [people,setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=2&nat=br').then(response => {
      setPeople(response.data.results) 
    }).catch(error =>{
      console.log('Ocorreu um erro - ' + error);
    });
  }, []);

  return (
    
      <View>
        <ScrollView>
          <PeopleList people={people}></PeopleList>
        </ScrollView>
      </View>
   
  );
}
