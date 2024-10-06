import {calculateProgressAndDaysRemaining, Time} from "./Time.tsx";
import {useEffect} from "react";
import {Quote} from "./Quote.tsx";

export const App = () => {
    const remaining = calculateProgressAndDaysRemaining();

    useEffect(() => {
        const progressBar = document.getElementById("progress-bar")!;
        const width = (progressBar.parentElement!.offsetWidth / 100 * remaining.percentage);

        progressBar.style.width = (progressBar.offsetWidth > width ? progressBar.offsetWidth : width) + "px";
    }, []);

    return (
        <main
            autoFocus={true}
            className={"flex flex-col justify-center     w-[500px] gap-[30px] rounded-[64px] bg-[#222222]"}>
            <Quote></Quote>
            <div className={"flex flex-col gap-[10px]"}>
                <Time></Time>
                <p className={"font-p-medium text-[22px] text-white text-center"}>
                    <span className={"text-[#FF7F11]"}>{remaining.percentage}</span>% 진행됨, <span
                    className={"text-[#FF7F11]"}>{remaining.daysRemaining}</span>일 남음.
                </p>
                <div
                    className={"flex justify-center items-center p-[7px] h-[60px] w-full bg-[#333333] rounded-[100px]"}>
                    <div
                        className={"flex justify-start items-center p-[8px] h-full w-full bg-[#222222] rounded-[100px]"}>
                        <div className={"flex justify-start items-center h-full w-full rounded-[100px]"}>
                            <div id={"progress-bar"}
                                 className={"overflow-hidden h-full w-[100px] bg-[#FF7F11] rounded-[100px]"}>
                                <div className={"h-[30%] bg-[#FF8923]"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
