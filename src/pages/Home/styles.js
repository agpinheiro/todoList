import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6f0',
    marginTop: -20
  },
  containerHeader: {
    width: '100%',
    height: '25%',
    backgroundColor: '#333',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 10,
    textAlign:"center",
    fontWeight: "bold"
  },
  containerInput: {
    flexDirection: "row",
    },
  buttonInput: {
    width: '25%',
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    borderRadius: 5
  },
  textInput: {
    backgroundColor: '#fff',
    width: '60%',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  textButton: {
    color: '#fff'
  },
  scroll:{
    marginTop: 10
  }
})

export default styles;
