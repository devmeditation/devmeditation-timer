import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
  TwoPointsContdown,
} from './home.styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Estudando:</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Nome da matéria ou assunto"
          />
          <datalist id="task-suggestions">
            <option value="Matemática" />
            <option value="Gramática" />
            <option value="Literatura" />
            <option value="Ciências" />
            <option value="Arte" />
            <option value="Música" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={50}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          {/* <span>0</span> */}
          <span>00</span>
          <TwoPointsContdown>
            <span></span>
            <span></span>
          </TwoPointsContdown>
          {/* <span>0</span> */}
          <span>00</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Iniciar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
