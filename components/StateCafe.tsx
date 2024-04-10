import React, { useState } from "react";
import { View, Text} from "react-native";
import { Button } from "react-native";

type CatProps = {
    name: string;
};

const Cat =(props: CatProps) =>{
    const [isHungry, setIsHungry] = useState(true);
    return(
        <View>
        <Text>
            Yo soy {props.name}, y Yo estoy {isHungry ? "con hambre" : "lleno"}
        </Text>

        <Button 
        onPress={() : void =>{
            setIsHungry(false);
        }}
        disabled={isHungry}
        title={isHungry ? "Sirveme un poco de leche, por favor" : "gracias!!"}/>
        </View>
    );
}

const StateCafe = () =>{
    return(
        <>
        <Cat name="munkustrap"/>
        <Cat name="Spot"/>
        </>
    )
}

export default StateCafe