import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'
import Detail from './pages/Detail'

// 여러개의 네비게이터를 생성할 수 있고, 서로 겹치는 상태로 생성할 수도 있음.
const Navigator = createSwitchNavigator({
  Home: Home,
  Detail: Detail
})

// 네비게이터들을 하나로 묶어서 표시하는 컨테이너. 하나만 있어도 감싸야 한다.
const Container = createAppContainer(Navigator)

export default function App() {
  return (
    <Container />
  );
}