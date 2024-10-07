import {useEffect, useState} from "react";
import {getRandomQuote} from "./RandomQuote.tsx";

let lastRefreshedMinute: number;
let lastRefreshedSecond: number;

export const Quote = () => {

    const [quote, setQuote] = useState(getRandomQuote);

    useEffect(() => {
        resetLastRefreshedTime();

        setInterval(refreshQuoteIfSetTimePassed, 200);
        document.addEventListener("keydown", keyDownEvent);
        document.addEventListener("keyup", keyUpEvent);
    }, []);

    function refreshQuoteIfSetTimePassed() {
        const current = new Date();

        // Refresh time
        if (current.getMinutes() != lastRefreshedMinute && current.getSeconds() == lastRefreshedSecond) {
            setQuoteRandom();
            resetLastRefreshedTime(1);
        }
    }

    function keyDownEvent(e: KeyboardEvent) {
        document.removeEventListener("keydown", keyDownEvent)
        e.stopPropagation();
        lastRefreshedSecond = 61; // Disable refresh
        setQuoteRandom();
    }

    function keyUpEvent() {
        document.addEventListener("keydown", keyDownEvent);
        resetLastRefreshedTime();
    }

    function setQuoteRandom() {
        setQuote(getRandomQuote);
    }

    function resetLastRefreshedTime(plusSecond: number = 0) {
        const current = new Date();
        lastRefreshedMinute = current.getMinutes();
        lastRefreshedSecond = current.getSeconds() + plusSecond % 60;
    }

    return <div className={"flex flex-col gap-[20px]"}>
        <p className={"font-p-medium text-[24px] text-white text-center whitespace-normal break-keep text-pretty"}>
            "{quote[0]}"
        </p>
        <p className={"font-p-medium text-[20px] text-white text-right"}>
            - {quote[1]}
        </p>
    </div>
}