import { HistoryContainer, HistoryList, Status } from './style';

export function History() {
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
                        <tr>
                            <td>Tarefa</td>
                            <td>20min</td>
                            <td>Há 20min</td>
                            <td>
                            <Status statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20min</td>
                            <td>Há 20min</td>
                            <td>
                            <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20min</td>
                            <td>Há 20min</td>
                            <td>
                            <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20min</td>
                            <td>Há 20min</td>
                            <td>
                            <Status statusColor="yellow">Andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20min</td>
                            <td>Há 20min</td>
                            <td><Status statusColor='red'>Pausado</Status></td>
                           
                        </tr>
                    </tbody>
                </table>
            </HistoryList>

        </HistoryContainer>
    )
}