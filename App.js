import HomeScreen from './screens/HomeScreen';
import UserList from './screens/UserList';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='UserList' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

