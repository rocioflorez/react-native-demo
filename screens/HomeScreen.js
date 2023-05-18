import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useSelector, useDispatch } from 'react-redux';
import { setQuantity } from '../redux/slices/quantitySlice';
import QuantityInput from '../components/QuantityInput';

import CurrentDate from '../components/CurrentDate';

import styles from '../styles/styles';
import Colors from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  const quantity = useSelector((state) => state.quantity); 
  const dispatch = useDispatch();

  const handleChangeQuantity = (newQuantity) => {
    dispatch(setQuantity(newQuantity));
  };

  const handlePress = () => {
    navigation.navigate('UserList', { quantity: quantity }); 
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.fullName}>Rocio Florez</Text>
          <CurrentDate />
        </View>
        <View style={styles.container}>
          <Text>¿Cuántos usuarios desea visualizar?</Text>
          <QuantityInput
            quantity={quantity}
            onChangeQuantity={handleChangeQuantity}
          />
          <Button title="Ver usuarios" onPress={handlePress} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;