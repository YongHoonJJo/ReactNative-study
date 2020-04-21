## TodoList

리액트에서 데이터를 다루는 방법으로 Props 와 State, 그리고 Context 가 존재.

Context API 를 통해 Context 를 다룰 수 있다. 

Props, State, 그리고 Context 는 리액트 네이티브가 동작하는 중에 데이터를 다루는 데 사용된다. 즉, 앱이 종료되거나 다시 실행되면 Props 와 State, Context 에 있던 데이터는 사라지게 된다. 

AsyncStorage 를 사용하면, 데이터를 앱 내에 저장할 수 있다. 

<br>

**앱 구조**
```js
<TodoListContextProvider> // ContextAPI
  <View> // App
    <View> // Todo
      <SafeAreaView> // TodoListView
        <View> // Header
          <Text></Text>
        </View>
        <FlatList> // TodoList
          <View> // TodoItem
            <Text></Text>
            <TouchableOpacity>
              <Image />
            </TouchableOpacity>
          </View>
        </FlatList>
      </SafeAreaView>
      <SafeAreaView> // AddButton
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
      </SafeAreaView>
      <KeyboardAvoidingView> // TodoInput
        <TouchableWithoutFeedback> // Background
          <View></View>
        </TouchableWithoutFeedback>
        <TextInput /> // TextInput
      </KeyboardAvoidingView>
    </View>
  </View>
</TodoListContextProvider>
```

<br>

### Context API

리액트에서 Props 와 State 는 부모 컴포넌트와 자식 컴포넌트 또는 한 컴포넌트 안에서 데이터를 다루기 위해 사용된다. 데이터는 위에서 아래, 한쪽 방향으로 흐르게 된다.

다른 컴포넌트에서 한쪽 방향으로 흐르고 있는 데이터를 사용하고 싶은 경우, 또는 다른 컴포넌트에서 사용하는 데이터를 데이터 흐름에 넣고 싶은 경우 어떻게 해야할까?

공통 부모 컴포넌트에 State 를 만들어서 문제를 해결할 수 있지만, 컴포넌트 사이에 공유되는 데이터를 위해 매번 공통 부모 컴포넌트를 수정하고 모든 컴포넌트에 Props 를 전달하여 데이터를 사용하는 과정은 **비효율적**이다.

이런 문제를 해결하기 위해 Flux 라는 개념이 도입되었고, 이에 맞는 Context API 가 제공되었다.

