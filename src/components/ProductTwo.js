import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ProductTwo(props){
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image
            source={props.cover}
            style={styles.cover}
            />
            <View>
                <Text style={styles.title}>{props.name}</Text>
            </View>

            <View>
            </View>

            <View>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#fff',
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    cover:{
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    title:{
        fontWeight: 'bold',
        color: '#5e17eb'
    },
    description:{
        fontSize: 12,
    }


});