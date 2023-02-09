import styled from 'styled-components'

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
