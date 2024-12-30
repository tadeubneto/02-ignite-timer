import { Play } from "@phosphor-icons/react";
import {
  FormContainer,
  HomeContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesInput,
} from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">
          Vou trabalhar em
          </label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />

            <dataList id="task-suggestions">
                <option value="Projeto 1"></option>
                <option value="Projeto 2"></option>
                <option value="Projeto 3"></option>
            </dataList>
          
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
        <StartCountdownButton type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
