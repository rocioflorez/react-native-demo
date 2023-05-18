import { TextInput } from 'react-native';

import styles from '../styles/styles';

const UserSearchBar = ({ searchTerm, setSearchedUser }) => {
  return (
    <TextInput
      style={styles.searchInput}
      value={searchTerm}
      onChangeText={setSearchedUser}
      placeholder="Busca por login"
    />
  );
};

export default UserSearchBar;