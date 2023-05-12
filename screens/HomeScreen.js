import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles/styles';
import Colors from '../constants/colors';

const HomeScreen = ({navigation}) => {
  function pressHandler() {
    navigation.navigate('UserList');
  }

  return (
    <LinearGradient style={styles.container} colors={[Colors.primary700, Colors.accent500]}>
      <View style={styles.container}>
        <Text style={styles.fullName}>Rocío Florez</Text>
        <Button title='Lista de usuarios' onPress={pressHandler}/>
      </View>
    </LinearGradient>
  )
};

export default HomeScreen;