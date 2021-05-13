import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function PeopleList({people}) {
  if (people.length !== 0) {
    const textElements = people.map(({login,picture,name}) => {
      return (
        <View key={login.uuid} style={styles.container}>
          <Image source={{uri: picture.medium}} style={styles.photo}/>
          <Text style={styles.text}>{`${name.first} ${name.last}`}</Text>
        </View>
      );
    });
    return (
      <>
        <View>{textElements}</View>
      </>
    );
  } else {
    return <Text style={styles.loanding}>Carregando...</Text>;
  }
}

const styles = StyleSheet.create({
    photo:{
        width: 50,
        aspectRatio: 1,
        marginLeft: 20,
        borderRadius: 50,
        flex: 1,
    },
    container:{
        backgroundColor: '#eee',
        height:80,
        borderBottomColor: '#bbb',
        borderTopColor:'#bbb',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
    },
    text:{
        fontSize: 20,
        paddingLeft: 20,
        flex: 5,
    },

    loanding:{
        fontSize:20,
        color: '#f00',

    }
});

export default PeopleList;
