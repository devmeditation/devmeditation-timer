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
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe no nome da matéria ou assunto'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo de estudos precisa ser de no mínimo 5 minutos.')
    .max(50, 'O ciclo de estudos precisa ser de no mánimo 50 minutos.'),
})

// criando tipagem automatica com o zod
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  muinutesAmount: number
  cycleStartDate: Date
}

export function Home() {
  const [cycle, setCycle] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycle.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.muinutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const secounds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      // atualizando o titulo da janela no navegador
      document.title = `${minutes}:${secounds}`
    }
  }, [minutes, secounds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.cycleStartDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      muinutesAmount: data.minutesAmount,
      cycleStartDate: new Date(),
    }

    setCycle((preState) => [...preState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()

    // mensagens de error
    // console.log(formState.errors)
  }

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
          <span>{minutes}</span>
          <TwoPointsContdown>
            <span></span>
            <span></span>
          </TwoPointsContdown>
          <span>{secounds}</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isButtonSubmitDisabled} type="submit">
          <Play size={24} />
          Iniciar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
