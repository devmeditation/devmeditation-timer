import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 3px 0 5px 0 ${(props) => props.theme['fire-500']};
    border-radius: 4px; */
  }
  
  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  border-style, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  } 
  
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar              { }
  ::-webkit-scrollbar-button       { }
  ::-webkit-scrollbar-track        { }
  ::-webkit-scrollbar-track-piece  { }
  ::-webkit-scrollbar-thumb        { }
  ::-webkit-scrollbar-corner       { }
  ::-webkit-resizer                { }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['fire-900']};
    /* box-shadow: inset 0 0 5px ${(props) => props.theme['fire-100']};  */
    border-radius: 0.3rem;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: ${(props) => props.theme['fire-700']}; */
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme['fire-700']},
      ${(props) => props.theme['fire-600']},
      ${(props) => props.theme['fire-800']}
    );
    border-radius: 0.3rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /* background: ${(props) => props.theme['fire-800']}; */
    background-image: linear-gradient(
      to left,
      ${(props) => props.theme['fire-900']},
      ${(props) => props.theme['fire-500']},
      ${(props) => props.theme['fire-900']}
    );
  }
  ::-webkit-scrollbar-corner       { 
    /* background: ${(props) => props.theme['fire-800']}; */
    border-radius: 0.3rem;
    /* box-shadow: inset 0 0 5px ${(props) => props.theme['fire-100']};  */
  }

`