[Flux: An Application Architecture for React](https://reactjs.org/blog/2014/05/06/flux.html)

<br>

Context 는 부모에서 자식 컴포넌트로 전달되는 데이터의 흐름과는 상관 없이, 전역적으로 사용되는 데이터를 다룬다. 전역 데이터를 Context 에 저장한 수, 필요한 컴포넌트에서 해당 데이터를 불러와 사용한다. 

Context 를 사용하기 위해서는 Context API 를 사용하여, Context 의 Provider 와 Consumer 를 생성한다. 

Context 에 저장된 데이터를 사용하기 위해서는 공통 부모 컴포넌트에 Context 의 Provider 를 사용하여 데이터를 제공한다. 데이터를 사용하려면 컴포넌트에서 Context 의 Consumer 를 사용하여 데이터를 사용(소비)한다. 

<br>

### AsyncStorage

 AsyncStorage 는 앱 내에서 간단하게 데이터를 저장할 수 있는 key/value 저장소이다. 웹에서 사용하는 windows.localStorage 와 유사하다.

RN 0.59 버전부터 커뮤니티 라이브러리로 분리되었다. 

<https://github.com/react-native-community/async-storage>

<br>

### AsyncStorage 설치 및 설정

설치

```
npm i @react-native-community/async-storage
```

iOS 에서 필요한 라이브러리 설치

```
cd ios
pod install
```

RN v0.60 이전 버전의 경우 라이브러리 연결을 해주어야 한다.

```
react-native link @react-native-community/async-storage
```

<br>

### Context

**src/Context/TOdoListContext/index.js**

```js
import React, { createContext, useState, useEffct } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const TodoListContext = createContext({
  todoList: [],
  addTodoList: (todo) => {},
  removeTodoList: (index) => {}
})

const TodoListContextProvider = ({children}) => {
  const [todoList, setTodoList] = useState([])

  const addTodoList = (todo) => {
    const list = [...todoList, todo]
    setTodoList(list)
    AsyncStorage.setItem('todoList', JSON.stringify(list))
  }

  const removeTodoList = (index) => {
    let list = [...todoList]
    list.splice(index, 1)
    setTodoList(list)
    AsyncStorage.setItem('todoList', JSON.stringify(list))
  }

  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList')
      if(list !== null) {
        setTodoList(JSON.parse(list))
      }
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        addTodoList,
        removeTodoList
      }}
    >
      {children}
    </TodoListContext.Provider>
  )
}

export { TodoListContextProvider }
```

createContext 로 Context 를 생성하고, useState 로 생성한 state 데이터를 Context 안에 저장함으로써, Context 의 데이터를 수정할 수 있다. 그리고 useEffect 를 통해 AsyncStorage 에 저장된 데이터를 가져와 설정한다.

<br>

```js
import React, { createContext, useState, useEffct } from 'react'

const TodoListContext = createContext({
  todoList: [],
  addTodoList: (todo) => {},
  removeTodoList: (index) => {}
})
```

createContext 함수에 초기값을 할당하여 Context 를 생성할 수 있다. 초기값으로는 문자열 배열인 todoList 와 todoList 에 데이터를 추가하기 위한 addTodoList(), 삭제하기 위한 removeTodoList 를 할당

<br>

```js
const TodoListContextProvider = ({children}) => {
  //...

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        addTodoList,
        removeTodoList
      }}
    >
      {children}
    </TodoListContext.Provider>
  )
}
```

Context 를 사용하기 위해서는 공통 부모 컴포넌트에서 **Context 의 프로바이더**를 사용한다. 부모 컴포넌트에서 프로바이더를 사용하기 위해서는 Context 의 프로바이더 컴포넌트를 만들고 공통 부모 컴포넌트의 부모 컴포넌트로 사용한다. 

`TodoListContext.Provider` 는 Context 의 프로바이더 컴포넌트로, 공통 부모 컴포넌트의 부모 컴포넌트가 된다. 

<br>

```js
const [todoList, setTodoList] = useState([])
```

Context 를 사용하기 위해 만든 프로바이더 컴포넌트도 RN 컴포넌트이므로, 컴포넌트 안에서 수정 가능한 데이터를 사용하기 위해서는 useState 를 사용해야 한다. 

<br>

```js
const addTodoList = (todo) => {
  const list = [...todoList, todo]
  setTodoList(list)
  AsyncStorage.setItem('todoList', JSON.stringify(list))
}
```

AsyncStorage 의 setItem 을 통해 데이터를 물리적으로 저장하게 된다. setItem 은 키/값 형태로 데이터를 관리하며, 키/값은 모두 **문자열**이어야 한다. 그렇기 때문에 배열인 데이터를 JSON.stringiry() 를 통해 문자열로 변경하여 저장한다. 

<br>

```js
const initData = async () => {
  try {
    const list = await AsyncStorage.getItem('todoList')
    if(list !== null) {
      setTodoList(JSON.parse(list))
    }
  } catch(e) {
    console.log(e)
  }
}
```

앱이 시작될 때, AsyncStorage 에 저장된 데이터를 불러와, Context 의 값을 초기화하기 위한 함수.

AsyncStorage 의 getItem() 과 setItem() 은 모두 Promise 함수이다. 

<br>

### useEffect

```js
useEffect(() => {
  initData()
}, [])
```

useEffect() 의 첫 번재 매개변수에는 함수를 설정하여 useEffect() 의 역할을 정의한다.

useEffect 의 두 번째 매개변수에는 배열을 전달하는데, 빈 배열을 전달하게 되면 컴포넌트가 처음 화면에 표시된 후, 이 useEffect 는 한 번만 호출된다. 

(componentDidMount 와 같은 역할)

<br>

```js
useEffect(() => {
  //...
})
```

위와 같이 두 번째 매개변수를 설정하지 않는 경우, 컴포넌트가 처음 화면에 표시된 후에도 실행되며, Props 나 State 의 변경에 의해 컴포넌트가 리렌더링 된 후에도 실행된다.

(componentDidMount 와 componentDidUpdate 의 역할을 동시에 수행)

<br>

```js
useEffect(() => {
  //...
  return () => {
    //...
  }
})
```

첫 번째 매개변수로 전달되는 함수에서 함수를 리턴할 수 있는데, 컴포넌트가 화면에서 사라진 후, 이 함수가 호출된다. 

라이브러리와의 연동을 해제하거나, 타이머를 해제하는=데 사용된다. 

(componentWillUnmount 와 같은 역할)

<br>

```js
useEffect(() => {
  //...
}, [todoList])
```

두 번재 매개변수로 배열을 전달할 수 있는데, 배열에 특정 변수를 설정하면, 전달된 변수가 변경될 때만 이 함수가 호출된다. 

<br>

```js
useEffect(() => {
  //...
}, [todoList])

useEffect(() => {
  initData()
}, [])
```

useEffect() 는 한 컴포넌트에 여러 번 정의하여 사용할 수 있다. 

<br>

### Provider 설정

**src/App.js**

```js
import React from 'react'
import Styled from 'styled-components/native'

import { TodoListContextProvider } from './Context/TodoListContext'

import Todo from './Screens/Todo'

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  )
}

export default App
```

Context 를 사용하기 위한 프로바이더 설정으로, 프로바이더는 Context 를 공유할 컴포넌트들의 최상단 공통 부모 컴포넌트에 사용한다. 이 예제에서는 앱의 최상단 공통 부모 컴포넌트인 src/App.js 에서 사용함으로써, App.js 컴포넌트를 부모로 하는 모든 컴포넌트에서 할 일 리스트의 Context 를 사용할 수 있다. 

 <br>

### Todo 컴포넌트

**src/Screens/Todo/index.js**

```js
import React from 'react'
import Styled from 'styled-components/native'

import TodoListView from './TodoListView'
import AddTodo from './AddTodo'

const Container = Styled.View`
  flex: 1;
`

const Todo = () => {
  return (
    <Container>
      <TodoListView />
      <AddTodo />
    </Container>
  )
}

export default Todo
```

할 일 리스트를 화면에 표시하고 관리 할 Todo 컴포넌트.

TodoList 앱은 할 일 리스트를 보여줄 TodoListView 컴포넌트와 할 일을 추가할 수 있는 AddTodo 컴포넌트를 가지고 있다.

<br>

### TodoListView 컴포넌트

**Screens/Todo/TodoListView/index.js**

```js
import React from 'react'
import Styled from 'styled-components/native'

import Header from './Header'
import TodoList from './TodoList'

const Container = Styled.SafeAreaView`
  flex: 1;
`

const TodoListView = () => {
  return (
    <Container>
      <Header />
      <TodoList />
    </Container>
  )
}

export default TodoListView
```

앱 이름을 표시하기 위한 header 컴포넌트와 할 일 리스트를 표시할 수 있는 TodoList 컴포넌트를 가진 컴포넌트.

<br>

### Header 컴포넌트

**src/Screens/Todo/TodoListView/Header/index.js**

```js
import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`

const Titlelabel = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`

const Header = () => {
  return (
    <Container>
      <TitleLabel>Todo List App</TitleLabel>
    </Container>
  )
}

export default Header
```

TodoListView 컴포넌트 상단에 단순히 앱 이름을 표시하는 컴포넌트.

<br>

### Context 데이터를 사용하는 TodoList 컴포넌트

**src/Screens/Todo/TodoListView/TodoList/index.js**

```js
import { React, useContext } from 'react'
import { FlatList } from 'react-native'
import Styled from 'styled-components/native'

import { TodoListContext } from '../../../Context/TodoListContext'

import EmptyItem from './EmptyItem'
import TodoItem from './Todo'

const Container = Styled(FlatList)`
`

const TodoList = () => {
  const { todoList, removeTodoList } = useContext(TodoListContext)

  return (
    <Container 
      data = {todoList}
      keyExtractor={(item, index) => `todo-${index}`}
      ListEmptyComponent = {<EmptyItem />}
      renderitem={({item, index}) => (
        <TodoItem 
          text = {item}
          onDelete = {() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && { flex: 1 }}
    />
  )
}

export default TodoList
```

TodoListView 컴포넌트에서 실제로 할 일 리스트를 표시하는 컴포넌트.

<br>

```js
import { React, useContext } from 'react'
//...
import { TodoListContext } from '../../../Context/TodoListContext'
//...
const TodoList = () => {
  const { todoList, removeTodoList } = useContext(TodoListContext)

  return (
    //...
  )
}

export default TodoList
```

Context 를 사용하기 위해 useContext 함수를 불러와, 사용하고자 하는 Context 를 초기값으로 설정하고, 해당 Context 에서 사용하고자 하는 값들을 불러와 사용할 수 있다. 여기서는 TodoListContext 를 초기값으로 설정.

TodoListContext 안에서 사용하고자 하는 todoList 와 removeTodoList 를 불러온 상태.

<br>

```js
const TodoList = () => {
	//...
  return (
    <Container 
      data = {todoList}
      keyExtractor={(item, index) => `todo-${index}`}
      ListEmptyComponent = {<EmptyItem />}
      renderitem={({item, index}) => (
        <TodoItem 
          text = {item}
          onDelete = {() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && { flex: 1 }}
    />
  )
}
```

TodoList 컴포넌트는 리액트 네이티브의 리스트 뷰 중 하나인 FlatList 컴포넌트를 사용.

FlatList 컴포넌트는 Props 를 전달하여 사용할 수 있다. 

- data : 리스트 뷰에 표시할 데이터의 배열
- keyExtractor: 리액트에서 반복적으로 동일한 컴포넌트를 표시하기 위해서는 컴포넌트의 키 값을 설정해야 한다. 즉, keyExtractor 는 FlatList 에서 반복적으로 표시하는 Item 에 키 값을 설정하기 위한 Props 이다.
- ListEmptyComponent: 주어진 배열에 데이터가 없을 경우 표시되는 컴포넌트.
- renderitem: 주어진 배열에 데이터를 사용하여 반복적으로 표시할 컴포넌트
- contentContainerStyle={todoList.length === 0 && { flex: 1 }} : 표시할 데이터가 없는 경우, ListEmptyComponent 의 컴포넌트가 화면에 표시되지만, 이 컴포넌트도 하나의 리스트 아이템으로 표시되기 때문에, 전체 화면으로 표시되지 않는다. 이 컴포넌트를 전체 화면으로 표시하기 위해 {flex: 1} 을 설정한 상태.

RN 은 CSS 의 flexbox 를 사용하여 화면 레이아웃을 설정한다. 

<br>

### TodoList 의 EmptyItem 컴포넌트

```js
import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Label = Styled.Text``

const EmptyItem = () => {
  return (
    <Container>
      <Label>하단에 "+" 버튼을 눌러 새로운 할 일을 등록해 본다.</Label>
    </Container>
  )
}

export default EmptyItem
```

- 데이터가 없을 때, 데이터를 추가하도록 안내하는 문구를 단순히 가운데 정렬로 표시한 컴포넌트.

<br>

### TodoItem 컴포넌트

```js
import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.View`
  flex-direction: row;
  background-color: #FFF;
  margin: 4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`

const Label = Styled.Text`
  flex: 1;
`

const DeleteButton = Styled.TouchableOpacity``

const Icon = Styled.Image`
  width: 24px;
  height: 24px;
`

const TodoItem = ({text, onDelete}) => {
  <Container>
    <Label>{text}</Label>
    <DeleteButton onPress={onDelete}>
      <Icon source={require('../../../../Assets/Images/remove.png')} />
    </DeleteButton>
  </Container>
}

export default TodoItem
```

- 이 컴포넌트느 TodoList 컴포넌트로부터 할 일 데이터 하나를 전달받아 화면에 표시한다. 
- 삭제 아이콘 클릭 시, 데이터를 삭제한다.



<br>

### AddTodo 컴포넌트

```js
import React, { useState } from 'react'

import AddButton from './AddButton'
import TodoInput from './TodoInput'

const AddTodo = () => {
  const [showInput, setShowInput] = uweState(false)
  return (
    <>
      <AddButton onPress={() => setShowInput(true)} />
      {showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}
    </>
  )
}

export default AddTodo
```

`{showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}` 할 일 입력을 완료하면, 해당 컴포넌트를 숨길 수 있도록 설정.

<br>

### AddButton 컴포넌트

```js
import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  align-self: center;
  justify-content: flex-end;
`

const ButtonContainer = Styled.TouchableOpacity`
  box-shadow: 4px 4px 8px #999;
`

const Icon = Styled.Image``

const AddButton = ({onPress}) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('../../../../Assets/Images/add.png')} />
      </ButtonContainer>
    </Container>
  )
}

