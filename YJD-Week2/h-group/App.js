import React from 'react';
import { StyleSheet, View } from 'react-native';

import Ball from './Ball' // 내용을 표시하는 컴포넌트, 컨텐츠에 해당. 디자인을 가지고 있고, 텍스트를 가짐.
import HGroup from './HGroup' // 컨텐츠를 감싸고, direction 을 설정 해주는, 컴포넌트 역할
import Spacer from './Spacer' // 무언가를 감싸진 않지만, 크기를 가지고 레이아웃 배치에 영향을 주는 컴포넌트

export default function App() {
  return (
    <View style={styles.container}>
      <HGroup>
        <Ball number={ 12 } />
        {/* <Spacer width={ 4 } />  */}
        <Ball number={ 24 } />
        {/* <Spacer width={ 4 } /> */}
        <Ball number={ 36 } />
      </HGroup>
      <Spacer height={ 4 } />
      <HGroup>
        <Ball number={ 11 } />
        <Spacer width={ 4 } /> 
        <Ball number={ 22 } />
        <Spacer width={ 4 } /> 
        <Ball number={ 33 } />
      </HGroup>
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
