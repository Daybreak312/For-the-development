import {useEffect, useState} from "react";
import {getRandomQuote} from "./RandomQuote.tsx";

export const Quote = () => {

    const [quote, setQuote] = useState(getRandomQuote);
    const [intervalId, setIntervalId] = useState(0);

    function setQuoteRandom() {
        setQuote(getRandomQuote);
    }

    function keyDownEvent(e: KeyboardEvent) {
        document.removeEventListener("keydown", keyDownEvent)
        clearInterval(intervalId);
        e.stopPropagation();
        setQuoteRandom();
    }

    function addKeyPressEventListener() {
        document.addEventListener("keydown", keyDownEvent);
        setIntervalId(setInterval(setQuoteRandom, 60000));
    }

    useEffect(() => {
        addKeyPressEventListener();
        document.addEventListener("keyup", addKeyPressEventListener);

        setIntervalId(setInterval(setQuoteRandom, 60000));
    }, []);

    return <div className={"flex flex-col gap-[20px]"}>
        <p className={"font-p-medium text-[24px] text-white text-center whitespace-normal break-keep text-pretty"}>
            "{quote[0]}"
        </p>
        <p className={"font-p-medium text-[20px] text-white text-right"}>
            - {quote[1]}
        </p>
    </div>
}