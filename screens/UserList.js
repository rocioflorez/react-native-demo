import { useEffect } from 'react';
import { fetchUsers } from '../api/userApi';

import { useSelector, useDispatch } from 'react-redux';
import { setUsers, viewDetails, setSearchedUser } from '../redux/slices/userSlice';

import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, View, useWindowDimensions } from 'react-native';

import { UserItem } from '../components/UserItem';
import UserSearchBar from '../components/UserSearchBar';

import styles from '../styles/styles';

const UserList = () => {
  const allUsers = useSelector((state) => state.user.users);
  const searchTerm = useSelector((state) => state.user.searchedUser);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const route = useRoute();

  const quantity = route.params?.quantity || 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        const slicedUsers = response.slice(0, quantity);
        dispatch(setUsers(slicedUsers));
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchData();
  }, [dispatch, quantity]);

  const { width, height } = useWindowDimensions();
  const cardWidth = width < 450 ? 300 : 600;

  const handleCardPress = (userId) => {
    dispatch(viewDetails(userId));
    navigation.navigate('UserDetail', { userId: userId });
  };

  const handleSearchTerm = (text) => {
    dispatch(setSearchedUser(text));
  };

  const filteredUsers = allUsers.filter((user) => {
    const login = user.login?.toLowerCase() || '';
    return login.includes(searchTerm.toLowerCase());
  });

  const renderUserItem = ({ item }) => (
    <UserItem item={item} cardWidth={cardWidth} onPress={handleCardPress} />
  );

  return (
    <View style={styles.userContainer}>
      <UserSearchBar
        searchTerm={searchTerm}
        setSearchedUser={handleSearchTerm}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(user) => user.id.toString()}
        renderItem={renderUserItem}
        contentContainerStyle={styles.userListContainer}
      />
    </View>
  );
};

export default UserList;