# Expo Rest Template

# Instalação

- `git clone https://github.com/lucasrocali/expo-ts-rest-template.git nome-projeto`
- `cd nome-projet` (ou abrir pelo VC Code)
- `npm install` (ou `yarn install`)
- `npm start`

Full typing expo/react-native project integrated with :

- Typescript
- Prettier
- Eslint
- Styled Components
- Storybook
- React Navigation
- Jest
- i18n
-

## Scripts and refs

- lint and prettier

https://github.com/vasilestefirta/react-native-eslint-prettier-example

```
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-react eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-plugin-react prettier
```

- jest

https://jestjs.io/docs/getting-started
https://react-native-async-storage.github.io/async-storage/docs/advanced/jest/

- styled components

https://styled-components.com/docs/basics#installation
https://styled-components.com/docs/advanced
https://www.figma.com/community/file/1029506782158027808
https://docs.expo.dev/versions/latest/sdk/font/
https://www.npmjs.com/package/@expo-google-fonts/inter

```
yarn add styled-components
yarn add -D @types/styled-components-react-native
expo install @expo-google-fonts/inter expo-font expo-app-loading
```

- storybook

https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/

```
npx -p @storybook/cli sb init --type react_native
yarn add -D @storybook/addon-ondevice-actions @storybook/addon-ondevice-knobs
```

https://github.com/elderfo/react-native-storybook-loader

```
yarn add react-native-storybook-loader -D
```

- react-navigation

https://reactnavigation.org/docs/getting-started/
https://reactnavigation.org/docs/tab-based-navigation

```
yarn add @react-navigation/native
expo install react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
yarn add @react-navigation/bottom-tabs
```

- react-query

- auth context

https://medium.com/@devluispereira/react-context-api-typescript-507eec884549

```
expo install @react-native-async-storage/async-storage
```

- hygen

https://www.hygen.io/docs/quick-start

```
hygen init self
hygen generator new component
hygen generator new screen
```

- msw

https://mswjs.io/docs/getting-started/install

```
yarn add msw --dev

```

- i18n

https://docs.expo.dev/versions/latest/sdk/localization/

```
expo install expo-localization
yarn add i18n-js
yarn add -D @types/i18n-js
```
