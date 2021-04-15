// 완주하지 못한 선수
// 문제: https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const completionObj = completion.reduce((acc, name) => {
    if (!acc[name]) { acc[name] = 0; }
    acc[name]++;
    return acc;
  }, {});
  
  for (const name of participant) {
    if (completionObj[name] > 0) {
      completionObj[name]--
    } else { return name; }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));