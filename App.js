import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import DetailScreen from './src/pages/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{title: 'Detail Screen'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


