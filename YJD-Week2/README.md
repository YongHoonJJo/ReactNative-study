## YJD CodeLab Week 02

### 06. H-Group

<img src='https://user-images.githubusercontent.com/13485924/69556772-b6af6a00-0fe8-11ea-9222-5ce61c95e3ef.PNG' width=250px>

#### H-Group

```js
export default const HGroup = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      { props.children }
    </View>
  )
}
```

`HGroup` 컴포넌트로 감싼 컴포넌트 블럭들은 가로방향으로 나열이 된다. 

<br>

#### Spacer

```js
export default const Spacer = (props) => {
  const width = props.width || 0
  const height = props.height || 0

  return (
    <View style={{ width, height }}>
      { props.children }
    </View>
  )
}
```

`Spacer` 컴포넌트를 통해 margin 없이 컴포넌트를 조립할 수 있게 된다.

<br>

위의 화면은 크게 3개의 컴포넌트로 구성되어 있다. (붙어있는 볼 / 공백 / 떨어져있는 볼)

떨어져있는 볼에 대한 컴포넌트는 5개의 컴포넌트로 구성되어 있다. (볼 / 공백 / 볼 / 공백 / 볼)

<br>

### 07. Clock

<img src='https://user-images.githubusercontent.com/13485924/69602238-375a7e80-105a-11ea-8154-640f27f75c07.PNG' width=250px>

#### useEffect()

```jsx
const Component = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render에 의해 무조건 반응");
  });

  useEffect(() => {
    console.log("mounted와 같은 효과로 Component가 처음 시작될때 한번 동작");

    return () => {
      console.log(
        "unmounted와 같은 효과로 Component가 사용되지 않을 때 한번 동작"
      );
    };
  }, []);

  useEffect(() => {
    console.log("watch 기능으로 count의 데이터가 변화할 때만 동작");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>증가</button>
    </div>
  );
};
```

<br>

### 08. Hand-Test (Single Page)

<table>
  <tr>
  	<td>
      <img src='https://user-images.githubusercontent.com/13485924/69811394-54957580-1231-11ea-810b-68688c3deb20.PNG' width=250px>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/13485924/69811395-54957580-1231-11ea-92e1-9d455dc8515f.PNG' width=250px>
    </td>    
  </tr>
</table>

<br>

#### One Page..

```jsx
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Button } from 'react-native';

import HGroup from './HGroup'
import TypeA from './assets/hand-type-a.png'
import TypeB from './assets/hand-type-b.png'
import TypeC from './assets/hand-type-c.png'
import TypeD from './assets/hand-type-d.png'

export default function App() {
  const [type, setType] = React.useState('')
  return (
    <View style={styles.container}>
      {type === '' && 
        <>
          <HGroup>
            <TouchableOpacity onPress={() => setType('a')}>
              <Image source={ TypeA } style={{width: 136, height: 175}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType('b')}>
              <Image source={ TypeB } style={{width: 136, height: 175}} />
            </TouchableOpacity>
          </HGroup>
          <HGroup>
            <TouchableOpacity onPress={() => setType('c')}>
              <Image source={ TypeC } style={{width: 136, height: 175}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType('d')}>
              <Image source={ TypeD } style={{width: 136, height: 175}} />
            </TouchableOpacity>
          </HGroup>
        </>
      }
      {type === 'a' &&
        <>
          <Image source={ TypeA } style={{width: 272, height: 350}} />
          <Text>A. 손등이 위로 오고 손가락 사이를 벌린사람</Text>
        </>
      }
      {type === 'b' &&
        <>
          <Image source={ TypeB } style={{width: 272, height: 350}} />
          <Text>B. 손등이 위로 오고 손가락 사이를 오므린 사람</Text>
        </>
      }
      {type === 'c' &&
        <>
          <Image source={ TypeC } style={{width: 272, height: 350}} />
          <Text>C. 손바닥이 위로 오고 손가락 사이를 벌린 사람</Text>
        </>
      }
      {type === 'd' &&
        <>
          <Image source={ TypeD } style={{width: 272, height: 350}} />
          <Text>D. 손바닥이 위로 오고 손가락 사이를 오므린 사람</Text>
        </>
      }
      {type !== '' &&
        <Button title={'돌아가기'} onPress={() => setType('')} />
      }
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

```

<br>

### 09. Tabs

```
$ expo init tabs
```

<img width="992" alt="expo_tabs" src="https://user-images.githubusercontent.com/13485924/69811969-9ecb2680-1232-11ea-962d-cab879b2f5dd.png">

tabs 를 선택해서 진행

<br>

```
$ cd tabs
$ npm start
```

