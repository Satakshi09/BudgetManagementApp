import { View } from 'react-native';
import { Button } from '@react-native-material/core';

export const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#2f5238'}}>
      {/* Change backgroundColor to the desired shade of green */}
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Button
          color='orange'
          title="Add Budget"
          onPress={() => props.navigation.navigate('BudgetsEntry')}
        ></Button>
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Button
          color="#689975"
          title="Show Budgets"
          onPress={() => props.navigation.navigate('BudgetsList')}
        ></Button>
      </View>
    </View>
  );
};
