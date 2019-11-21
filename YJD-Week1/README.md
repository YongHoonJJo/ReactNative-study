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

#### 02. Fortune Lotto

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

