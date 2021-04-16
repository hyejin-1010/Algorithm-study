// 기능 개발
// 문제: https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
    const days = {};
    progresses.reduce((acc, progress, index) => {
        let day = 0;
        while (progress < 100) {
            progress += speeds[index];
            day++;
        }
        for (const beforeDay of acc) {
            if (beforeDay > day) {
                day = beforeDay;
            }
        }
        acc.push(day);
        if (!days[day]) { days[day] = 0; }
        days[day]++;
        return acc;
    }, []);
    
    return Object.values(days);
}