// 멀쩡한 사각형
// 문제: https://programmers.co.kr/learn/courses/30/lessons/62048#qna

function solution(w, h) {
    return w * h - (w + h - gcd(w, h));
}

function gcd(a, b) {
    for (let num = a > b ? a : b; num >= 0; num--) {
        if (a % num === 0 && b % num === 0) {
            return num;
        }
    }
}


