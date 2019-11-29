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