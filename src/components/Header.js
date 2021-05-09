import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Header(props){
    return(
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>
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
    }
});

export default Header;