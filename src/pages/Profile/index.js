import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ProfileUser from '../../components/ProfileUser';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

const Profile = (props) => {

  const { navigate } = useNavigation();

  function hangleGoBack() {
    navigate('Home');
  }
  return (
  <View style={styles.container}>
    <View style={styles.containerHeader}>
         <TouchableOpacity onPress={hangleGoBack} style={styles.backButton}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.tittle}>Perfil</Text>
        <TouchableOpacity >

        </TouchableOpacity>
      </View>
    <ProfileUser
      profile={props}
    />
  </View>
  );
}

export default Profile;