<table>
  <tr>
  	<td>
    	<img src='https://user-images.githubusercontent.com/13485924/69812443-7abc1500-1233-11ea-88c3-daf62e90bcb1.PNG' width=250px>
    </td>
    <td>
    	<img src='https://user-images.githubusercontent.com/13485924/69812445-7b54ab80-1233-11ea-8e43-3429b235dd98.PNG' width=250px>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/13485924/69812446-7b54ab80-1233-11ea-93bc-067b447bbd76.PNG' width=250px>
    </td>
  </tr>
</table>

기본적으로 tab bar 가 제공된다.

<br>

### 10. Simple Navigation - createSwitchNavigator

Navigation 을 이용한 Hand Test App.

```
$ expo init simple-navi
$ cd simple-navi
$ expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
```

#### App.js

```js
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
```

#### pages/Home.js

```js
import React from 'react'
import { Button, View } from 'react-native'

const Home = (props) => {
  return (
    <View>
      <Button 
        title={'디테일 페이지로'} 
        onPress={() => props.navigation.navigate('Detail')} 
      />
    </View>
  )
}

export default Home
```

`props.navigation.navigate('Detail')` 에서 `Detail` 은 `App.js` 의 `createSwitchNavigator()` 의 첫번째 매개변수로 전달된 객체의 프로퍼티이다.

#### pages/Detail.js

```js
import React from 'react'
import { Button, View } from 'react-native'

const Detail = (props) => {
  return (
    <View>
      <Button 
        title={'돌아가기'} 
        onPress={() => props.navigation.navigate('Home')}  
      />
    </View>
  )
}

export default Detail
```

#### Screen

<table>
  <tr>
  	<td><img src='https://user-images.githubusercontent.com/13485924/69840656-a07f0380-129f-11ea-953d-f8475dc7a612.PNG' width=250px></td>
    <td><img src='https://user-images.githubusercontent.com/13485924/69840658-a1179a00-129f-11ea-8dce-e69b973dc9ee.PNG' width=250px></td>
  </tr>
</table>

기본적인 코드의 구조는 위와 같다. 하지만, 위의 **Screen**에서 보이는 것처럼, 버튼이 상단바를 침범하게 된다.

이는 `pages/Home.js` 와 `pages/Detail.js` 에서 `View` 컴포넌트 대신, `SafeAreaView` 컴포넌트를 사용해서 해결할 수 있다.

<br>

#### pages/Home.js

```js
import React from 'react'
import { Button, SafeAreaView } from 'react-native'

const Home = (props) => {
  return (
    <SafeAreaView>
      <Button 
        title={'디테일 페이지로'} 
        onPress={() => props.navigation.navigate('Detail')} 
      />
    </SafeAreaView>
  )
}

export default Home
```

<img src='https://user-images.githubusercontent.com/13485924/69841309-01a7d680-12a2-11ea-8fe2-13f623ccdc0c.PNG' width=250px>

#### Docs

- React Navigation : <https://reactnavigation.org/docs/en/getting-started.html>
- createSwitchNavigator : <https://reactnavigation.org/docs/en/switch-navigator.html>
- SafeAreaView : <https://facebook.github.io/react-native/docs/safeareaview>

<br>

### 11. Simple Navigation - createStackNavigator

```
$ expo init simple-stack-navi
$ cd simple-stack-navi
$ expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
$ npm i react-navigation-stack
```

#### App.js

```js
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
```

`createSwitchNavigator()` 대신 `createStackNavigator()` 를 이용하여 `Navigator` 를 생성하였다.

현재 `pages/Home.js` 와 `pages/Detail.js` 의 내용은 이전과 동일하며, 화면은 아래와 같다.

<Table>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/13485924/69842727-b395d180-12a7-11ea-9bab-24cdff23f9a4.PNG' width=250px></td>
    <td><img src='https://user-images.githubusercontent.com/13485924/69842725-b2fd3b00-12a7-11ea-9c20-1e48d149a73d.PNG' width=250px></td>
  </tr>
</table>

상단바와 Back 버튼이 생겼다.

<br>

#### pages/Detail.js

```js
import React from 'react'
import { Button, SafeAreaView, View } from 'react-native'

const Detail = (props) => {
  return (
    <SafeAreaView>
      <Button 
        title={'돌아가기'} 
        // onPress={() => props.navigation.navigate('Home')}  
        onPress={() => props.navigation.goBack()}
      />
    </SafeAreaView>
  )
}

Detail.navigationOptions = {
  title: '디테일'
}

export default Detail
```

버튼 클릭시, 특정 navigator 로 이동하는 대신, `props.navigation.goBack()` 을 통해 이전 페이지로 이동할 수 있게 설정할 수 있다.

또한, `Detail.navigationOptions = { title: '디테일' } ` 을 통해 상단바의 타이틀을 설정할 수 있다.

