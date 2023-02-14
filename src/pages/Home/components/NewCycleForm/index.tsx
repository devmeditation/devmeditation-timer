import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from './newCycleForm.styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <>
      <FormContainer>
        <span>
          <label htmlFor="task">Estudar:</label>
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
        </span>

        <span>
          <label htmlFor="minutesAmount">durante:</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            disabled={!!activeCycle}
            step={5}
            min={5}
            max={50}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          minutos.
        </span>
      </FormContainer>
    </>
  )
}
