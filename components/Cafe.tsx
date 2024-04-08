import React from "react";
import {View, Text, Image} from "react-native"

type CatProps ={
    name: string;
}

const Cat = (props: CatProps) => {
    return(
        <View>
            <Text>Hola, yo soy {props.name}</Text>
        </View>
    ) 
}

const Cafe = ()  => {
    return(
        <View>
        <Cat name="Maru"/>
        <Cat name="Jelllylorum"/>
        <Cat name="Spot"/>
        </View>
    )
}

export default Cafe