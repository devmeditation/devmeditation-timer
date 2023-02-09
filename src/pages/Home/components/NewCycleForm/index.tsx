import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from './newCycleForm.styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <>
      <FormContainer>
        <label htmlFor="task">Estudando:</label>
        <TaskInput
          id="task"
          list="task-suggestions"
          placeholder="Nome da matéria ou assunto"
          disabled={!!activeCycle}
          {...register('task')}
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
          disabled={!!activeCycle}
          step={5}
          min={1}
          max={50}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </FormContainer>
    </>
  )
}
