import React from 'react';
import { View, TouchableOpacity, Image,Text, ScrollView} from 'react-native';

import styles from './styles';

const ProfileUser = (props) => {

  //params rotas
  const user = props.profile.route.params.profileUser;

  return (
    <View style={styles.container}>
      <Image source={{uri: user.avatar_url}} style={styles.avatar} />
      <ScrollView>
      <View style={styles.info}>
        <View style={styles.textInfoContainer}>
          <Text style={styles.textBold}>ID:</Text>
          <Text style={styles.textInfo}>{user.id}</Text>
        </View>

        <View style={styles.textInfoContainer}>
          <Text style={styles.textBold}>Nome:</Text>
          <Text style={styles.textInfo}>{user.name}</Text>
        </View>

        <View style={styles.textInfoContainer}>
          <Text style={styles.textBold}>Login:</Text>
          <Text style={styles.textInfo}>{user.login}</Text>
        </View>

        <View style={styles.textInfoContainer}>
          <Text style={styles.textBold}>Bio:</Text>
          <Text style={styles.textInfo}>{user.bio}</Text>
        </View>

        <View style={styles.textInfoContainer}>
          <Text style={styles.textBold}>Local:</Text>
          <Text style={styles.textInfo}>{user.location}</Text>
        </View>

        <View style={styles.textInfoContainer}>
          <Text style={styles.textBold}>Company:</Text>
          <Text style={styles.textInfo}>{user.company}</Text>
        </View>

        <View style={styles.textInfoContainer}>
          <Text style={styles.textBold}>GitHub:</Text>
          <TouchableOpacity>
            <Text style={styles.textInfo}>{user.html_url}</Text>
          </TouchableOpacity>
        </View>

      </View>
      </ScrollView>
    </View>
  );
}

export default ProfileUser;
