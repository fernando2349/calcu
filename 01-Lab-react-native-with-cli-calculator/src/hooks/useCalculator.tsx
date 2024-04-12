import { useEffect, useRef, useState } from "react";

enum Operator{
    add = '+',
    subtract ='-',
    multiply ='x',
    divide ='÷',
}


export const useCalculator = () =>{
    //hooks
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState ('0');
    const [formule, setFormule] = useState('');
    const  lastOperation = useRef<Operator>();

    useEffect(() =>{
        if (lastOperation.current){
            const firstFormulaPart = formule.split('').at(0);
            setFormule(`${firstFormulaPart} ${lastOperation.current} ${number}`)      
        }else{
            setFormule(number);
        }
    }, [number]);

    useEffect(() =>{
        const subResult = calculatorSubResult();
        setPrevNumber(`${subResult} `)
    }, [formule]);



    const clean = () =>{
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormule('');
    };

    const deleteOperation = () =>{
        let currenSign = '';
        let temporalnumber = number;

        if(number.includes('-')){
            currenSign = '-';
            temporalnumber = number.substring(1);
        }
        if(temporalnumber.length>1){
            return setNumber(currenSign + temporalnumber.slice(0, -1))
        }
        setNumber('0');
    };

    const togglesign = () =>{
        if (number.includes('-')){
            return setNumber(number.replace('-',''));
        }
        setNumber('-' + number);
    };

    const buildNumber = (numberString : string) =>{

    if (number.includes('.')&& numberString === '.') return; 
    if(number.startsWith('0') || number.startsWith('-0')){
        //punto decimal
        if (numberString ==='.'){
            return setNumber(number + numberString);
        }
        // Evaluar si es otro cero y no hay punto
        if (numberString === '0' && number.includes('.')){
            return setNumber(number + numberString);
        }
        //Evaluar si es diferente de cero, no hay punto, y si es el primer numero
        if (numberString !=='0' && !number.includes('.')){
            return setNumber(numberString);
        }
        //Evitar 0000000
        if (numberString ==='0'&& !number.includes('.')){
            return;
        }
        return setNumber(number + numberString);
    }
    setNumber(number + numberString);
    };

    const setLastNumber = () =>{
        calculateResult();

        if (number.endsWith('.')){
            setPrevNumber(number.slice(0,-1));
        }else{
            setPrevNumber(number);
        }
        setNumber('0')
    };

    //Operaciones Aritmeticas 
    const divideOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const multiplyOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };

    const addOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.add;
    };

    const subtractOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };

    const calculateResult = () =>{
    const result = calculatorSubResult();
    setFormule(`${result} `);
    lastOperation.current = undefined;
       setPrevNumber('0')
    };

    const calculatorSubResult = () =>{
        const [firstValue, operation, secondValue] = formule.split('')
        
        const num1 = Number( firstValue );
        const num2 = Number( secondValue ); //NaN

        if ( isNaN( num2 ) ) return num1;
        switch (operation){
            case Operator.add:
                return num1 + num2;
                
            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            default:
                //throw new Error( 'Invalid Operation' );
        }
    }

    




    //return

    return{
        number,
        prevNumber,
        setLastNumber,
        formule,

        buildNumber,
        togglesign,
        clean,
        deleteOperation,
        divideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculateResult,
    };
};