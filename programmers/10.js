// 프로그래머스: 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function solution(answers) {
    const student = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const score = [0, 0, 0];
    let max = 0;
    answers.forEach((answer, index) => {
        for (let i = 0; i < 3; i++) {
            if (student[i][index % student[i].length] === answer) {
                score[i]++;
                if (score[i] > max) { max = score[i]; }
            }
        }
    });
    return score.reduce((acc, s, index) => {
        if (s === max) { acc.push(index + 1); }
        return acc;
    }, []);
}