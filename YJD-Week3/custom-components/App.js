import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from './components/Button'
import CustomInput from './components/Input'
import CustomTextArea from './components/TextArea'

export default function App() {
  return (
    <View style={styles.container}>
      <CustomInput />
      <CustomTextArea height='250px' />
      <CustomButton onPress={ () => alert('Hello') }>
        내가 만든 버튼 1
      </CustomButton>
      <CustomButton type="warning">
        내가 만든 버튼 2
      </CustomButton>
      <CustomButton type="danger">
        삭제
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
