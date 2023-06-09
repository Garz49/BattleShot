import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './features/homescreen';
import GridPage from './features/grid';
import { colors } from './utils/colors'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'transparent',
          headerTransparent: true,
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