<Table>
  <tr>
  	<td><img src='https://user-images.githubusercontent.com/13485924/69843001-ebe9df80-12a8-11ea-8cdb-e53664e4ba7e.PNG' width=250px></td>
  	<td><img src='https://user-images.githubusercontent.com/13485924/69843002-ebe9df80-12a8-11ea-85be-ed66c1b8cbf1.PNG' width=250px></td>
  </tr>
</table>

#### Docs

- createStackNavigator : <https://reactnavigation.org/docs/en/stack-navigator.html>

<br>

### 12. Hand Test Navigator

```
$ expo init hand-test-navi
$ cd init hand-test-navi
$ expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
$ npm i react-navigation-stack
```

#### App.js

```js
import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import TypeA from './pages/TypeA'
import TypeB from './pages/TypeB'
import TypeC from './pages/TypeC'
import TypeD from './pages/TypeD'

const Navigator = createStackNavigator({
  Home: Home, // Main Screen
  TypeA: TypeA,
  TypeB: TypeB,
  TypeC: TypeC,
  TypeD: TypeD,
})

// 네비게이터들을 하나로 묶어서 표시하는 컨테이너. 하나만 있어도 감싸야 한다.
const Container = createAppContainer(Navigator)

export default function App() {
  return (
    <Container />
  );
}
```

`createStackNavigator()` 에서 첫번째 인자로 페이지를 구성하는 객체를 전달하는데, 첫번째 프로퍼티가 Main Screen 이 된다.

#### pages/Home.js

```js
import React from 'react'
import { Button, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'

import HGroup from '../Components/HGroup'
import Center from '../Components/Center'
import HandTypeB from '../assets/hand-type-b.png'
import HandTypeA from '../assets/hand-type-a.png'
import HandTypeC from '../assets/hand-type-c.png'
import HandTypeD from '../assets/hand-type-d.png'

const imageStyle = { width: 136, height: 175 }

const Home = (props) => {
  return (
    <View>
      <Center>
        <HGroup>
          <TouchableOpacity onPress={() => props.navigation.navigate('TypeA')}>
            <Image source={ HandTypeA } style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('TypeB')}>
            <Image source={ HandTypeB } style={imageStyle} />
          </TouchableOpacity>
        </HGroup>
      </Center>
      <Center>
        <HGroup>
          <TouchableOpacity onPress={() => props.navigation.navigate('TypeC')}>
            <Image source={ HandTypeC } style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('TypeD')}>
            <Image source={ HandTypeD } style={imageStyle} />
          </TouchableOpacity>
        </HGroup>
      </Center>
    </View>
  )
}

Home.navigationOptions = {
  title: '심리 테스트'
}

export default Home
```

#### pages/TypeA.js

```js
import React from 'react'
import { Button, Image, Text, View, ScrollView } from 'react-native'

import HandTypeA from '../assets/hand-type-a.png'

const TypeA = (props) => {
  return (
    <View>
      <ScrollView>
        <Image source={ HandTypeA } style={{width: 272, height: 350}} />
        <Text>A. 손등이 위로 오고 손가락 사이를 벌린사람</Text>
        <Text>
          당신은 감정이 얼굴에 잘 드러나서 조금만 기쁜일이 생겨도 잘 웃는 성격을 가지고 있습니다.
          또한 자신의 감정을 확실히 하는 성격으로 복잡하거나 피곤한 것을 싫어합니다.
          자신이 좋아하지 않는 사람에게는 단 1%의 기회도 주지않으며 자신이 좋아하는 사람에게는 매우 관대한 편 입니다.
          남에게 받은 호의는 반드시 되돌려주고싶어하는 멋진 성격을 가지고 있습니다.
          단, 고집이 세서 틀린 길임을 알면서도 직진하는 경향이 있으니 가끔은 고집을 꺾을줄도 알아야 합니다.
        </Text>
        <Button title={'돌아가기'} onPress={() => props.navigation.goBack()} /> 
      </ScrollView>
    </View>
  )
}

TypeA.navigationOptions = {
  title: 'Type A'
}

export default TypeA
```

`<ScrollView>` 컴포넌트로 감싸지 않으면, 화면 아래로 넘어가는 내용을 확인할 수 없다.

 `<ScrollView>` 로 감싸면 화면에 스크롤을 적용시킬 수 있다.

<table>
  <tr>
  	<td><img src='https://user-images.githubusercontent.com/13485924/69843606-aaa6ff00-12ab-11ea-9b6a-cdc91ac13263.PNG' width=250px></td>
  	<td><img src='https://user-images.githubusercontent.com/13485924/69843607-aaa6ff00-12ab-11ea-848a-85717f8a2757.PNG' width=250px></td>
  	<td><img src='https://user-images.githubusercontent.com/13485924/69843690-14bfa400-12ac-11ea-8581-9de937582c32.PNG' width=250px></td>
  </tr>
</table>



#### Docs

- ScrollView : <https://facebook.github.io/react-native/docs/scrollview>