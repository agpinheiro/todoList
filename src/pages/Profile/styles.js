import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6f0'
  },
  containerHeader: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favoriteButton: {
    height: 40,
    width: 80,
    backgroundColor: '#04d361',
    justifyContent: "center",
    borderRadius: 5,
  },
  backButton: {
    height: 40,
    width: 80,
    backgroundColor: '#000',
    justifyContent: "center",
    borderRadius: 5,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff',
    textAlign: "center"
  },
  tittle: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000'
  },
})

export default styles;
