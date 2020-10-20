import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '82%',
    backgroundColor: '#fff',
    margin: 20,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,

  },
  avatar: {
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 5
  },
  info:{
    borderTopWidth: 0.4,
    margin: 24,
    maxWidth: '100%',
    padding: 20,
    alignItems: "flex-start"
  },
  textInfoContainer:{

    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    flexDirection: "row",
    padding: 5,
    borderRadius: 5

  },
  textBold:{
    fontSize: 18,
    fontWeight: "bold",

  },
  textInfo:{
    marginLeft: 5,
    fontSize: 18,
  },

})

export default styles;
