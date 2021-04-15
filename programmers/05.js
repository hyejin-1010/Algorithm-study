// 스킬트리
// 문제: https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#

function solution(skill, skill_trees) {
  var answer = 0;
  
  for (const data of skill_trees) {
    let order = skill.split('').map(sk => data.lastIndexOf(sk));
    let notAlreadySkill = false; // 먼저 배워야 하는 스킬들이 앞에 없는 경우
    order = order.reduce((acc, o, index) => {
      if (o === -1) { return acc; }
      acc.push(o);
      for (let j = 0; j < index; j++) {
        if (order[j] === -1) {
          notAlreadySkill = true;
          break;
        }
      }
      return acc;
    }, []);
    
    if (notAlreadySkill) { continue; }
    
    const sortOrder = Array.from(order).sort((a, b) => (a - b));
    if (JSON.stringify(order) === JSON.stringify(sortOrder)) {
      answer++;
    }
  }
  
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
