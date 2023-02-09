import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../..'
import { CountdownContainer, TwoPointsContdown } from './countdown.styles'

export function Countdown() {
  const { activeCycle, finishedCycle, amountSecondsPassed, setSecondsPassed } =
    useContext(CyclesContext)

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
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.cycleStartDate,
        )

        if (secondsDifference >= totalSeconds) {
          finishedCycle()
          clearInterval(interval)
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, finishedCycle, setSecondsPassed])

  return (
    <>
      <CountdownContainer>
        <span>{minutes}</span>
        <TwoPointsContdown>
          <span></span>
          <span></span>
        </TwoPointsContdown>
        <span>{secounds}</span>
      </CountdownContainer>
    </>
  )
}
