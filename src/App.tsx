import {getRandomQuote} from "./RandomQuote.tsx";
import {calculateProgressAndDaysRemaining, getCurrentDateWithFormat} from "./Date.tsx";
import {useEffect} from "react";

export const App = () => {

    const quote = getRandomQuote();
    const cal = calculateProgressAndDaysRemaining();

    useEffect(() => {
        const progressBar = document.getElementById("progress-bar")!;
        const width = (progressBar.parentElement!.offsetWidth / 100 * cal.percentage);

        progressBar.style.width = (progressBar.offsetWidth > width ? progressBar.offsetWidth : width) + "px";
    }, []);

    return (
        <main
            className={"flex flex-col justify-center gap-[64px] rounded-[64px] bg-[#222222]"}>
            <div className={"flex flex-col gap-[20px]"}>
                <p className={"font-p-regular text-[24px] text-white text-center whitespace-normal break-keep text-pretty"}>
                    "{quote[0]}"
                </p>
                <p className={"font-p-medium text-[20px] text-white text-right"}>
                    - {quote[1]}
                </p>
            </div>
            <div className={"flex flex-col gap-[10px]"}>
                <p className={"font-p-medium text-[24px] text-white text-center"}>
                    {getCurrentDateWithFormat()}
                </p>
                <p className={"font-p-medium text-[24px] text-white text-center"}>
                    <span className={"text-[#FF7F11]"}>{cal.percentage}</span>% 진행됨, <span
                    className={"text-[#FF7F11]"}>{cal.daysRemaining}</span>일 남음.
                </p>
                <div
                    className={"flex justify-center items-center p-[10px] h-[80px] w-[500px] bg-[#333333] rounded-[100px]"}>
                    <div
                        className={"flex justify-start items-center p-[10px] h-full w-full bg-[#222222] rounded-[100px]"}>
                        <div className={"flex justify-start items-center h-full w-full rounded-[100px]"}>
                            <div id={"progress-bar"} className={"h-full w-[100px] bg-[#FF7F11] rounded-[100px]"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
