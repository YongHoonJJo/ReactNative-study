## First App

```
$ npx react-native init FirstApp
```

### 주로 사용되는 파일 및 폴더

./index.js : 리액트 네이티브 프로젝트의 시작파일. 이 코드를 시작으로 리액트 네이티브의 자바스크립트 코드가 번들링 된다.

./App.js : 첫 화면의 소스코드

./android : 안드로이드 프로젝트가 담겨 있는 폴더.

./android/app/build.gradle : 안드로이드 앱을 빌드, 배포할 때 사용하는 파일

./androind/app/src/main/java/com/firstapp/MainActivity.java, MainApplication.java : 안드로이드 앱의 메인 파일

./android/app/src/main/res/ : 안드로이드 앱의 아이콘 또는 시작화면(Launch Screen) 등의 리소스를 관리하는 폴더.

./ios : iOS 프로젝트가 담겨있는 폴더.

./ios/FirstApp/AppDelegate.h, AppDelegate.m : iOS 앱의 메인 파일들

./ios/FirstApp/Info.plist : iOS 프로젝트의 설정파일

./ios/FirstApp.xcworkspace : iOS의 프로젝트를 Xcode 로 시작하기 위한 파일

./ios/FirstApp/Podfile : iOS에서는 코코아포드라는 의존성 관리자를 사용하여 라이브러리를 관리하는데, Object-C, Swift 에서 npm 과 같은 역할을 한다. Podfile 애 대응하는 것이 package.json 이다.

<br>

위의 파일 및 폴더들이 프로젝트를 진행하면서 자주 수정하게 될 파일 및 폴더들이다. 네이티비 앱을 빌드, 배포할 때 또는 네이티브 기능을 가진 라이브러리와 연동할 때는 네이티브의 파일, 폴더들을 다뤄야 한다.

<br>

### index.js

```js
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

`AppRegistry.registerComponent` 를 통해 네이티브 브릿지에서 사용할 모듈을 지정.

첫 번째 매개변수는 모듈 이름을 지정하며, 두 번째 매개변수에는 처음으로 렌더링 될 컴포넌트를 지정한다.

<br>

### App.js

```jsx
import React from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView,
  View, Text, StatusBar,
} from 'react-native';
```

리액트 네이티브는 HTML 태그 대신, 리액트 네이티브에서 정한 특별한 태그(컴포넌트)만 사용할 수 있다.

**SafeAreaView** 는 Notch Design 에서 상단에 Status Bar 와 하단에 홈 버튼의 영역을 제외한 영역에 콘텐츠를 표시할 때 사용하는 컴포넌트이다. 즉, 상태 바와 홈 버튼 영역에는 컨텐츠가 표시되지 않는다. **View** 컴포넌트를 사용하면 해당 영역까지 컨텐츠가 표시된다. 

**StyleSheet** 는 리액트 네이티브의 컴포넌트(태그)에 스타일을 적용할 대 사용한다. RN 에서 스타일을 적용하기 위해서는 인라인 스타일과 StyleSheet 를 사용하는 방법이 있다.

**ScrollView** 는 화면 스크롤이 가능한 컴포넌트이다. 그 외 화면 스크롤이 가능한 컴포넌트는 FlatList, ScrollView, SectionList 등이 있다. 

**View** 컴포넌트를 통해 전체적인 레이아웃을 잡는다.

**Text** 컴포넌트를 통해 글자를 표시할 수 있다.

**StatusBar** 는 화면에 표시되는 컴포넌트는 아니며, 상단에 있는 상태바를 숨기거나, 색상을 변경하는 데 사용된다. 

<br>

```jsx
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
```

새롭게 추가된 시작화면에 대한 컴포넌트들로 실제 개발에서는 사용하지 않는다고 함.

<br>

```jsx
onst App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
```

**\<Fragment> 컴포넌트**. **<>** 와 같이 표현 가능.

<br>

리액트 네이티브에는 View, Text 컴포넌트 이외에도, Image, TextInput, Button, TouchableHighlight, Picker, Slider, Switch, FlatList, SectionLIst 등이 있다. 

<br>

### 스타일링

StyleSheet.create() 함수를 사용하여 스타일 객체를 만든 후, 스타일을 적용하고 싶은 부분에서 `<View style={styles.container}>` 와 같이 스타일 객체를 할당하는 방법과, StyleSheet 를 사용하지 않고, 직접 스타일 객체를 인라인으로 넣는 방법이 존재. 아래는 인라인 스타일.

```jsx
<View style={{marginTop: 32,paddingHorizontal: 24}}></View>
```

<br>

### 추가 라이브러리 - 타입스크립트

```
$ npm i typescript @types/react @types/react-native -D
```

**tsconfig.json** 추가

```json
{
  "compilerOptions": {
    "allowJS": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

혹은, 최초 프로젝트 설치시 설정 가능하다.

```
$ react-native init FirstApp --template typescript
```

<br>

### 추가 라이브러리 - Styled Components

인라인, StyleSheet 이외에 스타일을 적용하는 방법을 제공해준다. 

```
npm i styled-components
npm i @types/styled-components -D
```

<br>

### 추가 라이브러리 - 절대 경로로 컴포넌트 추가

```
npm i -D babel-plugin-root-import
```

**babel.config.js** 

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      }
    ]
  ]
}
```

**tsconfig.json**

```json
{
  "compilerOptions": {
    ...,
    "baseUrl": "./src",
    "path": {
      "~/*": ["*"]
    }
  },
	"exclude": [ ... ]
}
```

`~` 를 `src` 폴더와 매핑시켜싸.









<br>

#### Referece

<http://m.yes24.com/Goods/Detail/82895471>

