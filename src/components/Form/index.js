import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable} from "react-native";
import ResultIMC from "../ResultIMC/";
import styles from "./style";

export default function Form(){

    const[height, setHeight] = useState(null);
    const[weight, setWeight] = useState(null);
    const[messageImc, setMessageIMC] = useState("Preencha o peso e a altura!");
    const[imc, setIMC] = useState(null);
    const[textButton, setTextButton] = useState("Calcular");
    const[errorMessage, setErrorMessage] = useState(null);

    function imcCalculator(){
        let heightFormat = height.replace(",", ".")
        let weightFormat = weight.replace(",", ".")
        return setIMC((weightFormat/(heightFormat*heightFormat)).toFixed(2)) 
    }



    function verificationImc(){
        if( imc == null){
            Vibration.vibrate();
            setErrorMessage("Este campo é obrigatório*")
        }
    }

    function verifyIMC(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setTextButton("Calcular novamente")
            setMessageIMC("Seu imc é de: ")
            setErrorMessage(null)
            return
        }

        setIMC(null)
        setTextButton("Calcular")
        setMessageIMC("PREENCHA O PESO E A ALTURA!")
        verificationImc()

    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>  { errorMessage } </Text>
                <TextInput style={styles.input}
                onChangeText={ setHeight }
                value = { height }
                placeholder="EX. 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>  { errorMessage } </Text>
                <TextInput style={styles.input}
                onChangeText={ setWeight }
                value = { weight }
                placeholder="EX. 80.125"
                keyboardType="numeric"
                ></TextInput>
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => verifyIMC()}>
                    <Text style={styles.textButtonCalculator}>
                        { textButton }
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={messageImc} ResultIMC={imc}></ResultIMC>
        </Pressable>
    );
}