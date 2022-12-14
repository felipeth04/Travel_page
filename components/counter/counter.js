import { useState, useRef, useEffect } from "react";

const Counter = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('Nov 12, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            if(distance < 0){

            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
            }
        },(1000 * 60))
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        };
    }, [])

    return (
        <div className="container__counter">
            <div className="timer">
                <p>{timerDays}</p>
                <span>Días</span>
            </div>
            <div className="timer">
                <p>{timerHours}</p>
                <span>Hrs</span>
            </div>
            <div className="timer">
                <p>{timerMinutes}</p>
                <span>Min</span>
            </div>
        </div>
    )
}

export default Counter;