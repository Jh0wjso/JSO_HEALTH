import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultIMC:{
        flex:1,
        paddingTop: 30,
        alignItems: "center",
        width: "100%",
    },
    information:{
        fontSize: 22,
        fontWeight:"bold",
        color:"#008B8B"
    },
    numberImc:{
        fontSize: 50,
        fontWeight:"bold",
        color:"#008B8B"
    },
    boxShareButton:{
        width:"100%",
        alignItems: "center",
        marginTop: -50,
        marginBottom: 10
    },
    shared:{
        backgroundColor: "#008B8B",
        borderRadius: 7,
        padding: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    sharedText:{
        color: "#F8F8FF",
        fontWeight: "bold",
        marginRight: 15
    }
});

export default styles;