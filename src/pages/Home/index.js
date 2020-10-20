import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import User from '../../components/User';
import api from '../../services/api';

import styles from './styles';

const Home = () => {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const storage = await AsyncStorage.getItem("userKey");
        if (storage) {
          setUsers([...JSON.parse(storage)]);
        }
    }
    loadUsers();
  },[]);

  async function handleAddUsers() {
    const response = await api.get(`users/${newUser}`);
    if(response !== null) {
      const user = response.data;

    setUsers([...users, user]);
    setNewUser('');
     }
     saveUsers();
   }

  function handleRemoveUsers(id) {
    setUsers(users.filter((user) => user.id !== id));
    saveUsers();
  }
  async function saveUsers() {
    if(users !== null){
   await AsyncStorage.setItem("userKey", JSON.stringify(users));
    console.log("Salvo");
    }
  }

  return (
  <>
    <View style={styles.containerHeader}>
      <Text style={styles.title}>Adicione Usuários do GitHub</Text>
      <View style ={styles.containerInput}>
        <TextInput
        style={styles.textInput}
        placeholder= 'Digite aqui'
        value={newUser}
        onChangeText={(text) => setNewUser(text)}

        />
        <TouchableOpacity
          onPress={handleAddUsers}
          style={styles.buttonInput}
          >
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.container}>
      <ScrollView style={styles.scroll} >
        {users.map(user => {
         return (
         <User
          key={user.id}
          user={user}
          deleteUsers={() => handleRemoveUsers(user.id)}
          />
          );
        })}
      </ScrollView>
    </View>
  </>
  );
}

export default Home;
