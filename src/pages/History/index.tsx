import { HistoryContainer, HistoryList } from './history.styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Estudo</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
