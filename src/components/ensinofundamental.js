import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Fundamentalensio(props){
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

//antigo : height 110 , width: 350

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#fff',
        height: 230,
        width: 370,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    cover:{
        width: 350,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        color: '#5e17eb'
    },
    description:{
        fontSize: 12,
    }


});