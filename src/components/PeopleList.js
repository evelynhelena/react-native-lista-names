import React from 'react';
import {View, Text} from 'react-native';

function PeopleList(props){
    if(props.people.length !== 0){
        const textElements = props.people.map((person, index) => {
          return <Text key={index}> {index} - {person.name.first}</Text>
        });
        return (
            <View>
                {textElements}
            </View>
        );
      }else{
          return <Text>Carregando...</Text>
      }
    }

export default PeopleList;