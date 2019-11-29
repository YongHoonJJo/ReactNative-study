import React from 'react'
import { View } from 'react-native'

const Center = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      { props.children }
    </View>
  )
}

export default Center