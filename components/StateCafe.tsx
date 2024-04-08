import React, { useState } from "react";
import {Button, View, Text, Image} from "react-native"

type CatProps = {
    name: string;
};

const Cat =(props: CatProps) =>{
    const [isHungry, setIsHungry] = useState(true);
    return(
        <View>
        <Text>
            Yo soy {props.name}, y Yo estoy {isHungry ? 'con hambre': 'lleno'}
        </Text>

        <Button 
        onPress={() =>{
            setIsHungry(false);
        }}
        title={isHungry ? 'Sirveme un poco de leche, por favor': 'gracias!!'}/>
        </View>
    );
}