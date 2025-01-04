import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer, TaskInput, MinutesInput } from "./style";
import * as zod from "zod";
import { useForm } from "react-hook-form";


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe uma tarefa"),
  minutesAmount: zod.number().min(5).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

// infer no zod é uma função que pega o tipo de um schema. Integrando com o ts

export function NewCycleForm() {

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  }); //register retorna funçoes como onChange, onBlur. Watch monitora o valor de um campo
    return (
        <FormContainer>
          <label htmlFor="task">
          Vou trabalhar em
          </label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            disabled={!!activeCycle}
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5} //padrao do html para inputs do tipo number
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
    )
}