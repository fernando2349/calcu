import { useState } from "react";

export const useCalculator = () =>{
    //

    //hooks
    const [number, setNumber] = useState('0');


    const buildNumber = (numberString : string) =>{



        setNumber(number + numberString);
    }

    //return

    return{
        number,
        buildNumber,
    };
};