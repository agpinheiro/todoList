import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

const User = (props) => {

  //params rotas
  const profileUser = props.user;

  const { navigate } = useNavigation();

  function handleToProfile() {
    navigate('Profile', {profileUser});
  }

  return (
  <View style={ styles.container}>
    <TouchableOpacity onPress={handleToProfile} style={styles.userButton}>
      <Image style={styles.avatar} source={{uri: props.user.avatar_url}} />
       <View style={styles.textUserContainer}>
        <Text style={styles.tittle}>{props.user.name}</Text>
        <Text style={styles.login}>{props.user.login}</Text>
      </View>
    </TouchableOpacity>

      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={() => props.deleteUsers(props.user.id)} style={styles.deleteButton}>
          <Text style={styles.textButton}>Deletar</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}

export default User;
