import { Pressable, Text } from "react-native";
import { styles } from "../config/theme/app-theme";


interface Props{
    label: string;
}
export const CalculatorButton = ({label,}:Props) =>{
    return(

        <Pressable style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
    )
}