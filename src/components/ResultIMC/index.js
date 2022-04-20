import React from "react";
import {View, Text, Share, TouchableOpacity} from "react-native";
import styles from "./style";

export default function ResultIMC(props){

    const onShare = async() => {
        const result = await Share.share({
            message: "Meu imc hoje é de: "+ props.ResultIMC,
        })
    }

    return(
        <View style={styles.resultIMC}>
            <View style={styles.boxShareButton}>
                {
                    props.ResultIMC != null ?
                    <TouchableOpacity
                    onPress={onShare} 
                    style={styles.shared}>
                        <Text style={styles.sharedText}>Compartilhar</Text>
                    </TouchableOpacity>
                    :
                    <View></View>
                }
            </View>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberImc}>{props.ResultIMC}</Text>
            
        </View>
    );
}