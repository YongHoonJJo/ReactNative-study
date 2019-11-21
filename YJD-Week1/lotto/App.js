import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'underscore'

let numbers = [];
_.times(45, n => numbers.push(n+1))
numbers = _.shuffle(numbers)
numbers.length = 6
numbers = _.sortBy(numbers)

const Ball = (props) => {
  const ballStyle = {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  }
  const textStyle = {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
  if(props.number < 16) ballStyle.backgroundColor = '#f00'
  else if(props.number < 31) ballStyle.backgroundColor = '#00f'
  else ballStyle.backgroundColor = '#000'

  return (
    <View style={ ballStyle }>
      <Text style={ textStyle }>{props.number}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Ball number={numbers[0]} />
      <Ball number={numbers[1]} />
      <Ball number={numbers[2]} />
      <Ball number={numbers[3]} />
      <Ball number={numbers[4]} />
      <Ball number={numbers[5]} />
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
