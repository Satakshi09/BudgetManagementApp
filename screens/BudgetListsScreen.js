import {useSelector} from 'react-redux';
import BudgetList from '../components/BudgetList';
import {View, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BudgetListsScreen = () => {
  const budgetList = useSelector(state => state.reducer);
  const [budgetLists, setBudgetLists] = useState([]);
  useEffect(() => {
    setBudgetLists(budgetList);
  }, [budgetList]);
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#2f5238'}}>

    <View>
      <ScrollView>
        {budgetLists.map((item, index) => (
          <BudgetList key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  </View>
  );
};

export default BudgetListsScreen;
