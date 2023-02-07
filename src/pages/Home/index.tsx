import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
  TwoPointsContdown,
} from './home.styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe no nome da matéria ou assunto'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo de estudos precisa ser de no mínimo 5 minutos.')
    .max(50, 'O ciclo de estudos precisa ser de no mánimo 50 minutos.'),
})

// criando tipagem automatica com o zod
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, formState } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

  function handleCreateNewCycle(data) {}

  // mensagens de error
  console.log(formState.errors)

  const task = watch('task')
  const isButtonSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Estudando:</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Nome da matéria ou assunto"
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
            step={5}
            min={5}
            max={50}
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountdownButton disabled={isButtonSubmitDisabled} type="submit">
          <Play size={24} />
          Iniciar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
