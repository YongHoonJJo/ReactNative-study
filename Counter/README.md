## Counter App

### Props 와 State

리액트에서는 리액트 안에서 데이터를 다루기 위해 Props 와 State, Context 를 사용한다. 

Props 는 부모 컴포넌트로부터 자식 컴포넌트로 전달되는 데이터이다. 부모 컴포넌트로부터 받는 데이터이므로, 자식 컴포넌트에서는 변겨잉 불가능하다. 이는 컴포넌트의 Properties 와 같음을 의미한다.

State 는 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용되며, 컴포넌트 안에서 데이터를 변경할 수 있다. 즉, State 는 컴포넌트의 상태(state)를 나타낸다.

한 컴포너트에서는 컴포넌트의 속성처럼 사용되는 변경 불가능한 데이터, Props 와 컴포넌트 안에서 컴포넌트의 상태를 나타내는 변경 가능한 데이터, State 가 존재한다. 

<br>

#### Button Component

```jsx
import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.TouchableOpacity``
const Icon = Styled.Image``

const Button = ({iconName, onPress}) => {
  return (
    <Container onPress={onPress}> // <TouchableOpacity />
      <Icon // <Image />
        source={
          iconName === 'plus'
            ? require('../../Assets/Images/add.png')
            : require('../../Assets/Images/remove.png') 
        }
      />
    </Container>
  )
}

export default Button
```

`add.png` 는 아이콘 이미지 이며, 해달 폴더에는 `add@2x.png` , `add@3x.png` 와 같은 이름의 아이콘 이미지들도 들어있다. 

@2x, @3x 는 이미지 파일 이름의 규칙으로 이미지를 불러올 때 리액트 네이티브가 해당 화면 사이즈에 맞는 이미지를 자동으로 불러온다. 

`iconName` 과 `onPress ` 라는 두 Props 는 Button 컴포넌트를 불러와 사용하는 부분에서 값을 지정하여 사용한다. 

`<TouchableOpacity>` 컴포넌트는 **onPress** 라는 Props 를 가지고 있다. 

`<Image>` 컴포넌트는 **source** 라는 Props 에 표시 하고자 하는 이미지를 지정한다. 이미지를 지정할 때는 `require()` 구문을 사용한다. 

<br>

#### Counter 컴포넌트

```jsx
const Counter = ({title, initValue}) => {
  const [count, setCount] = useState(0)

  return (
    <Container> // <SafeAreaVie />
      {title && (
        <TitleContainer> // <View />
          <TitleLabel>{title}</TitleLabel> // <Text />
        </TitleContainer>
      )}
      <CountContainer> // <View />
        <CountLabel>{initValue + count}</CountLabel> // <Text />
      </CountContainer>
      <ButtonContainer> // <View />
        <Button iconName='plus' onPress={() => setCount(count + 1)} />
        <Button iconName='minus' onPress={() => setCount(count - 1)} />
      </ButtonContainer>
    </Container>
  )
}
```

Count 를 변경하기 위해 State 를 설정했다. 

`count` 변수는 `setCount()` 를 통해서만 변경시킬 수 있는데, state 의 변수값을 직접 변경하면서 발생할 수 있는 오류를 줄이고, 리액트의 Virture DOM 을 활용하여 변경된 부분만 화면을 갱신하기 위해서이다. 

<br>