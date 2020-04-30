import React from 'react'
import {View, Text } from 'react-native' 

export default function Inicio({route}) {
    return (
        <View>
            <Text>TesteInicio {route.params.estado} </Text>
        </View>
    )

}