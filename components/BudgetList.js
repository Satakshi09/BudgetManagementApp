import {Text} from '@react-native-material/core';
// import {ListType} from '../types/ListType';
import {View, StyleSheet} from 'react-native';

const BudgetList = props => {
  // console.warn(props);
  return (
    <View style={styles.List}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Product Name : {props.item.productName}
      </Text>
      <Text>Planned Amount : &#8377; {props.item.plannedAmount}</Text>
      <Text>Actual Amount: &#8377; {props.item.actualAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    borderWidth: 3,
    margin: 8,
    padding: 5,
    backgroundColor: 'lightblue',
  },
});
export default BudgetList;
