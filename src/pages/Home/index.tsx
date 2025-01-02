import { Play } from "@phosphor-icons/react";
import { useForm } from 'react-hook-form'; //por padrao hook form nao traz nada de validação. precisa usar zod ou outra lib
import { zodResolver } from '@hookform/resolvers/zod'; //resolver para usar zod com hook form
import * as zod from 'zod';
import { useState } from "react";


import {
  FormContainer,
  HomeContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesInput,
} from "./style";

const newCycleFormValidationSchema = zod.object({

  task: zod.string()
    .min(1, 'Informe uma tarefa'),
  minutesAmount: zod.number()
    .min(5)
    .max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema> 

// infer no zod é uma função que pega o tipo de um schema. Integrando com o ts

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  
  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  }); //register retorna funçoes como onChange, onBlur. Watch monitora o valor de um campo

  function handleCreateNewCycle(data: NewCycleFormData) {

    const id = String(new Date().getTime())
    
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }
   
    setCycles((state) => [...cycles, newCycle]) 
    //sempre que atualizar estado com base no estado anterior, usar arrow function
    // sao as closures que garantem que o estado está atualizado
    setActiveCycleId(id)
    
    reset(); //funcao hookform reseta os valores do form
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0') 
  const seconds = String(secondsAmount).padStart(2, '0') 

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">
          Vou trabalhar em
          </label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
          />

            <datalist id="task-suggestions">
                <option value="Projeto 1"></option>
                <option value="Projeto 2"></option>
                <option value="Projeto 3"></option>
            </datalist>
          
          <label htmlFor="minutesAmount">
          durante
          </label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5} //padrao do html para inputs do tipo number
            min={5}
            max={60}
            {...register('minutesAmount', {valueAsNumber: true})}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
