// 크레인 인형 뽑기
// 문제: https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  const basket = [];
  let answer = 0;
  
  for (const move of moves) {
      let depth = 0;
      for (depth = 0; depth < board.length; depth++) {
          if (board[depth][move - 1] !== 0) { break; }
      }
      if (depth >= board.length) { continue; }
      if (basket.length && basket[basket.length - 1] === board[depth][move - 1]) {
          basket.splice(basket.length - 1, 1);
          answer += 2;
      } else { basket.push(board[depth][move - 1]); }
      board[depth][move - 1] = 0;
  }
  return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))