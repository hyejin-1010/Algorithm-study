// 프로그래머스: 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript#

function solution(clothes) {
    let answer = 1;
    
    const countOfCloth = {};
    for (let cloth of clothes) {        
        if (!countOfCloth[cloth[1]]) { countOfCloth[cloth[1]] = 0; }
        countOfCloth[cloth[1]] ++;
    }
    for (let key in countOfCloth) {
        answer *= countOfCloth[key] + 1;
    }
    return answer - 1;
}