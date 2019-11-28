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



