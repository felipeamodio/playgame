import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function Index(){
    return(
        <>
        <View>
        <Image 
            style={estilo.img} 
            source={require('./imgs/controle.png')} />
        <Text style={estilo.deco}>Bem-vindo ao PlayGame</Text>
        
        
        </View>
        </>
    )
}

const estilo = StyleSheet.create({
    deco:{
        color: '#FFFFFF',
        fontSize: 30,
        marginBottom: 40,
        marginTop: 5,
    },
    img: {
        width: 140,
        height: 100,
        alignItems: "center",
        marginLeft: 90,
    }
});