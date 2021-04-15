// 프린터
// 문제: https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
    priorities = priorities.map((p, index) => ({ index, value: p }));
    let count = 0;
    let index = 0;
    let max = { index: -1, value: 0 };
    while (priorities.length > 0) {
        const item = priorities[index];
        if (item.value > max.value) {
            max = { index, value: item.value, pIndex: item.index };
        }
        index++;
        if (index === priorities.length) { index = 0; }
        if (index === (max.index === -1 ? 0 : max.index)) {
            priorities.splice(index, 1);
            index = max.index;
            if (index >= priorities.length) { index = 0; }
            count++;
            if (max.pIndex === location) { return count; }
            max = { index: -1, value: 0 };
        }
    }
}