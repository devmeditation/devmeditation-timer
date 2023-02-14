import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-wrap: wrap;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  background-image: linear-gradient(
    to bottom,
    rgba(140, 1, 1, 0.5),
    rgba(140, 1, 1, 0.7),
    ${(props) => props.theme['fire-900']}
  );

  border-bottom: 0.5rem solid ${(props) => props.theme.white};
  border-radius: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 800px) {
    padding: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
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
  border-bottom: 2px solid ${(props) => props.theme['fire-500']};

  transition: all 0.3s linear;

  &:focus {
    background: ${(props) => props.theme['fire-600']};
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
