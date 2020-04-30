import React from 'react'
import {View, Text , Button} from 'react-native'


export default function Login( {navigation} ) {
    return (
        <View>
            <Text>
                inicio
            </Text>
            <Button title="Inicio"
            onPress= {() => navigation.navigate('Inicio', { estado: 'sucesso'}) } />
        </View>


    )

}