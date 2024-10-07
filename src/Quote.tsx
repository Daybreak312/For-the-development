import {useEffect, useState} from "react";
import {getRandomQuote} from "./RandomQuote.tsx";

let intervalId: number = 0;

export const Quote = () => {

    const [quote, setQuote] = useState(getRandomQuote);

    function setQuoteRandom() {
        setQuote(getRandomQuote);
    }

    function keyDownEvent(e: KeyboardEvent) {
        document.removeEventListener("keydown", keyDownEvent)
        clearInterval(intervalId - 1);
        clearInterval(intervalId);
        e.stopPropagation();
        setQuoteRandom();

        console.log(intervalId)
    }

    function addKeyPressEventListener() {
        document.addEventListener("keydown", keyDownEvent);
        intervalId = setInterval(setQuoteRandom, 10000);

        console.log(intervalId)
    }

    useEffect(() => {
        addKeyPressEventListener();
        document.addEventListener("keyup", addKeyPressEventListener);

        console.log(intervalId)
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