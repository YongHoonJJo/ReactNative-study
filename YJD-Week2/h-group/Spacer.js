import React from 'react'
import { View } from 'react-native'

// margin 없이 컴포넌트를 조립할 수 있게 된다.

const Spacer = (props) => {
  const width = props.width || 0
  const height = props.height || 0

  return (
    <View style={{ width, height }}>
      { props.children }
    </View>
  )
}

export default Spacer