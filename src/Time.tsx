import {useEffect, useState} from "react";

export const Time = () => {

    const [timeWithFormat, setTimeWithFormat] = useState(getCurrentTimeWithFormat);

    function resetTime() {
        setTimeWithFormat(getCurrentTimeWithFormat);
    }

    useEffect(() => {
        while (true) {
            if (new Date().getMilliseconds() < 200) {
                setInterval(resetTime, 1000)
                break
            }
        }
    }, []);

    return (
        <p className={"font-p-medium tabular-nums text-[22px] text-white text-center"}>
            {timeWithFormat}
        </p>
    )
}

const getCurrentTimeWithFormat = () => {

    const time = new Date();

    const minute = time.getMinutes() > 9 ? `${time.getMinutes()}` : `0${time.getMinutes()}`;
    const second = time.getSeconds() > 9 ? `${time.getSeconds()}` : `0${time.getSeconds()}`;

    // 형식에 맞춰 문자열 생성
    return `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일  ${time.getHours()}시 ${minute}분 ${second}초`;
}

export const calculateProgressAndDaysRemaining = () => {
    const currentDate = new Date(); // 현재 날짜 가져오기
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1); // 올해의 시작일
    const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1); // 내년의 시작일

    const totalDaysInYear = (endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24); // 총 일수
    const daysPassed = (currentDate.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24); // 지난 일수

    const percentage = (daysPassed / totalDaysInYear) * 100; // 퍼센트 계산
    const daysRemaining = totalDaysInYear - Math.ceil(daysPassed); // 남은 일수

    return {
        percentage: parseFloat(percentage.toFixed(1)), // 소수점 2자리로 제한
        daysRemaining: daysRemaining
    };
}