import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import UserList from '../screens/UserList';
import UserDetail from '../screens/UserDetail';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name='Home' component={HomeScreen}/>
              <Stack.Screen name='UserList' component={UserList} />            
              <Stack.Screen name='UserDetail' component={UserDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;