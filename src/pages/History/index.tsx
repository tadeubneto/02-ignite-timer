import { useContext } from 'react';
import { HistoryContainer, HistoryList, Status } from './style';
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../contexts/CyclesContext';

export function History() {

    const { cycles } = useContext(CyclesContext)
    return (
        <HistoryContainer>
            <h1>Meu histórioco</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Status</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                     {cycles.map(cycle => {
                        return(
                            <tr key={cycle.id}>
                            <td>{cycle.task}</td>
                            <td>{cycle.minutesAmount} minutos</td>
                            <td>
                                {formatDistanceToNow(cycle.startDate, {
                                addSuffix: true,
                                locale: ptBR

                            })
                                }</td>
                            <td>
                            {cycle.finishedAt && (
                                <Status statusColor='green'>Concluído</Status>
                            )}

                            {cycle.interruptedAt && (
                                <Status statusColor='red'>Interrompido</Status>
                            )}

                            {!cycle.finishedAt && !cycle.interruptedAt && (
                                <Status statusColor='yellow'>Em Andamento</Status>
                            )}
                            </td>
                        </tr>
                        )
                     })}
                      
                    </tbody>
                </table>
            </HistoryList>

        </HistoryContainer>
    )
}