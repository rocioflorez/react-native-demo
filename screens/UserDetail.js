import { View, Text, Image } from 'react-native';

import { useSelector } from 'react-redux';

import styles from '../styles/styles';

const UserDetail = () => {
  const selectedUser = useSelector((state) => state.user.selectedUser);

  return (
    <View style={styles.userContainer}>
      <View style={styles.userDetailCard}>
        {selectedUser && (
          <View style={styles.userDetail}>
            <Image style={styles.image} source={{ uri: selectedUser.avatar_url }} />
            <Text style={styles.text}>Login: {selectedUser.login}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default UserDetail;