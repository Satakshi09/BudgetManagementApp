import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EntryScreen } from './screens/EntryScreen';
import { HomeScreen } from './screens/HomeScreen';
import BudgetListsScreen from './screens/BudgetListsScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Budget Management ',
            headerStyle: {
              backgroundColor: '#1d6e32',
            },

            headerTintColor: 'black',
            headerTitleStyle: { fontSize: 25 },
          }}
        />
        <Stack.Screen
          name="BudgetsEntry"
          component={EntryScreen}
          options={{
            title: 'Budget Entry',
            headerStyle: {
              backgroundColor: '#1d6e32',
            },

            headerTintColor: 'black',
            headerTitleStyle: { fontSize: 25 },
          }}
        />
        <Stack.Screen
          name="BudgetsList"
          component={BudgetListsScreen}
          options={{
            title: 'Budgets List',
            headerStyle: {
              backgroundColor: '#1d6e32',
            },
            headerTintColor: 'black',
            headerTitleStyle: { fontSize: 25 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
