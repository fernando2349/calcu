import React from "react";
import {View, Text, Image, ScrollView, TextInput} from "react-native"

const Cat = ()=> {
    return(
        <ScrollView>
            <Text>Cats</Text>
            <View>
                <Text>El mundo de los gatos</Text>
                <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cats2.png',}} style={{width: 200, height: 200}}/>
            </View>

            <TextInput style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,

            }}
            defaultValue="presiona aca"
            />

        </ScrollView>
    )
}

export default Cat