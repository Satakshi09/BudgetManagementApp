import {View, Text} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
import styles from '../styles';
import {useState} from 'react';
import {addBudget} from '../redux/action';
import {useDispatch} from 'react-redux';

export const EntryScreen = props => {
  let [productName, setProductName] = useState('');
  let [plannedAmount, setPlannedAmount] = useState('');
  let [actualAmount, setActualAmount] = useState('');

  const dispatch = useDispatch();
  let resetForm = () => {
    setProductName('');
    setPlannedAmount('');
    setActualAmount('');
  };
  const handleAddBudget = productDetails => {
    if (
      productDetails.productName != '' &&
      productDetails.plannedAmount != '' &&
      productDetails.actualAmount != ''
    ) {
      dispatch(addBudget(productDetails));
      setTimeout(() => {
        props.navigation.navigate('Home');
      }, 500);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#2f5238' }}>
      <View >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
            color:'black'
          }}>
          {'Add Budget'}
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <TextInput
          style={styles.textInput}
          label="Enter Product Name"
          value={productName}
          onChangeText={text => setProductName(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Enter Planned Amount"
          keyboardType="phone-pad"
          value={plannedAmount}
          onChangeText={amount => setPlannedAmount(amount)}
        />
        <TextInput
          style={styles.textInput}
          label="Enter Actual Amount"
          keyboardType="phone-pad"
          value={actualAmount}
          onChangeText={amount => setActualAmount(amount)}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 50
            
          }}>
          <View>
            <Button
              style={[styles.buttonStyle, {paddingHorizontal: 12,backgroundColor: 'orange'}]}
              title="ADD"
              onPress={() => {
                handleAddBudget({
                  productName,
                  plannedAmount,
                  actualAmount,
                });
              }}></Button>
          </View>
          <View>
            <Button
              style={[styles.buttonStyle,{backgroundColor: '#689975'}]}
              color="error"
              title="RESET"
              onPress={resetForm}></Button>
          </View>
        </View>
      </View>
    </View>
  );
};
