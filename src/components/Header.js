import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Header({title}){//Seria a mesma coisa que receber uma props
    return(
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        backgroundColor: '#3db7d9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10, 
    },
    title:{
        color: '#fff',
        fontSize: 30,
        marginTop: 18,
    }
});

export default Header;