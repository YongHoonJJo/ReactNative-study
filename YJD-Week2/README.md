## YJD CodeLab Week 02

### 06. H-Group

<img src='https://user-images.githubusercontent.com/13485924/69556772-b6af6a00-0fe8-11ea-9222-5ce61c95e3ef.PNG' width=250px>

#### H-Group

```js
export default const HGroup = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      { props.children }
    </View>
  )
}
```

`HGroup` 컴포넌트로 감싼 컴포넌트 블럭들은 가로방향으로 나열이 된다. 

<br>

#### Spacer

```js
export default const Spacer = (props) => {
  const width = props.width || 0
  const height = props.height || 0

  return (
    <View style={{ width, height }}>
      { props.children }
    </View>
  )
}
```

`Spacer` 컴포넌트를 통해 margin 없이 컴포넌트를 조립할 수 있게 된다.

<br>

위의 화면은 크게 3개의 컴포넌트로 구성되어 있다. (붙어있는 볼 / 공백 / 떨어져있는 볼)

떨어져있는 볼에 대한 컴포넌트는 5개의 컴포넌트로 구성되어 있다. (볼 / 공백 / 볼 / 공백 / 볼)

<br>

