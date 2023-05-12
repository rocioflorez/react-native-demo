import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Image, useWindowDimensions } from 'react-native';
import { fetchUsers } from '../api/userApi';

import styles from '../styles/styles';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
    });
  }, []);

  const { width, height } = useWindowDimensions();

  const ListItem = ({ item }) => (
    <View style={[styles.userCard, {width: cardWidth}]}>
      <Image style={styles.image} source={{ uri: item.avatar_url }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login: {item.login}</Text>
        <Text style={styles.text}>User Id: {item.id}</Text>
      </View>
    </View>
  );

  const cardWidth = width < 450 ? 300 : 600; 

  return (
    <View style={[styles.container, styles.userContainer]}>
        <FlatList
          data={users}
          keyExtractor={user => user.id.toString()}
          renderItem={ListItem}
          contentContainerStyle={{justifyContent: 'center'}}
      />
    </View>
  );
};

export default UserList;

