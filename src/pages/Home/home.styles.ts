import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  margin-bottom: 4rem;

  form {
    min-height: 38vh;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    position: relative;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 3px 3px 10rem -15px ${(props) => props.theme['fire-600']};
  }

  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;

    form {
      width: 80%;
      height: 80%;
      min-height: 65vh;
      padding: 3rem;
      gap: 3.5rem;
      box-shadow: 3px 3px 20rem -15px ${(props) => props.theme['fire-500']};
    }
  }
`

export const BaseCountdownButton = styled.button`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);

  border: 0;
  padding: 1.5rem 6rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:active {
    transform: scale(0.98) translateY(50%);
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme['yellow-600']},
    ${(props) => props.theme['yellow-900']}
  );
  color: ${(props) => props.theme['gray-100']};
  box-shadow: 3px 3px 2rem -15px ${(props) => props.theme['yellow-500']};

  &:disabled {
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-500']};
    cursor: not-allowed;
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme['yellow-500']},
      ${(props) => props.theme['yellow-600']},
      ${(props) => props.theme['yellow-500']}
    );
    box-shadow: 3px 3px 2rem -10px ${(props) => props.theme.black};
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme['fire-600']},
    ${(props) => props.theme['fire-900']}
  );
  color: ${(props) => props.theme['gray-100']};
  box-shadow: 3px 3px 2rem -15px ${(props) => props.theme['fire-500']};

  &:disabled {
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-500']};
    cursor: not-allowed;
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme['fire-500']},
      ${(props) => props.theme['fire-600']},
      ${(props) => props.theme['fire-500']}
    );
    box-shadow: 3px 3px 2rem -10px ${(props) => props.theme.black};
  }
`
