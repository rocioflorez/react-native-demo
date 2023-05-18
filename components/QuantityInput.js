import { TextInput, View } from 'react-native';

import { useDispatch } from 'react-redux';
import { setQuantity } from '../redux/slices/quantitySlice';

import styles from '../styles/styles';

const QuantityInput = ({ quantity, onChangeQuantity }) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (newQuantity) => {
    dispatch(setQuantity(newQuantity));
    onChangeQuantity(newQuantity);
  };

  return (
    <View style={styles.quantityContainer}>
      <TextInput
        style={styles.quantityInput}
        value={quantity}
        onChangeText={handleChangeQuantity}
        keyboardType="numeric"
      />
    </View>
  );
};

export default QuantityInput;

