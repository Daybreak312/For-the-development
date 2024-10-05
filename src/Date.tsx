export const getCurrentDateWithFormat = () => {

    const time = new Date();

    // 날짜 형식 설정
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();

    // 형식에 맞춰 문자열 생성
    return `${year}년 ${month}월 ${day}일`;
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