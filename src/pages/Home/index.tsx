import { Play } from "@phosphor-icons/react";
import { useForm } from 'react-hook-form'; //por padrao hook form nao traz nada de validação. precisa usar zod ou outra lib
import { zodResolver } from '@hookform/resolvers/zod'; //resolver para usar zod com hook form
import * as zod from 'zod';


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

export function Home() {
  
  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  }); //register retorna funçoes como onChange, onBlur. Watch monitora o valor de um campo

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset(); //funcao do hook form para resetar os valores do form
  }

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
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
