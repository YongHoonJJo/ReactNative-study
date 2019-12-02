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
