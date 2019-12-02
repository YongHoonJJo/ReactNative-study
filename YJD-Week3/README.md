## YJD CodeLab Week 03

### 13. Custom Components 

```jsx
import React from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='버튼 텍스트' onPress={() => {}} />
      <TextInput style={ {width: 300} }/>
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

<img src='https://user-images.githubusercontent.com/13485924/69914543-f8c52980-1488-11ea-8650-e5bcd91703c6.PNG' width=250px>

위의 경우 크기도 없고, 디자인도 없는 상태이다.

<br>

#### Styled-Components

```
$ npm i styled-components
```

- Docs : <https://www.styled-components.com/docs/basics>

<br>

```jsx
import styled from 'styled-components/native'

const CustomButtonView = styled.View`
  border: 1px solid #e5e5e5;
  padding: 8px 12px;
  width: ${ props => props.width || '300px'};
`
```

styled-components 는 `import styled from 'styled-components/native'` 와 같이 가져온다. (React-Native)

위의 경우 `CustomButtonView` 는 백틱으로 감싸져있는 스타일을 가진 View 컴포넌트가 된다.

CustomButtonView 컴포넌트에도 props 를 전달할 수 있으며, 전달한 props 는 위와 같이 `props` 를 통해 전달받을 수 있다.

<br>

#### Custom Button

```jsx
import React from 'react';
import styled from 'styled-components/native'

const CustomButton = styled.TouchableOpacity`
  
`

const CustomButtonView = styled.View`
  border: 1px solid #e5e5e5;
  padding: 8px 12px;
  width: ${ props => props.width || '300px'};
`

const CustomButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  ${ props => props.type === 'danger' ? 'color: #ff0000;' : '' }
  ${ props => props.type === 'warning' ? 'color: #ff00ff;' : '' }
`

export default props => (
  <CustomButton { ...props }>
        <CustomButtonView { ...props }>
          <CustomButtonText { ...props }>
            { props.children }
          </CustomButtonText>
        </CustomButtonView>
      </CustomButton>
)
```

<br>

#### Custom Input

```jsx
import React from 'react'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  width: 300px;
  border: 1px solid #e5e5e5;
  padding: 8px 12px;
  font-size: 18px;
`

export default props => (
  <TextInput { ...props } />
)
```

<br>

#### Custom TextArea

```jsx
import React from 'react'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  width: 300px;
  height: ${ props => props.height ? props.height : '200px'};
  border: 1px solid #e5e5e5;
  padding: 8px 12px;
  font-size: 18px;
`

export default props => (
  <TextInput { ...props } multiline={ true } />
)
```

Custom-Input 에서 `multiline` 을 추가한 상태이다.

<br>

<img src='https://user-images.githubusercontent.com/13485924/69914824-f2847c80-148b-11ea-809f-2f0e47e54082.PNG' width=250px>

<br>

### 14. Async Storage

<img src='https://user-images.githubusercontent.com/13485924/69923410-ffcf5480-14e7-11ea-9942-9eea5775c717.PNG' width=250px>

```jsx
import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    // 비동기, Promise
    AsyncStorage.getItem('count').then( value => {
      value && setCount(parseInt(value, 10))
    })
  }, [])

  const addCount = () => {
    const newCount = count + 1
    setCount( newCount )
    AsyncStorage.setItem('count', newCount.toString()) // You can save String only.
  }

  const reset = () => {
    setCount(0)
    AsyncStorage.removeItem('count')
  }

  return (
    <View style={styles.container}>
      <Text>{ count }</Text>
      <Button title="Click" onPress={ addCount } />
      <Button title="Reset" onPress={ reset } />
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

#### AsyncStorage

- AsyncStorage.setItem(key, value) 의 형태로 값을 저장할 수 있으며, key 와 value 는 String만 가능하다.
- AsyncStorage.getItem(key) 의 형태로 저장된 값을 가져올 수 있으며, Promise 객체를 리턴한다. 해당 데이터가 없을경우, null 값을 리턴한다. 이를 통해 앱을 껏다 켜도 데이터를 유지시킬 수 있다.
- AsyncStorage.removeItem(key) 의 형태로 저장된 값을 제거할 수 있다.
- Docs: <https://facebook.github.io/react-native/docs/asyncstorage>
  - 하지만 이 AsyncStorage 는 Deprecated 되었다. 
  - expo 를 통해 프로젝트를 설치시  `import { AsyncStorage } from 'react-native';` 와 같이 import 할 수 있다.
  - expo 를 통해 설치 하지 않는 경우, <https://github.com/react-native-community/async-storage> 를 참고하여 설치하면 된다.

<br>





