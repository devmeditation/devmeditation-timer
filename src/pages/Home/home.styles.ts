import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    align-items: center;

    width: 80%;
    height: 80%;
    padding: 3rem;
    position: relative;
    box-shadow: 3px 3px 20rem -15px ${(props) => props.theme['fire-500']};
    border-radius: 1rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.white};
  background-image: linear-gradient(
    to bottom,
    rgba(140, 1, 1, 0.5),
    rgba(140, 1, 1, 0.7),
    ${(props) => props.theme['fire-900']}
  );
  border-bottom: 0.5rem solid ${(props) => props.theme.white};
  border-radius: 0.5rem;

  padding: 0 1rem;
  font-size: 1.5125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  width: 100%;
  height: 2.5rem;
  border: 0;
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.white};

  transition: all 0.3s linear;

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme['fire-500']};
    border-radius: 4px;
  }

  &:disabled {
    opacity: 0;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme['fire-500']},
      rgba(140, 1, 1, 0.5),
      rgba(140, 1, 1, 0.7),
      ${(props) => props.theme['fire-900']}
    );
    box-shadow: 3px 6px 2rem -10px ${(props) => props.theme['fire-900']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const TwoPointsContdown = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  span {
    background: ${(props) => props.theme.white};
    opacity: 0.8;
    padding: 1rem 1rem;
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
