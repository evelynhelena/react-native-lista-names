import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

function DataLines(props) {
    return (
        <View style={styles.line}>
            <Text>{props.label}</Text>
            <Text>{props.data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line:{
      paddingTop: 3,
      padding: 10,
      paddingBottom: 3,
      borderWidth: 2,
      borderColor: '#ddd',
      marginTop:10,
    }
  })

export default DataLines
