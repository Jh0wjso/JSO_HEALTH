import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./style";

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é de: " + props.ResultIMC,
    });
  };

  return (
    <View style={styles.resultIMC}>
      <View style={styles.boxShareButton}>
        <Text style={styles.information}>{props.messageResultIMC}</Text>
        <Text style={styles.numberImc}>{props.ResultIMC}</Text>
        {props.ResultIMC != null ? (
          <TouchableOpacity onPress={onShare} style={styles.shared}>
            <Text style={styles.sharedText}>Compartilhar</Text>
            <Ionicons name="send-outline" size={25} color="#F8F8FF" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}
