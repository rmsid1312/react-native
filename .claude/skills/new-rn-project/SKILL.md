---
name: new-rn-project
description: 이 repo에 새 React Native(Expo) 프로젝트 폴더를 만들고 NativeWind + jsconfig까지 세팅. "새 프로젝트", "새 section 만들어", "프로젝트 생성" 요청 시 사용.
---

# 새 RN 프로젝트 생성 (Expo + NativeWind + jsconfig)

repo 루트(`react-native/`)에 새 폴더 생성. 기준 구성 = `section12` 초기 상태.

## 입력

- 프로젝트 이름(`<name>`). 없으면 물어봄. 예: `section13`.
- 이미 존재하는 폴더면 중단하고 알림.

## 절차

repo 루트에서 실행.

1. 생성 (JS blank 템플릿):
   ```bash
   npx create-expo-app@latest <name> --template blank
   ```
2. `<name>/`로 이동 후 의존성 설치 (`expo install` 필수, SDK 호환 버전 맞춤):
   ```bash
   npx expo install nativewind react-native-reanimated react-native-worklets react-native-safe-area-context babel-preset-expo
   npx expo install tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11 -- --save-dev
   ```
3. 아래 파일 작성.

`jsconfig.json` — 없으면 RN 타입 자동완성 안 됨 (RN 타입이 `exports`로만 노출, `moduleResolution: bundler` 필요):
```json
{
  "extends": "expo/tsconfig.base"
}
```

`babel.config.js`:
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: ["react-native-worklets/plugin"],
  };
};
```

`metro.config.js`:
```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

`tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

`global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`App.js` (덮어쓰기):
```js
import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        NativeWind 동작 확인
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

4. `components/`, `screens/` 빈 폴더 생성 (`.gitkeep` 없이).
5. 중첩 git 제거: create-expo-app이 `<name>/.git` 만들었으면 삭제. 이 repo가 상위 git임.

## 검증

- `npx expo-doctor` 통과.
- `npx expo install --check` 버전 불일치 없음.
- `npx tsc --noEmit -p jsconfig.json` 은 선택 (JS 프로젝트라 에러 많을 수 있음, 실패해도 무시 가능).
- 사용자에게 `npx expo start` 후 "NativeWind 동작 확인" 파란 굵은 글씨 확인 요청.
- 자동완성 안 되면: VS Code `TypeScript: Restart TS Server`.

## 주의

- `npm install`/`yarn add` 직접 쓰지 말 것 → 항상 `npx expo install`.
- Expo SDK 버전 바뀌면 NativeWind 설정 달라질 수 있음 → 설치된 `expo` major 확인 후 https://www.nativewind.dev/docs/getting-started/installation 대조.
- `ios/`, `android/` 직접 만들지 말 것 (CNG).
