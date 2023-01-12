# Configuring themes wit Styled-Companets

esse projeto serve para me ajuda a lembrar como configurar Temas no styled-compoinents

## 

Author: Dev Meditation

### Install 
```
npm i styled-components
npm i @types/styled-components -D
```

### sobreescrevendo tipagem
 - Criando arquivo para as tipagens: @types/styled.d.ts
 - Nesse arquivo eu crio uma variável ThemaType que pega a tipagem do meu tema

 conteúdo do arquivo styled.d.ts
```js
import 'styled-components'
import { defaultTheme } from '../styles/themes/defaults'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

para que o apleicativo use o tema, tenho que envolver ele pelo ThemeProvider do styled-components
```js
<ThemeProvider theme={defaultTheme}>
  ...
</ThemeProvider>
```

exemplo:
```js
<ThemeProvider theme={defaultTheme}>
  <GlobalStyle />
  <Button />
  <Button variant="secondary" />
  <Button variant="danger" />
  <Button variant="success" />
</ThemeProvider>
```

- Criando estilos globais para todo o APP
- Crio um arquivo chamado *global.ts*

global.ts
```js
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle``
```

exemplo:
```js
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
```

###
- [Styled Components](https://styled-components.com)


