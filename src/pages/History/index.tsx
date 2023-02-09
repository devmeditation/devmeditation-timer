import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, TableContent } from './history.styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.muinutesAmount} minutos</td>
                  <td>{cycle.cycleStartDate.toISOString()}</td>
                  {cycle.finishedDate && (
                    <TableContent statusColor="green">
                      <span>Concluido</span>
                    </TableContent>
                  )}

                  {cycle.interruptedDate && (
                    <TableContent statusColor="red">
                      <span>Interrompido</span>
                    </TableContent>
                  )}

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <TableContent statusColor="yellow">
                      <span>Em andamento</span>
                    </TableContent>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
