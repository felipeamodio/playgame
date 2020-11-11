import React from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function Form(){
    return(
        <>
            <Text style={estilo.txt}>Faça seu Login para entrar</Text>

            <View>
                <TextInput style={estilo.login} placeholder="Login"/>
            </View>

            <View>
                <TextInput style={estilo.senha} secureTextEntry={true} placeholder="Password" />
            </View>

            <View>
                <TouchableOpacity style={estilo.botao}>
                    <Text style={estilo.txtB}>Let's Go</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={estilo.forgetPassword}>Esqueceu a senha?</Text>
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    txt: {
        color: '#FFFFFF',
        marginBottom: 30,
    },
    login: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        width: 300,
        height: 40,
        marginTop: 20,
        borderRadius: 20,
    },
    senha: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        width: 300,
        height: 40,
        marginTop: 16,
        borderRadius: 20,
    },
    botao: {
        backgroundColor: '#00FF7F',
        padding: 10,
        width: 300,
        height: 40,
        marginTop: 10,
        borderRadius: 20,
    },
    txtB: {
        color: '#000',
        fontWeight: "bold",
        textAlign: "center",
    },
    forgetPassword: {
        color: '#FFFFFF',
        fontWeight: "700",
        marginTop: 9,
    }
})