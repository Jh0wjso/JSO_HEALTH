import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultIMC:{
        flex:1,
        marginTop: 20,
        paddingTop: 60,
        alignItems: "center",
        width: "100%",
    },
    information:{
        fontSize: 20,
        fontWeight:"bold",
        color:"black"
    },
    numberImc:{
        fontSize: 50,
        fontWeight:"bold",
        color:"black"
    },
    boxShareButton:{
        width:"100%",
        alignItems: "center",
        marginTop: -50,
        marginBottom: 10
    },
    shared:{
        backgroundColor: "black",
        borderRadius: 50,
        padding: 10
    },
    sharedText:{
        color: "yellow",
        fontWeight: "bold"
    }
});

export default styles;