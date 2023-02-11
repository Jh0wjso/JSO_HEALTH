import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#F8F8FF",
    alignItems: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  formLabel: {
    color: "#008B8B",
    fontSize: 35,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#008B8B",
    height: 50,
    marginHorizontal: 12,
    paddingLeft: 10,
    color: "#F8F8FF",
    fontWeight: "bold"
  },

  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#008B8B",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
  },

  errorMessage: {
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 20,
    color: "red",
  },

  textButtonCalculator: {
    fontSize: 20,
    color: "#F8F8FF",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
