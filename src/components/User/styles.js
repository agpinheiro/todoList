import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 150,
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
  },
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 200

  },
  textUserContainer: {
    marginLeft: 10,
    maxWidth: 200


  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 39
  },
  tittle: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#000'
  },
  login: {
    fontSize: 12,
    color: '#333'
  },
  containerButtons: {
    flex: 1,
  },
  favoriteButton: {
    height: 30,
    width: '90%',
    backgroundColor: '#04d361',
    justifyContent: "center",
    borderRadius: 5,
  },
  deleteButton: {
    height: 30,
    width: '90%',
    backgroundColor: '#e33d3d',
    marginTop: 75,
    justifyContent: "center",
    borderRadius: 5,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: '#fff',
    textAlign: "center"
  },

})

export default styles;