export default AddButton
```

- 단순 이미지 버튼 컴포넌트.

<br>

### TodoInput 컴포넌트

```js
import React from 'react'
import Styled from 'styled-components/native'

import Background from './Background'
import TextInput from './TextInput'

const Container = Styled.KeyboardAvoidingView`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: flex-end;
`

const TodoInput = ({hideTodoInput}) => {
  return (
    <Container behavior="padding">
      <Background onPress={hideTodoInput} />
      <TextInput hideTodoInput={hideTodoInput} />
    </Container>
  )
}

export default TodoInput
```

- 할 일 추가 버튼을 선택 했을 때, 표시될 TodoInput 컴포넌트.

< br>

### Background 컴포넌트

```js
import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.TouchableWithoutFeedback`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const BlackBackground = Styled.View`
  background-color: #000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
`

const Background = ({onPress}) => {
  return (
    <Container onPress={onPress}>
      <BlackBackground />
    </Container>
  )
}

export default Background
```

- 단순히 검은색 배경의 투명도를 가지는 뷰 컴포넌트.

<br>

### Context 에 데이터를 추가하는 TextInput 컴포넌트

```js
import React, { useContext } from 'react'
import Styeld from 'styled-components/native'

import { TodoListContext } from '../../../../../Context/TodoListContext'

const Input = Styeld.TextInput`
  width: 100%;
  height: 40px;
  background-color: #FFF;
  padding: 0px 8px;
`

const TextInput = ({hideTodoInput}) => {
  const { addTodoList } = useContext(TodoListContext)
  return (
    <Input 
      autoFocus={true}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="할 일을 입력한다."
      returnKeyType="done"
      onSubmitEditing={({nativeEvent}) => {
        addTodoList(nativeEvent.text)
        hideTodoInput()
      }}
    />
  )
}

export default TextInput
```

