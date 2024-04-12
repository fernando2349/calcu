import { Pressable, Text, View} from "react-native";
import { colors, styles } from "../config/theme/app-theme";
import { CalculatorButton } from "../components/CalculatorButton";
import { useCalculator } from "../hooks/useCalculator";

export const CalculatorScreen = () =>{
    const {
        number,
        prevNumber,
        buildNumber,
        toggleSing,
        clean,
        deleteOperation,
        divideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculateResult,
        formula,
    } = useCalculator();


    return(
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 25, paddingBottom: 15}}>
            <Text adjustsFontSizeToFit 
            numberOfLines={1} 
            style={styles.mainResult}>{formula}</Text>
            
            <Text 
            adjustsFontSizeToFit 
            numberOfLines={1} 
            style={styles.subResult}>
            {(prevNumber ==='0') ? '':prevNumber}</Text>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={clean} blackText label="C" color={colors.lightGray}/>
            <CalculatorButton onPress={toggleSing} blackText label="+/-" color={colors.lightGray}/>
            <CalculatorButton onPress={deleteOperation} blackText label="Del" color={colors.lightGray}/>
            <CalculatorButton onPress={divideOperation} label="÷" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>buildNumber('7')} label="7" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>buildNumber('8')} label="8" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>buildNumber('9')} label="9" color={colors.lightGray}/>
            <CalculatorButton onPress={multiplyOperation} label="*" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>buildNumber('4')} label="4" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>buildNumber('5')} label="5" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>buildNumber('6')} label="6" color={colors.lightGray}/>
            <CalculatorButton onPress={subtractOperation} label="-" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>buildNumber('1')} label="1" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>buildNumber('2')} label="2" color={colors.lightGray}/>
            <CalculatorButton onPress={() =>buildNumber('3')} label="3" color={colors.lightGray}/>
            <CalculatorButton onPress={addOperation} label="+" color={colors.orange}/>
            </View>

            <View style={styles.row}>
            <CalculatorButton onPress={() =>buildNumber('0')} label="0" color={colors.lightGray} doubleSize/>
            <CalculatorButton onPress={() =>buildNumber('.')} label="." color={colors.lightGray}/>
            <CalculatorButton onPress={calculateResult} label="=" color={colors.orange}/>
            </View>
        </View>
        
    )
}