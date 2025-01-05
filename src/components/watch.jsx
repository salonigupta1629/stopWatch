import { useState } from "react";

const StopWatch = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
    const [status, setStatus] = useState();

    let updhr = time.hr;
    let updmin = time.min;
    let updsec = time.sec;
    let updmilli = time.milli;

    const myFun = () => {
        if (updmilli === 100) {
            updmilli = 0;
            updsec++;
        }
        if (updsec === 60) {
            updsec = 0;
            updmin++;
        }
        if (updmin === 60) {
            updmin = 0;
            updhr++;
        }
        updmilli++;
        return setTime({ hr: updhr, min: updmin, sec: updsec, milli: updmilli })
    }
    const handleStart = () => {
        myFun();
        setStatus(setInterval(myFun, 10));
    }
    const handlePause = () => {
        clearInterval(status);
    }
    const resetAll = () => {
        clearInterval(status);
        setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
    }
    return (
        <div className="container">
            <p className="time">{time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli}</p>
            <div className="btns">
                <button className="start" onClick={handleStart}>Start</button>
                <button className="pause" onClick={handlePause}>Pause</button>
                <button className="reset" onClick={resetAll}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatch;