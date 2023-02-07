import styled from 'styled-components'

export const HistoryContainer = styled.section`
  padding: 3.5rem;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    opacity: 0.75;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-height: 100px;
    box-shadow: 3px 3px 2rem -10px ${(props) => props.theme.black};

    th {
      padding: 1rem;
      text-align: left;
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-100']};
      background-image: linear-gradient(
        to bottom,
        ${(props) => props.theme['fire-900']},
        ${(props) => props.theme['fire-700']},
        ${(props) => props.theme['fire-600']}
      );

      &:first-child {
        border-top-left-radius: 0.5rem;
        padding-left: 1rem;
      }
      &:last-child {
        border-top-right-radius: 0.5rem;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 0.75rem;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.6;
      opacity: 0.9;
      border-top: 4px solid ${(props) => props.theme['fire-900']};
      color: ${(props) => props.theme.white};
      background-image: linear-gradient(
        to bottom,
        ${(props) => props.theme['fire-800']},
        ${(props) => props.theme['fire-800']},
        ${(props) => props.theme['fire-800']}
      );

      &:first-child {
        padding-left: 1rem;
        width: 50%;
      }
      &:last-child {
        border-bottom: 0.5rem solid ${(props) => props.theme['fire-100']};
        padding-right: 1.5rem;
      }
    }
  }
`
