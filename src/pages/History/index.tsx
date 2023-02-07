import { HistoryContainer, HistoryList, TableContent } from './history.styles'

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
              <TableContent statusColor="green">
                <span>Concluido</span>
              </TableContent>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <TableContent statusColor="yellow">
                <span>Em andamento</span>
              </TableContent>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <TableContent statusColor="red">
                <span>Interrompido</span>
              </TableContent>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <TableContent statusColor="red">
                <span>Interrompido</span>
              </TableContent>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <TableContent statusColor="red">
                <span>Interrompido</span>
              </TableContent>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <TableContent statusColor="red">
                <span>Interrompido</span>
              </TableContent>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <TableContent statusColor="red">
                <span>Interrompido</span>
              </TableContent>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <TableContent statusColor="red">
                <span>Interrompido</span>
              </TableContent>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
