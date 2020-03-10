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