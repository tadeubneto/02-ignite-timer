import { useEffect, useState } from "react";
import { CountdownContainer, Separator } from "../../style";
import { differenceInSeconds } from "date-fns"; 'date-fns';

export function Countdown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeCycle.startDate);

          if(secondsPassed >= totalSeconds){  
            setCycles((state) => 
              state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                  return { ...cycle, finishedAt: new Date() };
                } else {
                  return cycle;
                }
            }));

            setAmountSecondsPassed(totalSeconds);
            clearInterval(interval);

          } else {            
            setAmountSecondsPassed(secondsPassed);         
          }
      }, 1000);
    }

    return () => {      
      clearInterval(interval);
    };

  }, [activeCycle, totalSeconds, activeCycleId]);
  
    return (
        <CountdownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountdownContainer>
    )
}