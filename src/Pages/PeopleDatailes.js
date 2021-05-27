import React  from 'react';
import {ScrollView, View,Image,StyleSheet} from 'react-native';
import DataLines from '../components/DataLines';


export default function PeopleDatailes({route}) {
  const {person} = route.params;
  return(
    <ScrollView>
      <View style={styles.container}>
        
          <Image source={{uri: person.picture.large}} style={styles.photo}/>
          <DataLines label="Email: " data={person.email} />
          <DataLines label="Ciade: " data={person.location.city} />
          <DataLines label="Estado: " data={person.location.state} />
          <DataLines label="Telefone: " data={person.phone} />
          <DataLines label="Celular: " data={person.cell} />
          <DataLines label="Nacionalidade: " data={person.nat} />
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  photo:{
    aspectRatio: 1,
    borderRadius: 500,
  },
  container:{
    padding:15,
  }
})
