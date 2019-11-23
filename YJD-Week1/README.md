## YJD CodeLab Week 01

### 00. Initial setting

1. expo cli 설치

```
$ npm i -g expo-cli
```

<br>

2. App Store 에서 Expo 앱 설치
3. 프로젝트 설치

```
$ expo init <project-name>
```

<br>

### 01. Fortune Cookie

<img src='https://user-images.githubusercontent.com/13485924/69348122-00324900-0cb9-11ea-9e6d-9ceaf86ae183.PNG' width=200px>

#### ReactNative API

- Text
  - <https://facebook.github.io/react-native/docs/text>
- Image
  - <https://facebook.github.io/react-native/docs/image>

<br>

### 02. Fortune Lotto

<img src='https://user-images.githubusercontent.com/13485924/69348121-00324900-0cb9-11ea-8ca7-2068c270b0c2.PNG' width=250px />

#### Package

- underscore

  ```js
  let numbers = [];
  _.times(45, n => numbers.push(n+1))
  numbers = _.shuffle(numbers)
  numbers.length = 6
  numbers = _.sortBy(numbers)
  ```

<br>

### 03. Lotto

<img src='https://user-images.githubusercontent.com/13485924/69349848-d9294680-0cbb-11ea-84f6-8725fa16f3d2.PNG' width=250px />

#### Concept

-	Component, props
-	Conditional Styling

<br>

### 04. PassBank

<img src='https://user-images.githubusercontent.com/13485924/69480614-5c79a200-0e4c-11ea-9cea-5e8c22d68c36.PNG' width=250px />

#### ReactNative API

- Button
  - <https://facebook.github.io/react-native/docs/button>
  - `title` 프로퍼티로 버튼내용 입력. 이벤트는 `onPress`

#### Hooks

- useState()

<br>

### 05. Magic Conch

<img src='https://user-images.githubusercontent.com/13485924/69481548-a915ab00-0e55-11ea-9343-82a5a81869a5.PNG' width=250px />

#### ReactNative API

- TouchableOpacity
  - <https://facebook.github.io/react-native/docs/touchableopacity>
  - `<Image />` 를 버튼으로 만들 때 사용.
  - onPress 이벤트

 

<br>

#### Reference

<https://github.com/GrotesQ/Codelab-React-Native-4th>