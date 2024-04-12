import { useState } from "react";

export const useCalculator = () =>{
    //

    //hooks
    const [number, setNumber] = useState('0');

    const clean = () =>{
        setNumber('0');
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
    }

    const togglesign = () =>{
        if (number.includes('-')){
            return setNumber(number.replace('-',''));
        }
        setNumber('-' + number);
    };


    const buildNumber = (numberString : string) =>{

    if (number.includes('.')&& numberString === '.'){
       return; 
    } 
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
    }
 


    //return

    return{
        number,

        buildNumber,
        togglesign,
        clean,
        deleteOperation,
    };
};