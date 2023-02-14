import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 5rem;
  line-height: 5rem;
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

  @media (min-width: 800px) {
    font-size: 10rem;
    line-height: 8rem;
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
