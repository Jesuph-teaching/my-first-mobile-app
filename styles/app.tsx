import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "lightblue",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    fontSize: 22,
    width: "100%",
    backgroundColor: "#fff",
  },
  inputsView:{
    width: "100%",
    flex:1,
    gap: 20,
  },
  title:{
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    color: "#Ab12FC",
  },
});
export default style;
