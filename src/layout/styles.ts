import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  /* min-height: calc(100vh - 10rem); */
  margin: 5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  background-image: url(/01_student.jpg),
    linear-gradient(
      to right,
      ${(props) => props.theme['fire-900']},
      ${(props) => props.theme['fire-200']},
      ${(props) => props.theme['fire-700']}
    );
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position-x: 0%;
  background-position-y: 40%;
  background-size: 140%;
  box-shadow: 3px 3px 2rem -15px ${(props) => props.theme['fire-300']};
  border-radius: 1rem;
`
