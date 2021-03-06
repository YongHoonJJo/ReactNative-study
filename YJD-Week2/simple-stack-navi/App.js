import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Detail from './pages/Detail'

const Navigator = createStackNavigator({
  Home: Home, // Main Screen
  Detail: Detail
})

// 네비게이터들을 하나로 묶어서 표시하는 컨테이너. 하나만 있어도 감싸야 한다.
const Container = createAppContainer(Navigator)

export default function App() {
  return (
    <Container />
  );
}