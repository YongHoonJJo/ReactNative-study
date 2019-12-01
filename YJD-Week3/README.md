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









