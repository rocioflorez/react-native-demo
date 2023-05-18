import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../styles/styles';

const UserItem = ({ item, cardWidth, onPress }) => {
  const handlePress = () => {
    onPress(item.id);
  };

  return (
    <TouchableOpacity style={[styles.userCard, { width: cardWidth }]} onPress={handlePress}>
      <Image style={styles.image} source={{ uri: item.avatar_url }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login: {item.login}</Text>
        <Text style={styles.text}>User Id: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { UserItem };
