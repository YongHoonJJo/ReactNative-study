import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.TouchableOpacity``
const Icon = Styled.Image``

const Button = ({iconName, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Icon 
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