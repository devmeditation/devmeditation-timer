# Arquivo de ajuda para configurações

Author: Dev Meditation

### Install Styled-Components
```
npm i styled-components
npm i @types/styled-components -D
```
 - Sobre escrevendo tipagem
 - Criando arquivo para as tipagens: *@types/styled.d.ts*
 - Nesse arquivo eu crio uma variável *ThemaType* que pega a tipagem do meu tema

 arquivo *styled.d.ts*
```js
import 'styled-components'
import { defaultTheme } from '../styles/themes/defaults'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

Envolver o APP como o *ThemeProvider* do styled-components

```js
<ThemeProvider theme={defaultTheme}>
  
</ThemeProvider>
```

- Criando estilos globais para todo o APP
- Crio um arquivo chamado *global.ts*

```js
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle``
```

### INSTALL Eslint
```
npm i eslint -D

npm i @rocketseat/eslint-config -D

ou

npx eslint --init
```

- criar arquivo de configuração *.eslintrc.json* na raiz do projeto
```json
{
  "extends": "@rocketseat/eslint-config/react"
}
```

- como testa se o Eslint esta bem configurado
- roda o comando para checar arquivos **.ts** e **.tsx**
- **src** é a pasta com os fontes do meu projeto
```bach
npx eslint src --ext .ts,.tsx
```

para corrigir todos os erros do projeto que o ESLINT encontrar basta rodar
```bach
npx eslint src --ext .ts,.tsx --fix
```

### INSTALL react-router-dom
```
npm i react-router-dom
npm install @hookform/resolvers
```

### INSTALL ZOD
```
npm i zod
```

- para criar uma pagina de layout, devemos criar um componente  react e dentro dele colocar  **<Outlet />** que vem do *react-router-dom* e serve para add todo o conteudo da pagina de layout na paginar filhas

###
- [Styled Components](https://styled-components.com)
- [Eslint](https://eslint.org/)
- [react-route-dom](https://reactrouter.com/)

### Para estilizar a barra de rolagem
```css
  ::-webkit-scrollbar              { }
  ::-webkit-scrollbar-button       { }
  ::-webkit-scrollbar-track        { }
  ::-webkit-scrollbar-track-piece  { }
  ::-webkit-scrollbar-thumb        { }
  ::-webkit-scrollbar-corner       { }
  ::-webkit-resizer                { }
```

## React Hook Form
trabalha com formularios controlled e uncrontrolled

- [React Hook Form](https://react-hook-form.com/)

```
npm i react-hook-form
```

