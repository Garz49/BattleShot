import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './src/features/homescreen';
import GridPage from './src/features/grid';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'red',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent', color: 'transparent'}
        }}>
        <Stack.Screen
         name="HomePage"
         component={HomePage}
        />
        <Stack.Screen
         name="Grid"
         component={GridPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
